'use strict';

//Model Definition File for NacGroupListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacGroupListDTO = require('./NacGroupListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Nac Grup listeleme işleminin cevap veri yapısı.
*/
exports.NacGroupListResponse =  {
    type:'class',
    name:'NacGroupListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacGroupListDTO', isRequired: true }
    }
}


//Mockup System for NacGroupListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacGroupListResponse';
var dto_name = 'NacGroupListResponse';

function NacGroupListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacGroupListResponseData();
    }
}

function genNacGroupListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacGroupListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacGroupListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacGroupListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacGroupListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacGroupListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacGroupListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacGroupListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacGroupListResponseDataInit;
exports.genData = genNacGroupListResponseData;
exports.getData = getNacGroupListResponseData;
exports.findData = findNacGroupListResponseData;
exports.getListData = getNacGroupListResponseListData;
exports.deleteData = deleteNacGroupListResponseData;
exports.saveData = saveNacGroupListResponseData;
exports.saveListData = saveNacGroupListResponseListData;
exports.getAllData = getAllNacGroupListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacGroupListResponseDataInit();
}

var overrideModule = '../overrides/NacGroupListResponse';
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



