'use strict';

//Model Definition File for SfcListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SfcListDTO = require('./SfcListDTO');

'use strict';
/**
* Sfc listeleme olarak kullanılan veri yapısı.
*/
exports.SfcListResponse =  {
    type:'class',
    name:'SfcListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SfcListDTO', isRequired: true }
    }
}


//Mockup System for SfcListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcListResponse';
var dto_name = 'SfcListResponse';

function SfcListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcListResponseData();
    }
}

function genSfcListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcListResponseDataInit;
exports.genData = genSfcListResponseData;
exports.getData = getSfcListResponseData;
exports.findData = findSfcListResponseData;
exports.getListData = getSfcListResponseListData;
exports.deleteData = deleteSfcListResponseData;
exports.saveData = saveSfcListResponseData;
exports.saveListData = saveSfcListResponseListData;
exports.getAllData = getAllSfcListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcListResponseDataInit();
}

var overrideModule = '../overrides/SfcListResponse';
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



