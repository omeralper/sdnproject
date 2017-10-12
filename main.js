
var express             = require('express');
var session             = require('express-session');
var serve_index         = require('serve-index');
var cors                = require('cors');
var body_parser         = require('body-parser');
var socket_io           = require('socket.io');
var util                = require('util');
var path                = require('path');
var child_process       = require('child_process');
var jsyaml              = require('js-yaml');
var fs                  = require('fs');
var log4js              = require('log4js');
var swagger_tools       = require('swagger-tools');

var common              = require('./api/helpers/common.js');
var proxy               = require('./api/helpers/proxy.js'); //TODO refactoring gerekli
var package_json        = require('./package.json');
var config              = require('./config/config.json');
var logger              = require('./api/helpers/logger.js');

var http                = require('http');
var https               = require('https');
var compression         = require('compression');

var _logger             = logger.Logger;
var _app                = express();
var _server             = http.createServer(_app);
var _io                 = socket_io(_server, {
    log: false
});
_app.use(compression({
    level : 9 //use best compression ratio

}));

if (config.ssl.enabled) {
    var ssl_options = {
        key: fs.readFileSync(config.ssl.key),
        cert: fs.readFileSync(config.ssl.cert)
    }

    var _server_ssl = https.createServer(ssl_options, _app);
    var _io_ssl = socket_io(_server_ssl, {
        log: false
    });
}

var _ps_rmq_topo        = {};
var _ps_rmq_alarm       = {};
var _closing            = false;
var _timer_close        = {};
var _timer_reinit       = [];
var _timer_reconnect    = [];
var _rmq_reconnecting   = {};
var _rmq_reiniting      = {};
var _version            = '';
var _base_path          = '';
var _build_date         = {};
var _start_date         = {};
var _terminate          = false;


// process
process.title           = config.process.title;

process.on('SIGINT', function () {
    console.log(''); // force line feed on console
    _logger.info('APP | [%d] TITLE: %s - received signal SIGINT', process.pid, process.title);
    shutdown();
});

function set_version(version) {
    _version = version;
}

function get_version() {
    return _version;
}

function set_base_path(base_path) {
    _base_path = base_path;
}

function get_base_path() {
    return _base_path;
}

function get_proj_id() {
    return config.proj.id;
}

function get_proj_name() {
    return config.proj.name;
}

function set_build_date() {
    if (common.is_empty(config.build_date)) {
        // build date is the last modified date of the config date
        fs.stat('./config/config.json', function(err, stats){
            if (_logger.isTraceEnabled()) {
                _logger.info('APP | config.json - stats:\n%s', JSON.stringify(stats, null, '\t'));
            }
            _build_date = new Date(util.inspect(stats.mtime));
            _logger.info('APP | build date: %s ', get_build_date());
        });
    } else {
        _build_date = new Date(util.inspect(config.build_date));
        _logger.info('APP | build date: %s ', get_build_date());
    }
}

function get_build_date() {
    return _build_date.toISOString();
}

function set_start_date() {
    _start_date = new Date();
    _logger.info('APP | start date: %s', get_start_date());
}

function get_start_date() {
    return _start_date.toISOString();
}

function shutdown() {
    if (_closing) {
        _logger.info('APP | already shutting down');
    } else {
        _closing        = true;

        _timer_close    = setTimeout(function() {
            _logger.warn('APP | TERMINATED');
            force_terminate(0);
        }, config.process.delay.close_max);

        _logger.info('APP | shutting down - # of connected clients: %d', _io.engine.clientsCount);

        if (_timer_reinit.length > 0) {
            for (var i = 0; i < _timer_reinit.length; i++) {
                clearTimeout(_timer_reinit[i]);
            }
        }

        if (_timer_reconnect.length > 0) {
            for (var i = 0; i < _timer_reconnect.length; i++) {
                clearTimeout(_timer_reconnect[i]);
            }
        }

        if (config.services.topology_rmq.enabled) {
            _logger.info('APP | closing RMQ TOPOLOGY');
            send_rmq('topo', {'type':'close'});
        } else {
            terminate();
        }

        if (config.services.alarm_rmq.enabled) {
            _logger.info('APP | closing RMQ ALARM');
            send_rmq('alarm', {'type':'close'});
        } else {
            terminate();
        }
    }
}

