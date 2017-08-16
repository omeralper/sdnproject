'use strict';

//Model Definition File for SdnipDefinedSetListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipDefinedSetListDTO = require('./SdnipDefinedSetListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip liste tanımı arama sonuçlarını verir
*/
exports.SdnipDefinedSetListResponse =  {
    type:'class',
    name:'SdnipDefinedSetListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipDefinedSetListDTO', isRequired: true }
    }
}


//Mockup System for SdnipDefinedSetListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipDefinedSetListResponse';
var dto_name = 'SdnipDefinedSetListResponse';

function SdnipDefinedSetListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipDefinedSetListResponseData();
    }
}

function genSdnipDefinedSetListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipDefinedSetListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipDefinedSetListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipDefinedSetListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipDefinedSetListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipDefinedSetListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipDefinedSetListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipDefinedSetListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipDefinedSetListResponseDataInit;
exports.genData = genSdnipDefinedSetListResponseData;
exports.getData = getSdnipDefinedSetListResponseData;
exports.findData = findSdnipDefinedSetListResponseData;
exports.getListData = getSdnipDefinedSetListResponseListData;
exports.deleteData = deleteSdnipDefinedSetListResponseData;
exports.saveData = saveSdnipDefinedSetListResponseData;
exports.saveListData = saveSdnipDefinedSetListResponseListData;
exports.getAllData = getAllSdnipDefinedSetListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipDefinedSetListResponseDataInit();
}

var overrideModule = '../overrides/SdnipDefinedSetListResponse';
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



