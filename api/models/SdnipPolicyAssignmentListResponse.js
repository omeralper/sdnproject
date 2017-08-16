'use strict';

//Model Definition File for SdnipPolicyAssignmentListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipPolicyAssignmentListDTO = require('./SdnipPolicyAssignmentListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Politika tipine göre politika tanımı arama sonuçlarını verir
*/
exports.SdnipPolicyAssignmentListResponse =  {
    type:'class',
    name:'SdnipPolicyAssignmentListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipPolicyAssignmentListDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyAssignmentListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyAssignmentListResponse';
var dto_name = 'SdnipPolicyAssignmentListResponse';

function SdnipPolicyAssignmentListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyAssignmentListResponseData();
    }
}

function genSdnipPolicyAssignmentListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyAssignmentListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyAssignmentListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyAssignmentListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyAssignmentListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyAssignmentListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyAssignmentListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyAssignmentListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyAssignmentListResponseDataInit;
exports.genData = genSdnipPolicyAssignmentListResponseData;
exports.getData = getSdnipPolicyAssignmentListResponseData;
exports.findData = findSdnipPolicyAssignmentListResponseData;
exports.getListData = getSdnipPolicyAssignmentListResponseListData;
exports.deleteData = deleteSdnipPolicyAssignmentListResponseData;
exports.saveData = saveSdnipPolicyAssignmentListResponseData;
exports.saveListData = saveSdnipPolicyAssignmentListResponseListData;
exports.getAllData = getAllSdnipPolicyAssignmentListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyAssignmentListResponseDataInit();
}

var overrideModule = '../overrides/SdnipPolicyAssignmentListResponse';
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



