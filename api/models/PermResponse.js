'use strict';

//Model Definition File for PermResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var PermDTO = require('./PermDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yetki detaylarının dönüldüğü veri yapısı.
*/
exports.PermResponse =  {
    type:'class',
    name:'PermResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'PermDTO' }
    }
}


//Mockup System for PermResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPermResponse';
var dto_name = 'PermResponse';

function PermResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPermResponseData();
    }
}

function genPermResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPermResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPermResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPermResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePermResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePermResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePermResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPermResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PermResponseDataInit;
exports.genData = genPermResponseData;
exports.getData = getPermResponseData;
exports.findData = findPermResponseData;
exports.getListData = getPermResponseListData;
exports.deleteData = deletePermResponseData;
exports.saveData = savePermResponseData;
exports.saveListData = savePermResponseListData;
exports.getAllData = getAllPermResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PermResponseDataInit();
}

var overrideModule = '../overrides/PermResponse';
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



