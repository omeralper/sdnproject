module.exports = function () {
    var path = require('path');

    var main = require('../../main.js');
    var app_config = require('../../config/config.json');
    var common = require('../helpers/common.js');
    var proxy = require('../helpers/proxy');

    var current_topo = {};
    //var current_topo_string     = '';

    var app = main.app;
    var io = main.io;
    var logger = main.logger;

    io.on('connection', function (socket) {
        logger.debug('SOCKET.IO | client connected\nCLIENT - IP: "%s" | user-agent: "%s"\nSOCKET - socket ID: "%s" | session ID: "%s"\nMETA DATA - version: "%s" | basePath: "%s"',
            socket.handshake['address'], socket.handshake['headers']['user-agent'], socket.id, socket.handshake.session_id, main.get_version(), main.get_base_path());
        // socket.request.connection.remoteAddress
        socket.emit('metaData', {'version': main.get_version(), 'basePath': main.get_base_path()});
        socket.emit('topology', current_topo);
    });

    io.on('disconnect', function (socket) {
        logger.debug('SOCKET.IO | client disconnected');
    });

    //app.put('/testTopology', function(req,res) {
    //    current_topo_string = '';
    //
    //    req.on('data', function(d) {
    //        current_topo_string += d;
    //    });
    //
    //    req.on('end', function(d) {
    //        logger.debug('turning into JSON');
    //        var current_topo_json = {};
    //
    //        try {
    //            current_topo_json = JSON.parse(current_topo_string);
    //        } catch (e) {
    //            logger.error('TOPOLOGY | test topology - JSON parse error', e.message);
    //        }
    //
    //        current_topo = current_topo_json;
    //        return res.sendStatus(200);
    //    });
    //});

    app.post('/login', function (req, res) {
        var sess = req.session;
        var user_name = req.body.user;
        var password = req.body.password;

        sess.username = user_name;

        logger.debug('LOGIN - checking DB for user: %s | %s', user_name, password);

        if (user_name == 'admin' && password == 'admin') {
            res.send('yes');
        } else {
            res.send('no');
        }
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            if (err) {
                logger.debug('LOGOUT | session destroy error: %s', err.message);
            } else {
                res.redirect('/');
            }
        });
    });

    app.get('/stop', function (req, res) {
        if (logger.isDebugEnabled()) {
            logger.debug('HTTP request: %s\nHTTP headers: %s', req.url, JSON.stringify(req.headers, null, '\t'));
        }

        if (!app_config.if_localhost_only.stop
            || common.is_local_host(req.connection.remoteAddress)) {

            if (logger.isInfoEnabled()) {
                logger.info('received HTTP "stop" command');
            }

            res.set('Content-Type', 'text/plain').status(200).send('stopping ...\n');

            main.shutdown();
        } else {
            logger.error('unauthorized HTTP request');

            res.set('Content-Type', 'text/plain').status(403).send('FORBIDDEN: unauthorized request');
        }
    });

    app.get('/ping', function (req, res) {
        res.set('Content-Type', 'text/plain').status(200).send('pong\n');
    });

    app.post('/tsdb-query', function (req, res) {
        if (logger.isDebugEnabled()) {
            logger.debug('HTTP request: %s\nHTTP headers: %s', req.url, JSON.stringify(req.headers, null, '\t'));
        }

        var args = {
            request: {
                value: req.body
            }
        };
        var remote = {
            real: true,
            url: 'http://192.168.3.16:8181/prognet/tsdb/query'
        };

        if (app_config.services.TSDB.tsdbQueryPOST.real) {
            remote.url = app_config.services.TSDB.tsdbQueryPOST.url;
        }

        if (logger.isDebugEnabled()) {
            logger.debug('TSDB - remote:\n%s\nargs:\n%s', JSON.stringify(remote), JSON.stringify(args));
        }

        if (!proxy.run(remote, args, res)) {
            var response = {'err': true, desc: 'server error'};

            logger.error('TSDB ERROR');

            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.send(response);
        }
    });

    app.post('/lite-controller/list', function (req, res) {
        if (logger.isDebugEnabled()) {
            logger.debug('HTTP request: %s\nHTTP headers: %s', req.url, JSON.stringify(req.headers, null, '\t'));
        }

        var args = req.body;

        if (logger.isDebugEnabled()) {
            logger.debug('POST:\n%s', JSON.stringify(args, null, '\t'));
        }

        var remote = app_config.services.TSDB.tsdbDevicePOST

        if (!proxy.run(remote, args, res)) {
            logger.warn('FAILURE - mock data');

            var data = {
                "errorInfo": {
                    "code": 0,
                    "message": "Success",
                    "extras": ["SUCCESS: PROGNET-000000: Success (CMN-000000)"]
                },
                "data": {
                    "list": [{
                        "address": "127.0.0.1",
                        "switchlist": {
                            "list": [{
                                "id": "of:0000000000000001",
                                "ports": {
                                    "list": [1, 2, 3, 7, 9]
                                }
                            }, {
                                "id": "of:0000000000000002",
                                "ports": {
                                    "list": [3, 4, 11]
                                }
                            }]
                        }
                    }]
                },
                "status": "SUCCESS"
            }

            res.set('Content-Type', 'application/json').status(200).send(data);
        }
    });

    app.post('/rmq-test', function (req, res) {
        if (logger.isDebugEnabled()) {
            logger.debug('HTTP request: %s\nHTTP headers: %s', req.url, JSON.stringify(req.headers, null, '\t'));
        }

        if (!app_config.if_localhost_only.rmq
            || common.is_local_host(req.connection.remoteAddress)) {

            var msg = req.body;

            if (logger.isInfoEnabled()) {
                logger.info('RMQ TEST | received message:\n%s', JSON.stringify(msg));
            }

            if (common.is_obj_empty(msg)) {
                logger.warn('RMQ TEST | message is empty');
                res.set('Content-Type', 'text/plain').status(400).send('message is empty');
            } else {
                if (app_config.services.topology_rmq.enabled) {
                    main.send_rmq({'type': 'publish', 'msg': msg});
                    res.set('Content-Type', 'text/plain').status(200).send('message published');
                } else {
                    logger.warn('RMQ TEST | RMQ is disabled');
                    res.set('Content-Type', 'text/plain').status(404).send('disabled');
                }
            }
        } else {
            logger.error('unauthorized HTTP request');
            res.set('Content-Type', 'text/plain').send(403).send('FORBIDDEN: unauthorized request');
        }
    });


    app.get('/*', function (req, res, next) {
        //if (logger.isDebugEnabled()) {
        //    logger.debug('HTTP request: %s\nHTTP headers: %s', req.url, JSON.stringify(req.headers, null, '\t'));
        //}
        //INFO: serve only request without extensions
        if (req.path.indexOf('.') === -1) {
            var pathAndFile = common.get_path_and_file();
            res.sendFile(pathAndFile.file, {root: pathAndFile.path});
        }
        else
            next();

    });
}
