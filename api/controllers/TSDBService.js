'use strict';

var logger = require('../../main').logger;
var config = require('../../config/config.json');
var proxy = require('../helpers/proxy');
var mockupHelper = require('../helpers/mockup');

/**
* parameters expected in the args:
* request (MetricNames)
**/
exports.tsdbMetricDefinitionPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "tsdbMetricDefinitionPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.TSDB.tsdbMetricDefinitionPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (MetricAndTagPrefixes)
**/
exports.tsdbMetricsNtagsPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "tsdbMetricsNtagsPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.TSDB.tsdbMetricsNtagsPOST', args, res)) {
        var response = mockupHelper.genResponse({});

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

/**
* parameters expected in the args:
* request (TsdbQueryRequest)
**/
exports.tsdbQueryPOST = function(args, res, next) {
    var val = proxy.getVal(args);
    var funcName = "tsdbQueryPOST";

    logger.debug(funcName + ' | request:\n%s', JSON.stringify(val, null, '\t'));

    if (!proxy.run('services.TSDB.tsdbQueryPOST', args, res)) {
        var mockup = require('../models/TsdbDataSet');
        var response = mockup.query(val);

        logger.debug(funcName + ' | response:\n%s', JSON.stringify(response, null, '\t'));
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }

}

