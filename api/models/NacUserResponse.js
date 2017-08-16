'use strict';

//Model Definition File for NacUserResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacUserDTO = require('./NacUserDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı detaylarının dönüldüğü veri yapısı.
*/
exports.NacUserResponse =  {
    type:'class',
    name:'NacUserResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacUserDTO' }
    }
}


//Mockup System for NacUserResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserResponse';
var dto_name = 'NacUserResponse';

function NacUserResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserResponseData();
    }
}

function genNacUserResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserResponseDataInit;
exports.genData = genNacUserResponseData;
exports.getData = getNacUserResponseData;
exports.findData = findNacUserResponseData;
exports.getListData = getNacUserResponseListData;
exports.deleteData = deleteNacUserResponseData;
exports.saveData = saveNacUserResponseData;
exports.saveListData = saveNacUserResponseListData;
exports.getAllData = getAllNacUserResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserResponseDataInit();
}

var overrideModule = '../overrides/NacUserResponse';
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



