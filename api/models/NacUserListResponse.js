'use strict';

//Model Definition File for NacUserListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacUserListDTO = require('./NacUserListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı listeleme işleminin cevap veri yapısı.
*/
exports.NacUserListResponse =  {
    type:'class',
    name:'NacUserListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacUserListDTO', isRequired: true }
    }
}


//Mockup System for NacUserListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserListResponse';
var dto_name = 'NacUserListResponse';

function NacUserListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserListResponseData();
    }
}

function genNacUserListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserListResponseDataInit;
exports.genData = genNacUserListResponseData;
exports.getData = getNacUserListResponseData;
exports.findData = findNacUserListResponseData;
exports.getListData = getNacUserListResponseListData;
exports.deleteData = deleteNacUserListResponseData;
exports.saveData = saveNacUserListResponseData;
exports.saveListData = saveNacUserListResponseListData;
exports.getAllData = getAllNacUserListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserListResponseDataInit();
}

var overrideModule = '../overrides/NacUserListResponse';
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



