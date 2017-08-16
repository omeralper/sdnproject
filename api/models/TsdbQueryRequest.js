'use strict';

//Model Definition File for TsdbQueryRequest.js

//var DownSampling = require('./DownSampling');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var TsdbAggregator = require('./TsdbAggregator');
//var TsdbTagValue = require('./TsdbTagValue');

'use strict';
/**
* TSDB sorgu parametreleri
*/
exports.TsdbQueryRequest =  {
    type:'class',
    name:'TsdbQueryRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        metrics : { name: 'metrics', type: 'Array', subType: 'string', isRequired: true }, 
        beginTime : { name: 'beginTime', type: 'Long', isRequired: true }, 
        endTime : { name: 'endTime', type: 'Long', isRequired: true }, 
        aggregator : { name: 'aggregator', type: 'TsdbAggregator', isRequired: true }, 
        downsampling : { name: 'downsampling', type: 'DownSampling', isRequired: true }, 
        tagValues : { name: 'tagValues', type: 'Array', subType: 'TsdbTagValue', isRequired: true }, 
        maxResult : { name: 'maxResult', type: 'Integer', isRequired: true }
    }
}


//Mockup System for TsdbQueryRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTsdbQueryRequest';
var dto_name = 'TsdbQueryRequest';

function TsdbQueryRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTsdbQueryRequestData();
    }
}

function genTsdbQueryRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTsdbQueryRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTsdbQueryRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findTsdbQueryRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTsdbQueryRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTsdbQueryRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveTsdbQueryRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTsdbQueryRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = TsdbQueryRequestDataInit;
exports.genData = genTsdbQueryRequestData;
exports.getData = getTsdbQueryRequestData;
exports.findData = findTsdbQueryRequestData;
exports.getListData = getTsdbQueryRequestListData;
exports.deleteData = deleteTsdbQueryRequestData;
exports.saveData = saveTsdbQueryRequestData;
exports.saveListData = saveTsdbQueryRequestListData;
exports.getAllData = getAllTsdbQueryRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    TsdbQueryRequestDataInit();
}

var overrideModule = '../overrides/TsdbQueryRequest';
try {
    var override = require(overrideModule);

    if (override && override.init) {
        console.info('DTO Override found :'+overrideModule);
        mockup.initDatabase(data_key,override.process_options);
        override.init(exports);
    } else {
        autoInit();
    }

} catch (e) {
    if (e.code == 'MODULE_NOT_FOUND') {
        console.warn('DTO Override NOT found :'+overrideModule);
        autoInit();
    } else {
        throw e;
    }
}



