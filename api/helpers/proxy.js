'use strict';

var config = require('../../config/config.json');

module.exports = (function () {
    //function privateMethod() {
    //}
    // var privateVaribla =;

    var request = require('superagent').agent();

    var logger = require('./logger.js').Logger;
    var mockup = require('./mockup');
    var common = require('./common.js');

    //var agent = request.agent();

    var self = {
        getVal: function (args) {
            if (!(args.request && args.request.value)) {
                return {
                    token: {
                        requestId: mockup.genRequestId(),
                        timestamp: mockup.genTimestamp()
                    }
                }
            }
            return args.request.value;
        },

        genError: function (args, res, err_message, state) {
            var val = self.getVal(args);
            var error_json = {
                "token": {
                    "requestId": val['token']['requestId'],
                    "timestamp": val['token']['timestamp']
                },
                "etag": val['etag'],
                "digest": val['digest'],
                "status": state || "SERVER_ERROR",
                "errorInfo": {
                    "code": -500,
                    "message": err_message.message || err_message,
                    "extras": err_message.message?err_message:{}
                }
            };

            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(error_json);
        },

        resolveConfig:function(remoteStr) {
            var parts=remoteStr.split('.');
            var found = config;
            for(var i in parts){
                var part = parts[i];
                if (!(found = found[part])) break;
            }
            return found;
        },

        run: function (remoteStr, args, res, inject) {
            var val = self.getVal(args);
            var remote;

            if (config.services.mode!="mockup" && (remote = this.resolveConfig(remoteStr)) && remote.real) {
                var remote_url = remote.url.replace(/\{version}/gi, config.services.version);
                logger.info('PROXY POST :' + remote_url);
                var req = request
                    .post(remote_url)
                    .withCredentials()
                    .send(val)
                    .set('Accept', 'application/json')
                    .end(function (err_proxy, res_proxy) {

                        if (err_proxy) {
                            logger.error('PROXY | POST - %s\nERROR RECEIVED: "%s"', remote_url, err_proxy.message);
                            self.genError(args, res, err_proxy.message);
                        } else {

                            //agent.saveCookies(res_proxy);

                            //NO DO NOT FIX CONTROLLERS ERRORS!!
                            //if (!res_proxy.body.hasOwnProperty('status')) {
                            //    res_proxy.body['status'] = "SUCCESS";
                            //}

                            try {
                                if (logger.isTraceEnabled()) {
                                    logger.trace('PROXY | POST - %s - response:\n%s', remote_url, JSON.stringify(res_proxy.body, null, '\t'));
                                }

                                if (inject) {
                                    //var body = Object.assign({}, res_proxy.body);
                                    var body = res_proxy.body;
                                    var last = inject.key.pop();

                                    inject.key.forEach(function (element, index, array) {
                                        if (!body.hasOwnProperty(element)) {
                                            body[element] = {};
                                        }

                                        body = body[element];
                                    });

                                    if (common.is_array(body[last])) {
                                        if (inject.unshift) {
                                            body[last].unshift(inject.data);
                                        } else {
                                            body[last].push(inject.data);
                                        }
                                    } else {
                                        body[last] = inject.data;
                                    }

                                    if (logger.isTraceEnabled()) {
                                        logger.trace('PROXY | after injecton:\n%s', JSON.stringify(res_proxy.body, null, '\t'));
                                    }
                                }

                                res.setHeader('Content-Type', 'application/json');
                                res.send(res_proxy.body);
                            } catch (err) {
                                logger.error('PROXY | GENERAL ERROR:\n%s', err.message);
                                generateError(err.message);
                            }
                        }
                    });
                return true;
            } else {
                return false;
            }
        }

    };
    return self;
}());
