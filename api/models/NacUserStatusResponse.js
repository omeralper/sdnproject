'use strict';

//Model Definition File for NacUserStatusResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacUserStatusDTO = require('./NacUserStatusDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı statusunu değiştirme işleminin cevap veri yapısı.
*/
exports.NacUserStatusResponse =  {
    type:'class',
    name:'NacUserStatusResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacUserStatusDTO', isRequired: true }
    }
}


//Mockup System for NacUserStatusResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserStatusResponse';
var dto_name = 'NacUserStatusResponse';

function NacUserStatusResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserStatusResponseData();
    }
}

function genNacUserStatusResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserStatusResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserStatusResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserStatusResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserStatusResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserStatusResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserStatusResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserStatusResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserStatusResponseDataInit;
exports.genData = genNacUserStatusResponseData;
exports.getData = getNacUserStatusResponseData;
exports.findData = findNacUserStatusResponseData;
exports.getListData = getNacUserStatusResponseListData;
exports.deleteData = deleteNacUserStatusResponseData;
exports.saveData = saveNacUserStatusResponseData;
exports.saveListData = saveNacUserStatusResponseListData;
exports.getAllData = getAllNacUserStatusResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserStatusResponseDataInit();
}

var overrideModule = '../overrides/NacUserStatusResponse';
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



