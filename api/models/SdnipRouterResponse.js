'use strict';

//Model Definition File for SdnipRouterResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipRouterDTO = require('./SdnipRouterDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yönlendirici bilgisini tutar.
*/
exports.SdnipRouterResponse =  {
    type:'class',
    name:'SdnipRouterResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipRouterDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouterResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterResponse';
var dto_name = 'SdnipRouterResponse';

function SdnipRouterResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterResponseData();
    }
}

function genSdnipRouterResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterResponseDataInit;
exports.genData = genSdnipRouterResponseData;
exports.getData = getSdnipRouterResponseData;
exports.findData = findSdnipRouterResponseData;
exports.getListData = getSdnipRouterResponseListData;
exports.deleteData = deleteSdnipRouterResponseData;
exports.saveData = saveSdnipRouterResponseData;
exports.saveListData = saveSdnipRouterResponseListData;
exports.getAllData = getAllSdnipRouterResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterResponseDataInit();
}

var overrideModule = '../overrides/SdnipRouterResponse';
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



