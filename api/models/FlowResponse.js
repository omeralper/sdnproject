'use strict';

//Model Definition File for FlowResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var FlowDTO = require('./FlowDTO');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Akış silme işlemleri tarafından dönülen cevap veri yapısı.
*/
exports.FlowResponse =  {
    type:'class',
    name:'FlowResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'FlowDTO', isRequired: true }
    }
}


//Mockup System for FlowResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowResponse';
var dto_name = 'FlowResponse';

function FlowResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowResponseData();
    }
}

function genFlowResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowResponseDataInit;
exports.genData = genFlowResponseData;
exports.getData = getFlowResponseData;
exports.findData = findFlowResponseData;
exports.getListData = getFlowResponseListData;
exports.deleteData = deleteFlowResponseData;
exports.saveData = saveFlowResponseData;
exports.saveListData = saveFlowResponseListData;
exports.getAllData = getAllFlowResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowResponseDataInit();
}

var overrideModule = '../overrides/FlowResponse';
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



