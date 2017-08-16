'use strict';

//Model Definition File for SdnipPolicyListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipPolicyListDTO = require('./SdnipPolicyListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip politika arama sonuçlarını verir
*/
exports.SdnipPolicyListResponse =  {
    type:'class',
    name:'SdnipPolicyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipPolicyListDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyListResponse';
var dto_name = 'SdnipPolicyListResponse';

function SdnipPolicyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyListResponseData();
    }
}

function genSdnipPolicyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyListResponseDataInit;
exports.genData = genSdnipPolicyListResponseData;
exports.getData = getSdnipPolicyListResponseData;
exports.findData = findSdnipPolicyListResponseData;
exports.getListData = getSdnipPolicyListResponseListData;
exports.deleteData = deleteSdnipPolicyListResponseData;
exports.saveData = saveSdnipPolicyListResponseData;
exports.saveListData = saveSdnipPolicyListResponseListData;
exports.getAllData = getAllSdnipPolicyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyListResponseDataInit();
}

var overrideModule = '../overrides/SdnipPolicyListResponse';
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



