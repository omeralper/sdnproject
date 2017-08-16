'use strict';

//Model Definition File for SdnipRouterListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipRouterListDTO = require('./SdnipRouterListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip rotalayıcı arama sonuçlarını verir
*/
exports.SdnipRouterListResponse =  {
    type:'class',
    name:'SdnipRouterListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipRouterListDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouterListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterListResponse';
var dto_name = 'SdnipRouterListResponse';

function SdnipRouterListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterListResponseData();
    }
}

function genSdnipRouterListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterListResponseDataInit;
exports.genData = genSdnipRouterListResponseData;
exports.getData = getSdnipRouterListResponseData;
exports.findData = findSdnipRouterListResponseData;
exports.getListData = getSdnipRouterListResponseListData;
exports.deleteData = deleteSdnipRouterListResponseData;
exports.saveData = saveSdnipRouterListResponseData;
exports.saveListData = saveSdnipRouterListResponseListData;
exports.getAllData = getAllSdnipRouterListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterListResponseDataInit();
}

var overrideModule = '../overrides/SdnipRouterListResponse';
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



