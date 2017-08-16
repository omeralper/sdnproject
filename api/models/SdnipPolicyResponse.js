'use strict';

//Model Definition File for SdnipPolicyResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipPolicyDTO = require('./SdnipPolicyDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip politika bilgisini tutar.
*/
exports.SdnipPolicyResponse =  {
    type:'class',
    name:'SdnipPolicyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipPolicyDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyResponse';
var dto_name = 'SdnipPolicyResponse';

function SdnipPolicyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyResponseData();
    }
}

function genSdnipPolicyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyResponseDataInit;
exports.genData = genSdnipPolicyResponseData;
exports.getData = getSdnipPolicyResponseData;
exports.findData = findSdnipPolicyResponseData;
exports.getListData = getSdnipPolicyResponseListData;
exports.deleteData = deleteSdnipPolicyResponseData;
exports.saveData = saveSdnipPolicyResponseData;
exports.saveListData = saveSdnipPolicyResponseListData;
exports.getAllData = getAllSdnipPolicyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyResponseDataInit();
}

var overrideModule = '../overrides/SdnipPolicyResponse';
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



