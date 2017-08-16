'use strict';

//Model Definition File for SdnipRouteListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipRouteListDTO = require('./SdnipRouteListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Rota arama sonuçlarını verir
*/
exports.SdnipRouteListResponse =  {
    type:'class',
    name:'SdnipRouteListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipRouteListDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouteListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouteListResponse';
var dto_name = 'SdnipRouteListResponse';

function SdnipRouteListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouteListResponseData();
    }
}

function genSdnipRouteListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouteListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouteListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouteListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouteListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouteListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouteListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouteListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouteListResponseDataInit;
exports.genData = genSdnipRouteListResponseData;
exports.getData = getSdnipRouteListResponseData;
exports.findData = findSdnipRouteListResponseData;
exports.getListData = getSdnipRouteListResponseListData;
exports.deleteData = deleteSdnipRouteListResponseData;
exports.saveData = saveSdnipRouteListResponseData;
exports.saveListData = saveSdnipRouteListResponseListData;
exports.getAllData = getAllSdnipRouteListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouteListResponseDataInit();
}

var overrideModule = '../overrides/SdnipRouteListResponse';
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



