'use strict';

//Model Definition File for EdrListResponse.js

//var EdrListDTO = require('./EdrListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* EDR listeleme işleminin cevap veri yapısı.
*/
exports.EdrListResponse =  {
    type:'class',
    name:'EdrListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'EdrListDTO', isRequired: true }
    }
}


//Mockup System for EdrListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEdrListResponse';
var dto_name = 'EdrListResponse';

function EdrListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEdrListResponseData();
    }
}

function genEdrListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEdrListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEdrListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findEdrListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEdrListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEdrListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveEdrListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEdrListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = EdrListResponseDataInit;
exports.genData = genEdrListResponseData;
exports.getData = getEdrListResponseData;
exports.findData = findEdrListResponseData;
exports.getListData = getEdrListResponseListData;
exports.deleteData = deleteEdrListResponseData;
exports.saveData = saveEdrListResponseData;
exports.saveListData = saveEdrListResponseListData;
exports.getAllData = getAllEdrListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    EdrListResponseDataInit();
}

var overrideModule = '../overrides/EdrListResponse';
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