function terminate() {
    // warn clients
    if (!_terminate) {
        _terminate = true;

        _io.sockets.emit('terminate');

        setTimeout(function() {
            _io.close();
            _logger.info('APP | socket.io closed');
            setTimeout(function() {
                _server.close();
                if (config.ssl.enabled) _server_ssl.close();
                _logger.info('APP | server closed');
                setTimeout(function() {
                    _logger.info('APP | stopped - exit\n');
                    setTimeout(function() {
                        if (!common.is_obj_empty(_timer_close)) {
                            clearTimeout(_timer_close);
                        }
                        try {
                            logger.shutdown();
                        } catch (err) {
                            // ignore
                        } finally {
                            setTimeout(function() {
                                process.exit(0);
                            }, config.process.delay.close_fin);
                        }
                    }, config.process.delay.close_fin);
                }, config.process.delay.close);
            }, config.process.delay.close);
        }, config.process.delay.close);
    }
}

function force_terminate(code) {
    send_rmq('topo', {'type':'close'});
    send_rmq('alarm', {'type':'close'});
    setTimeout(function() {
        process.exit(code);
    }, config.process.delay.close_fin);
}

function send_rmq(type, msg) {
    _logger.info('APP | RMQ %s - message:\n%s', type, JSON.stringify(msg));

    if (common.is_obj_empty(msg)) {
        _logger.warn('APP | RMQ %s - message is empty', type);
    } else {
        switch(type) {
            case 'topo':
                if (common.is_obj_empty(_ps_rmq_topo)) {
                    _logger.warn('APP | RMQ %s - not forked', type);
                    if (_closing) {
                        terminate();
                    }
                } else {
                    if (_ps_rmq_topo.connected) {
                        _ps_rmq_topo.send(msg);
                    } else {
                        _logger.warn('APP | RMQ - not connected');
                        if (_closing) {
                            terminate();
                        }
                    }
                }
                break;

            case 'alarm':
                if (common.is_obj_empty(_ps_rmq_alarm)) {
                    _logger.warn('APP | RMQ %s - not forked', type);
                    if (_closing) {
                        terminate();
                    }
                } else {
                    if (_ps_rmq_alarm.connected) {
                        _ps_rmq_alarm.send(msg);
                    } else {
                        _logger.warn('APP | RMQ - not connected');
                        if (_closing) {
                            terminate();
                        }
                    }
                }
                break;
        }
    }
}

function get_delay(type) {
    var config_rmq = {};

    switch(type) {
        case 'topo':
            config_rmq = config.services.topology_rmq;
            break;

        case 'alarm':
            config_rmq = config.services.alarm_rmq;
            break;

        default:
            config_rmq = config.services.topology_rmq;
    }

    var sec = common.gen_random(config_rmq.delay_random.min_sec,
        config_rmq.delay_random.max_sec);

    _logger.info('APP | RMQ %s - random delay: %d s', type, sec);

    return (sec * 1000);
}

function reconnect_rmq(type) {
    if (!_closing) {
        if (_rmq_reconnecting[type]) {
            _logger.info('APP | RMQ %s - already waiting for reconnecting', type);
        } else {
            _rmq_reconnecting[type] = true;
            _logger.info('APP | RMQ %s - will reconnect', type);
            _timer_reconnect.push(setTimeout(function() {
                send_rmq(type,{'type': 'reconnect'});
                _rmq_reconnecting[type] = false;
            }, get_delay(type)));
        }
    }
}

function reinit_rmq(ps, type, arg_str) {
    if (!_closing) {
        if (_rmq_reiniting[type]) {
            _logger.info('APP | RMQ %s - already waiting for reiniting', type);
        } else {
            _rmq_reiniting[type] = true;
            _logger.info('APP | RMQ %s - will reinit', type);
            _timer_reinit.push(setTimeout(function() {
                ps = init_rmq(type, arg_str);
                _rmq_reiniting[type] = false;
            }, get_delay(type)));
        }
    }
}

