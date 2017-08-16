'use strict';

//Model Definition File for PermListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var PermListDTO = require('./PermListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yetki listeleme işleminin cevap veri yapısı.
*/
exports.PermListResponse =  {
    type:'class',
    name:'PermListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'PermListDTO', isRequired: true }
    }
}


//Mockup System for PermListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPermListResponse';
var dto_name = 'PermListResponse';

function PermListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPermListResponseData();
    }
}

function genPermListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPermListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPermListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPermListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePermListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePermListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePermListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPermListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PermListResponseDataInit;
exports.genData = genPermListResponseData;
exports.getData = getPermListResponseData;
exports.findData = findPermListResponseData;
exports.getListData = getPermListResponseListData;
exports.deleteData = deletePermListResponseData;
exports.saveData = savePermListResponseData;
exports.saveListData = savePermListResponseListData;
exports.getAllData = getAllPermListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PermListResponseDataInit();
}

var overrideModule = '../overrides/PermListResponse';
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



