'use strict';

//Model Definition File for AccessProfileListResponse.js

//var AccessProfileListDTO = require('./AccessProfileListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası listeleme işleminin cevap veri yapısı.
*/
exports.AccessProfileListResponse =  {
    type:'class',
    name:'AccessProfileListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessProfileListDTO', isRequired: true }
    }
}


//Mockup System for AccessProfileListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileListResponse';
var dto_name = 'AccessProfileListResponse';

function AccessProfileListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileListResponseData();
    }
}

function genAccessProfileListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileListResponseDataInit;
exports.genData = genAccessProfileListResponseData;
exports.getData = getAccessProfileListResponseData;
exports.findData = findAccessProfileListResponseData;
exports.getListData = getAccessProfileListResponseListData;
exports.deleteData = deleteAccessProfileListResponseData;
exports.saveData = saveAccessProfileListResponseData;
exports.saveListData = saveAccessProfileListResponseListData;
exports.getAllData = getAllAccessProfileListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileListResponseDataInit();
}

var overrideModule = '../overrides/AccessProfileListResponse';
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