function init_rmq(type, arg_str) {
    var ps =  {};

    if (_closing) {
        _logger.warn('APP | NEW RMQ - not forking, app is closing');
    } else {
        var debug_port  = common.get_debug_port(process.execArgv, true); // process.execArgv.indexOf('--debug-brk') !== -1
        var args        = [arg_str];

        _logger.info('APP | NEW RMQ - forking');

        if (debug_port) {
            var new_port = (debug_port + 1).toString();
            args.push('--debug-brk=' + new_port);
            process.execArgv.push('--debug=' + new_port);
        }

        ps              = child_process.fork('./api/helpers/rmq.js', args);

        _logger.info('APP | NEW RMQ - process started - args:\n%s', JSON.stringify(args, null, '    '));

        ps.on('exit', function (code, signal) {
            _logger.info('APP | RMQ %s - process exited with code: %d, signal: <%s>', type, code, signal);
            if (_closing) {
                terminate();
            } else {
                reinit_rmq(ps, type, arg_str);
            }
        });

        // communicate with the child
        ps.on('message', function(message) {
            //var topo    = config.services.topology_rmq.process.pass_name;
            //var alarm   = config.services.alarm_rmq.process.pass_name;

            switch (message.type) {
                case 'log':
                    var msg_log = message.log.msg;

                    switch (message.log.level) {
                        case 'trace':
                            _logger.trace(msg_log);
                            break;

                        case 'debug':
                            _logger.debug(msg_log);
                            break;

                        case 'info':
                            _logger.info(msg_log);
                            break;

                        case 'warn':
                            _logger.warn(msg_log);
                            break;

                        case 'error':
                            _logger.error(msg_log);
                            reconnect_rmq(type);
                            break;

                        case 'fatal':
                            _logger.fatal(msg_log);
                            reinit_rmq(ps, type, arg_str);
                            break;

                        default:
                            _logger.debug(msg_log);
                    }
                    break;

                case 'topo':
                    if (config.services.topology_rmq.trace.data) {
                        if (_logger.isTraceEnabled()) {
                            _logger.trace('APP | RMQ TOPO - received:\n%s', JSON.stringify(message.received));
                        } else  if (config.services.topology_rmq.info.rmq) {
                            _logger.info('APP | RMQ TOPO - received: %d bytes', message.received.bytes);
                        }
                    } else if (config.services.topology_rmq.info.rmq) {
                        _logger.info('APP | RMQ TOPO - received: %d bytes', message.received.bytes);
                    }

                    _io.sockets.emit('topologyEvents', message.received.data);
                    break;

                case 'alarm':
                    if (config.services.alarm_rmq.trace.data) {
                        if (_logger.isTraceEnabled()) {
                            _logger.trace('APP | RMQ ALARM - received:\n%s', JSON.stringify(message.received));
                        } else  if (config.services.alarm_rmq.info.rmq) {
                            _logger.info('APP | RMQ ALARM - received: %d bytes', message.received.bytes);
                        }
                    } else if (config.services.alarm_rmq.info.rmq) {
                        _logger.info('APP | RMQ ALARM - received: %d bytes', message.received.bytes);
                    }

                    _io.sockets.emit('alarms', message.received.data);
                    break;

                default:
                    _logger.warn('APP | RMQ - process sent an unknown message: %s', JSON.stringify(message));
            }
        });
    }

    return ps;
}

module.exports = {
    app:            _app,
    logger:         _logger,
    io:             _io,
    send_rmq:       send_rmq,
    shutdown:       shutdown,
    get_version:    get_version,
    get_base_path:  get_base_path,
    get_proj_id:    get_proj_id,
    get_proj_name:  get_proj_name,
    get_build_date: get_build_date,
    get_start_date: get_start_date
};

function server_error_handler(error) {
    _logger.fatal('APP | SERVER ERROR - %s', error.message);
    force_terminate(1);
};

function server_callback(port) {
    var real_port = port;
    return function() {
        _logger.info('APP | listening port: %d', real_port);
        _logger.info('APP | config:\n%s', JSON.stringify(config, null, '\t'));
        _logger.info('APP | log config:\n%s', logger.getConfig());
        _logger.info('APP | log options:\n%s', logger.getOptions());

        if (config.services.topology_rmq.enabled) {
            setTimeout(function () {
                _ps_rmq_topo = init_rmq(config.services.topology_rmq.process.pass_name, JSON.stringify(config.services.topology_rmq));
            }, config.services.topology_rmq.delay.init);
        }

        if (config.services.alarm_rmq.enabled) {
            setTimeout(function () {
                _ps_rmq_alarm = init_rmq(config.services.alarm_rmq.process.pass_name, JSON.stringify(config.services.alarm_rmq));
            }, config.services.alarm_rmq.delay.init);
        }
    }
};

