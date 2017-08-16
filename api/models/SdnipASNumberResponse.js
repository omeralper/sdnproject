'use strict';

//Model Definition File for SdnipASNumberResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Otomon sistem numarasını sorgulamak için kullanılır
*/
exports.SdnipASNumberResponse =  {
    type:'class',
    name:'SdnipASNumberResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Integer', isRequired: true }
    }
}


//Mockup System for SdnipASNumberResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipASNumberResponse';
var dto_name = 'SdnipASNumberResponse';

function SdnipASNumberResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipASNumberResponseData();
    }
}

function genSdnipASNumberResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipASNumberResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipASNumberResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipASNumberResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipASNumberResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipASNumberResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipASNumberResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipASNumberResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipASNumberResponseDataInit;
exports.genData = genSdnipASNumberResponseData;
exports.getData = getSdnipASNumberResponseData;
exports.findData = findSdnipASNumberResponseData;
exports.getListData = getSdnipASNumberResponseListData;
exports.deleteData = deleteSdnipASNumberResponseData;
exports.saveData = saveSdnipASNumberResponseData;
exports.saveListData = saveSdnipASNumberResponseListData;
exports.getAllData = getAllSdnipASNumberResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipASNumberResponseDataInit();
}

var overrideModule = '../overrides/SdnipASNumberResponse';
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



