'use strict';

//Model Definition File for SfcTypeListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SfcTypeListDTO = require('./SfcTypeListDTO');

'use strict';
/**
* Sfc için kullanılacak cevap veri modelidir.
*/
exports.SfcTypeListResponse =  {
    type:'class',
    name:'SfcTypeListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SfcTypeListDTO', isRequired: true }
    }
}


//Mockup System for SfcTypeListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcTypeListResponse';
var dto_name = 'SfcTypeListResponse';

function SfcTypeListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcTypeListResponseData();
    }
}

function genSfcTypeListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcTypeListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcTypeListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcTypeListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcTypeListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcTypeListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcTypeListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcTypeListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcTypeListResponseDataInit;
exports.genData = genSfcTypeListResponseData;
exports.getData = getSfcTypeListResponseData;
exports.findData = findSfcTypeListResponseData;
exports.getListData = getSfcTypeListResponseListData;
exports.deleteData = deleteSfcTypeListResponseData;
exports.saveData = saveSfcTypeListResponseData;
exports.saveListData = saveSfcTypeListResponseListData;
exports.getAllData = getAllSfcTypeListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcTypeListResponseDataInit();
}

var overrideModule = '../overrides/SfcTypeListResponse';
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



