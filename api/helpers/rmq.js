
// M O D U L E S

var amqp                                    = require('amqplib/callback_api');
var util                                    = require('util');

var common                                  = require('../helpers/common.js');

// C O N S T A N T S

var _MIN_DELAY                              = 500; // ms
var _ARG_DEBUG                              = false;

// A R G S

if (_ARG_DEBUG) {
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

// V A R I A B L E S

var _config_str                             = process.argv[2].replace(/\{\{ip\}\}/g,common.get_ip_address());
var _send_ack                               = false;
var _delay                                  = 0;
var _config                                 = {};
var _connected                              = false;
var _rconn                                  = {};
var _rchannel                               = {};
var _closing                                = false;
var _log_name                               = 'RMQ';
var _pass_name                              = '';

// M E S S A G E S

process.on('SIGINT', function () {
    // do nothing, but capture the signal
});

process.on('message', function(data) {
    switch (data.type) {
        case 'publish':
            log('info', util.format('[%d] %s | MSG RECEIVED - %s:\n%s', process.pid, _log_name, data.type, JSON.stringify(data.msg)));
            send_rmq(false, data.msg);
            break;

        case 'close':
            _closing = true;
            log('info', util.format('[%d] %s | MSG RECEIVED - %s', process.pid, _log_name, data.type));
            terminate_rmq();
            break;

        case 'reconnect':
            log('info', util.format('[%d] %s | MSG RECEIVED - %s', process.pid, _log_name, data.type));
            reconnect_rmq();
            break;

        case 'error':
            log('error', util.format('[%d] %s | MSG RECEIVED - %s:\n%s', process.pid, _log_name, data.type, data.msg));
            break;

        default:
            log('warn', util.format('[%d] %s | unknown message received:\n<%s>', process.pid, _log_name, JSON.stringify(data)));
            break;
    }
});

// F U N C T I O N S

function log(level, msg) {
    try {
        process.send({'type': 'log', 'log': {'level': level, 'msg': msg}});
    } catch (error) {
        console.log('[%d] %s | log error for "%s"\nlevel: %s\nmsg: %s\nerror:\n%s', process.pid, _log_name, level, msg, error.message);
    }
}

function pass(bytes, data) {
    try {
        //console.log('[%d] %s | pass: %s - received %d bytes', process.pid, _log_name, _pass_name, bytes);
        process.send({'type': _pass_name, 'received': {'bytes': bytes, 'data': data}});
    } catch (error) {
        //console.log('[%d] %s | data error - received: %d bytes\n%s\nerror:\n%s', process.pid, _log_name, bytes, JSON.stringify(data), error.message);
        console.log('[%d] %s | data error - received: %d bytes\n%s\nerror:\n%s', process.pid, _log_name, bytes, 'X', error.message);
    }
}

function parse_config() {
    var go                  = true;

    try {
        _config             = JSON.parse(_config_str);
    } catch (err) {
        go                  = false;
        log('fatal', util.format('[%d] %s | JSON config parse error: %s\nCONFIG STR:\n%s', process.pid, _log_name, err.message, _config_str));
    }

    if (go) {
        if (!common.is_obj(_config) || common.is_obj_empty(_config)) {
            go              = false;
            log('fatal', util.format('[%d] %s | JSON config parse failure\nCONFIG STR:\n%s', process.pid, _log_name, _config_str));
        }
    }

    if (go) {
        if (_config.trace.args) {
            var args        = '';

            process.argv.forEach(function (val, index, array) {
                args        += util.format('index: #%d - val: %s\n', index, val);
            });

            log('trace', util.format('[%d] %s | ARGS:\n%s', process.pid, _log_name, args.substr(0, args.length - 2)));
        }

        process.title       = _config.process.title;

        _log_name           = _config.process.log_name;
        _pass_name          = _config.process.pass_name;
        _send_ack           = (_config.amqp.queue.consume.options.noAck === false);
        _delay              = _config.delay.close;

        log('info', util.format('[%d] %s | initialized %s - memory usage: %s', process.pid, _log_name, process.title, util.inspect(process.memoryUsage())));

        if (isNaN(_delay) || (_delay < _MIN_DELAY)) {
            _delay          = _MIN_DELAY;
            log('info', util.format('[%d] %s | closing delay re-set: %d ms', process.pid, _log_name, _delay));
        }

        log('debug', util.format('[%d] %s | parameters - wait for kill: %d\nRMQ config:\n%s',
                                              process.pid,
                                              _log_name,
                                              _delay,
                                              JSON.stringify(_config, null, '\t')));

        connect_rmq();
    } else {
        close_rmq(true, false, 1);
    }
}

function connect_rmq() {
    amqp.connect(_config.amqp.connection, function(err, rconn) {
        if (err) {
            log('error', util.format('[%d] %s | connection failure: %s', process.pid, _log_name, err.message));
        } else {
            log('info', util.format('[%d] %s | connection established', process.pid, _log_name));

            rconn.on('close', function() {
                log('warn', util.format('[%d] %s | connection closed & child process exited', process.pid, _log_name));
                setTimeout(function() {
                    process.exit(0);
                }, _delay);
            });

            rconn.on('error', function(err_conn) {
                log('error', util.format('[%d] %s | connection error: %s', process.pid, _log_name, err_conn.message));
            });

            rconn.on('blocked', function(reason) {
                log('info', util.format('[%d] %s | client blocked - reason: %s', process.pid, _log_name, reason));
            });

            rconn.on('unblocked', function() {
                log('info', util.format('[%d] %s | client unblocked', process.pid, _log_name));
            });

            rconn.createChannel(function(err2, rchannel) {
                if (err2) {
                    log('error', util.format('[%d] %s | channel failure: %s', process.pid, _log_name, err2.message));
                } else {
                    log('info', util.format('[%d] %s | channel established', process.pid, _log_name));

                    // pass back the RMQ connection & channel
                    _connected  = true;
                    _rconn      = rconn;
                    _rchannel   = rchannel;

                    rchannel.on('close', function() {
                        log('info', util.format('[%d] %s | channel closed', process.pid, _log_name));
                    });

                    rchannel.on('error', function(err_chan) {
                        log('error', util.format('[%d] %s | channel error: %s', process.pid, _log_name, err_chan.message));
                    });

                    rchannel.on('return', function(msg) {
                        log('info', util.format('[%d] %s | channel returned message: %s', process.pid, _log_name, msg));
                    });

                    rchannel.on('drain', function() {
                        log('info', util.format('[%d] %s | channel drain called', process.pid, _log_name));
                    });

                    //rchannel.assertExchange(config.amqp.exchange.name, config.amqp.exchange.type, config.amqp.exchange.assert.options, function(err3, ok3) {
                    rchannel.checkExchange(_config.amqp.exchange.name, function(err3, ok3) {
                        if (err3) {
                            log('error', util.format('[%d] %s | exchange "%s" error: %s',
                                                     process.pid, _log_name, _config.amqp.exchange.name, err3.message));
                        } else {
                            log('info', util.format('[%d] %s | exchange "%s" is ready',
                                                    process.pid, _log_name, _config.amqp.exchange.name));

                            rchannel.assertQueue(_config.amqp.queue.name, _config.amqp.queue.assert.options, function(err4, ok4) {
                                if (err4) {
                                    log('error', util.format('[%d] %s | queue "%s" - error: %s',
                                                             process.pid, _log_name, _config.amqp.queue.name, err4.message));
                                } else {
                                    log('info', util.format('[%d] %s | queue "%s" is ready',
                                                            process.pid, _log_name, _config.amqp.queue.name));

                                    rchannel.prefetch(_config.amqp.channel.prefetch.count, _config.amqp.channel.prefetch.global);

                                    rchannel.bindQueue(ok4.queue, _config.amqp.exchange.name, _config.amqp.queue.pattern, {}, function(err5, ok5) {
                                        if (err5) {
                                            log('error', util.format('[%d] %s | could not bind to queue "%s" - error: %s',
                                                                     process.pid, _log_name, _config.amqp.queue.name, err5.message));
                                        } else {
                                            log('info', util.format('[%d] %s | bound to queue "%s"',
                                                                    process.pid, _log_name, _config.amqp.queue.name));
                                            //start_rmq();
                                            rchannel.consume(ok4.queue, function(msg) {
                                                //console.log('-------------------> <%s>', msg.content.toString('utf8'));
                                                if (msg.content.length > 0) {
                                                    pass(msg.content.length, msg.content.toString('utf8'));
                                                } else {
                                                    log('warn', util.format('[%d] %s | msg content is empty', process.pid, _log_name));
                                                }

                                                if (_send_ack) {
                                                    rchannel.ack(msg);
                                                }

                                            }, _config.amqp.queue.consume.options);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

function send_rmq(is_logging, data) {
    var msg = JSON.stringify(data);
    if (is_logging) {
        log('info', util.format('[%d] %s | sent message: %s', process.pid, _log_name, msg));
    }
    //_rchannel.publish(_config.amqp.exchange.name, '', new Buffer(msg, 'utf8'));
}

function start_rmq() {
    send_rmq(true, 'HELLO, RMQ - READY FOR DATA');
}

function close_rmq(is_exiting, is_reconnecting, code) {
    var delay = _delay;

    if (_connected) {
        if (!common.is_obj_empty(_rchannel)) {
            try {
                log('info', util.format('[%d] %s | closing channel', process.pid, _log_name));
                _rchannel.close();
            } catch (error) {
                log('warn', util.format('[%d] %s | close channel error: %s', process.pid, _log_name, error.message));
                is_exiting = true;
            }
        }
        if (!common.is_obj_empty(_rconn)) {
            try {
                log('info', util.format('[%d] %s | closing connection', process.pid, _log_name));
                _rconn.close();
            } catch (error) {
                log('warn', util.format('[%d] %s | close connection error: %s', process.pid, _log_name, error.message));
                is_exiting = true;
            }
        }
    } else {
        log('info', util.format('[%d] %s | closing, not connected', process.pid, _log_name));
    }

    if (_closing) {
        is_exiting          = true;
        is_reconnecting     = false;
        code                = 0;
        delay               = 50;
    }

    if (is_exiting) {
        setTimeout(function() {
            process.exit(code);
        }, delay);
    } else if (is_reconnecting) {
        setTimeout(function() {
            connect_rmq();
        }, delay);
    }
}

function terminate_rmq() {
    setTimeout(function() {
        close_rmq(false, false, 0);
    }, _delay);
}

function reconnect_rmq() {
    setTimeout(function() {
        close_rmq(false, true, 0);
    }, _delay);
}

// P R O C E S S

parse_config();
