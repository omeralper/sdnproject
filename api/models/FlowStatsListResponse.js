'use strict';

//Model Definition File for FlowStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var FlowStatsDTO = require('./FlowStatsDTO');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kullanıcı akışlarına ait istatistikleri içeren cevap veri yapısı.
*/
exports.FlowStatsListResponse =  {
    type:'class',
    name:'FlowStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'FlowStatsDTO', isRequired: true }
    }
}


//Mockup System for FlowStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowStatsListResponse';
var dto_name = 'FlowStatsListResponse';

function FlowStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowStatsListResponseData();
    }
}

function genFlowStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowStatsListResponseDataInit;
exports.genData = genFlowStatsListResponseData;
exports.getData = getFlowStatsListResponseData;
exports.findData = findFlowStatsListResponseData;
exports.getListData = getFlowStatsListResponseListData;
exports.deleteData = deleteFlowStatsListResponseData;
exports.saveData = saveFlowStatsListResponseData;
exports.saveListData = saveFlowStatsListResponseListData;
exports.getAllData = getAllFlowStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowStatsListResponseDataInit();
}

var overrideModule = '../overrides/FlowStatsListResponse';
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



