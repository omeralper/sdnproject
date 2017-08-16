'use strict';

//Model Definition File for PathListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var PathListDTO = require('./PathListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Patika listeleme işlemleri tarafından dönülen cevap veri yapısı.
*/
exports.PathListResponse =  {
    type:'class',
    name:'PathListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'PathListDTO', isRequired: true }
    }
}


//Mockup System for PathListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathListResponse';
var dto_name = 'PathListResponse';

function PathListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathListResponseData();
    }
}

function genPathListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePathListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PathListResponseDataInit;
exports.genData = genPathListResponseData;
exports.getData = getPathListResponseData;
exports.findData = findPathListResponseData;
exports.getListData = getPathListResponseListData;
exports.deleteData = deletePathListResponseData;
exports.saveData = savePathListResponseData;
exports.saveListData = savePathListResponseListData;
exports.getAllData = getAllPathListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathListResponseDataInit();
}

var overrideModule = '../overrides/PathListResponse';
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



