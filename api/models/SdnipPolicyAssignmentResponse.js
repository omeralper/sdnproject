'use strict';

//Model Definition File for SdnipPolicyAssignmentResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipPolicyAssignmentDTO = require('./SdnipPolicyAssignmentDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Politika tipine göre politika tanımı bilgisini tutar.
*/
exports.SdnipPolicyAssignmentResponse =  {
    type:'class',
    name:'SdnipPolicyAssignmentResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipPolicyAssignmentDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyAssignmentResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyAssignmentResponse';
var dto_name = 'SdnipPolicyAssignmentResponse';

function SdnipPolicyAssignmentResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyAssignmentResponseData();
    }
}

function genSdnipPolicyAssignmentResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyAssignmentResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyAssignmentResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyAssignmentResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyAssignmentResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyAssignmentResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyAssignmentResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyAssignmentResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyAssignmentResponseDataInit;
exports.genData = genSdnipPolicyAssignmentResponseData;
exports.getData = getSdnipPolicyAssignmentResponseData;
exports.findData = findSdnipPolicyAssignmentResponseData;
exports.getListData = getSdnipPolicyAssignmentResponseListData;
exports.deleteData = deleteSdnipPolicyAssignmentResponseData;
exports.saveData = saveSdnipPolicyAssignmentResponseData;
exports.saveListData = saveSdnipPolicyAssignmentResponseListData;
exports.getAllData = getAllSdnipPolicyAssignmentResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyAssignmentResponseDataInit();
}

var overrideModule = '../overrides/SdnipPolicyAssignmentResponse';
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



