
'use strict';

var path                        = require('path');
var log4js                      = require('log4js');
var util                        = require('util');
//var log4js_node_amqp            = require('log4js-node-amqp');
//var callerId                    = require('caller-id');

var common                      = require('./common.js');
var config                      = require('../../config/config.json');
var log_config                  = require('../../config/log4js.json');

var log_options                 = {};

if (config.log4js.config_reload > 0) {
    log_options['reloadSecs']   = config['log4js']['config_reload'];
}

// absolute path: config.log4js.log_dir
if (!common.is_empty(config.log4js.log_dir)) {
    log_options['cwd']          = config.log4js.log_dir;
}

// register machine name
log_config['appenders'].forEach(function(element, index, array) {
    if (element['type'] === 'log4js-node-amqp') {
        element['additionalInfo']['machine'] = require("os").hostname();
    }
});

log4js.configure(log_config, log_options);

function Logger() {
    this._logger = log4js.getLogger('log');
    //this._elastic = log4js.getLogger('elastic');
    this._lastUpdated = new Date();
}

Logger.prototype.getLastUpdated = function () {
    return this._lastUpdated;
}

Logger.prototype.setLevel = function (level) {
    this._logger.setLevel(level);
    //this._elastic.setLevel(level);
    this._lastUpdated = new Date();
};

Logger.prototype.getLevel = function () {
    //return [this._logger.level.toString(), this._elastic.level.toString()];
    return this._logger.level.toString();
}

Logger.prototype.removeLevel = function () {
    this._logger.removeLevel();
    //this._elastic.removeLevel();
};

Logger.prototype.log = function () {
    //var caller = callerId.getData() || this;
    this._logger.log.apply(this._logger, arguments);
    //this._elastic.log.apply(this._elastic, arguments);
};

Logger.prototype.isLevelEnabled = function (otherLevel) {
    return this._logger.isLevelEnabled(otherLevel);// || this._elastic.isLevelEnabled(otherLevel);
};

['Trace', 'Debug', 'Info', 'Warn', 'Error', 'Fatal', 'Mark'].forEach(
    function (levelString) {
        Logger.prototype['is' + levelString + 'Enabled'] = function () {
            return this._logger['is' + levelString + 'Enabled'].apply(this._logger, arguments);
                //|| this._elastic['is' + levelString + 'Enabled'].apply(this._elastic, arguments);
        };

        Logger.prototype[levelString.toLowerCase()] = function () {
            this._logger[levelString.toLowerCase()].apply(this._logger, arguments);
            //this._elastic[levelString.toLowerCase()].apply(this._elastic, arguments);
        };
    }
);

function disableAllLogWrites() {
    this._logger.disableAllLogWrites();
    //this._elastic.disableAllLogWrites();
}

function enableAllLogWrites() {
    this._logger.enableAllLogWrites();
    //this._elastic.enableAllLogWrites();
}

function getConfig() {
    return JSON.stringify(log_config, null, '    ');
}

function getOptions() {
    return JSON.stringify(log_options, null, '    ');
}

function shutdown() {
    try {
        log4js.shutdown(function(){});
    } catch (err) {
        console.log('LOG4JS - shutdown error: %s', err.message);
    }
}

exports.Logger = new Logger();
exports.getConfig = getConfig;
exports.getOptions = getOptions;
exports.shutdown = shutdown;
exports.disableAllLogWrites = disableAllLogWrites;
exports.enableAllLogWrites = enableAllLogWrites;

//log4js.getLogger('log').info('APP | log config:\n%s', JSON.stringify(log_config, null, '    '));