var port        = process.env.PORT || config.port;// MLAT-3595 kapsamında default değer kaldırılmıştır
console.log('Server listen');
if (port) {
    //MLAT-3595 : eğer port tanımı var ise bu porttan server açalım.
    _server.listen(port, server_callback(port));
}
_server.on('error', server_error_handler);

// the Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec                = fs.readFileSync('./api/swagger/swagger.yaml', 'utf8');
// YAML to JSON
var swagger_doc         = jsyaml.safeLoad(spec);
console.log('initializing swagger doc');

swagger_tools.initializeMiddleware(swagger_doc, function (middleware) {
    //DİKKAT swagger roputer options ayarlarında (yukarda) ignoreMissingHandlers=true olmalı
    console.log("inside initialize middleware");
    var corsSetup = cors(config.cors);

    _app.use(corsSetup);

    _app.options('*', corsSetup);

    // parse application/json
    _app.use(body_parser.json());
    // parse application/x-www-form-urlencoded
    _app.use(body_parser.urlencoded({extended: true}));

    // static dir: /client or /client/dist
    common.adjustRunMode(_app);

    // static dir: /logs
    if (config.dir_logs.enabled) {
        var dir_log = '';

        // absolute path: config.log4js.log_dir
        if (common.is_empty(config.log4js.log_dir)) {
            dir_log = path.join(__dirname) + '/logs';
        } else {
            dir_log = config.log4js.log_dir  + '/logs';
        }

        _app.use(config.dir_logs.path, express.static(dir_log));
        _app.use(config.dir_logs.path, serve_index(dir_log, {'hidden': false, 'icons': true}));
    }

    // express logs request/response status
    if (config.express.log) {
        _app.use(log4js.connectLogger(_logger, { level: log4js.levels.INFO }))
    }

    // swaggerRouter configuration
    var options = {
        swaggerUi: '/swagger.json',
        controllers: './api/controllers',
        ignoreMissingHandlers: true, //DIKKAT: Bu değer her zaman true olmalı. Yoksa CORS OPTIONS istekleri çalışmaz.
        validateResponse: false, //DIKKAT: Bu değer false olmalı.
        useStubs: false // process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    };

    console.log('swagger Meta Data');
    // interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    _app.use(middleware.swaggerMetadata());

    // validate Swagger requests
    _app.use(middleware.swaggerValidator(options));

    // route validated requests to appropriate controller
    _app.use(middleware.swaggerRouter(options));

    // serve the Swagger documents and Swagger UI
    if (config.express.swagger_ui) {
        _app.use(middleware.swaggerUi());
    }

    // session init
    _app.use(session({
        secret: 'F-16C.Fighting.Falcon',
        resave: false,
        saveUninitialized: false
    }));

    //generic error handler
    _app.use(function(err, req, res, next) {
        //_logger.error(JSON.stringify(err, null, '\t'));
        _logger.error(err.stack);

        //if (req.xhr || err.failedValidation) {
        proxy.genError(req,res,err, 'ERROR');
        //} else {
        //    res.status(200).send(err.message);
        //}
    });


    var version     = process.env.MILAT_BUILD_VERSION || ('v' + package_json.version);
    var base_path   = swagger_doc['basePath'];

    set_version(version);
    set_base_path(base_path);
    set_build_date();
    set_start_date();

    _logger.info('APP | started - PID: [%d]\nPROCESS TITLE: %s - VERSION: %s - BASE PATH: %s', process.pid, process.title, version, base_path);




    if (config.ssl.enabled) {
        var ssl_port    = process.env.SSL_PORT || config.ssl.port || 443;

        _server_ssl.listen(ssl_port, server_callback(ssl_port));
        _server_ssl.on('error', server_error_handler);
    }

    // Routes
    require('./api/helpers/routes')();

});
