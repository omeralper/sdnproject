'use strict';

//Model Definition File for SdnipRouteSearchResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipRouteListDTO = require('./SdnipRouteListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Rota arama sonuçlarını verir
*/
exports.SdnipRouteSearchResponse =  {
    type:'class',
    name:'SdnipRouteSearchResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipRouteListDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouteSearchResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouteSearchResponse';
var dto_name = 'SdnipRouteSearchResponse';

function SdnipRouteSearchResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouteSearchResponseData();
    }
}

function genSdnipRouteSearchResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouteSearchResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouteSearchResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouteSearchResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouteSearchResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouteSearchResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouteSearchResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouteSearchResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouteSearchResponseDataInit;
exports.genData = genSdnipRouteSearchResponseData;
exports.getData = getSdnipRouteSearchResponseData;
exports.findData = findSdnipRouteSearchResponseData;
exports.getListData = getSdnipRouteSearchResponseListData;
exports.deleteData = deleteSdnipRouteSearchResponseData;
exports.saveData = saveSdnipRouteSearchResponseData;
exports.saveListData = saveSdnipRouteSearchResponseListData;
exports.getAllData = getAllSdnipRouteSearchResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouteSearchResponseDataInit();
}

var overrideModule = '../overrides/SdnipRouteSearchResponse';
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



