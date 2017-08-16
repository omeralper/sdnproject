'use strict';

//Model Definition File for SdnipRouterSearchResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipRouterListDTO = require('./SdnipRouterListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip rotalayıcı arama sonuçlarını verir
*/
exports.SdnipRouterSearchResponse =  {
    type:'class',
    name:'SdnipRouterSearchResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipRouterListDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouterSearchResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterSearchResponse';
var dto_name = 'SdnipRouterSearchResponse';

function SdnipRouterSearchResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterSearchResponseData();
    }
}

function genSdnipRouterSearchResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterSearchResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterSearchResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterSearchResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterSearchResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterSearchResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterSearchResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterSearchResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterSearchResponseDataInit;
exports.genData = genSdnipRouterSearchResponseData;
exports.getData = getSdnipRouterSearchResponseData;
exports.findData = findSdnipRouterSearchResponseData;
exports.getListData = getSdnipRouterSearchResponseListData;
exports.deleteData = deleteSdnipRouterSearchResponseData;
exports.saveData = saveSdnipRouterSearchResponseData;
exports.saveListData = saveSdnipRouterSearchResponseListData;
exports.getAllData = getAllSdnipRouterSearchResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterSearchResponseDataInit();
}

var overrideModule = '../overrides/SdnipRouterSearchResponse';
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



