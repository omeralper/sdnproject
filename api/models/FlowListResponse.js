'use strict';

//Model Definition File for FlowListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var FlowListDTO = require('./FlowListDTO');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Akış listeleme işlemleri tarafından dönülen cevap veri yapısı.
*/
exports.FlowListResponse =  {
    type:'class',
    name:'FlowListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'FlowListDTO', isRequired: true }
    }
}


//Mockup System for FlowListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowListResponse';
var dto_name = 'FlowListResponse';

function FlowListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowListResponseData();
    }
}

function genFlowListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowListResponseDataInit;
exports.genData = genFlowListResponseData;
exports.getData = getFlowListResponseData;
exports.findData = findFlowListResponseData;
exports.getListData = getFlowListResponseListData;
exports.deleteData = deleteFlowListResponseData;
exports.saveData = saveFlowListResponseData;
exports.saveListData = saveFlowListResponseListData;
exports.getAllData = getAllFlowListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowListResponseDataInit();
}

var overrideModule = '../overrides/FlowListResponse';
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



