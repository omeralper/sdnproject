'use strict';

//Model Definition File for SdnipResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ekleme veya güncelleme işlemi yapılmış birimin numarasını tutar
*/
exports.SdnipResponse =  {
    type:'class',
    name:'SdnipResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }
    }
}


//Mockup System for SdnipResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipResponse';
var dto_name = 'SdnipResponse';

function SdnipResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipResponseData();
    }
}

function genSdnipResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipResponseDataInit;
exports.genData = genSdnipResponseData;
exports.getData = getSdnipResponseData;
exports.findData = findSdnipResponseData;
exports.getListData = getSdnipResponseListData;
exports.deleteData = deleteSdnipResponseData;
exports.saveData = saveSdnipResponseData;
exports.saveListData = saveSdnipResponseListData;
exports.getAllData = getAllSdnipResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipResponseDataInit();
}

var overrideModule = '../overrides/SdnipResponse';
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



