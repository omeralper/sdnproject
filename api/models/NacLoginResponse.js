'use strict';

//Model Definition File for NacLoginResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacLoginResult = require('./NacLoginResult');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı giriş işleminin cevap veri yapısı.
*/
exports.NacLoginResponse =  {
    type:'class',
    name:'NacLoginResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacLoginResult', isRequired: true }
    }
}


//Mockup System for NacLoginResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacLoginResponse';
var dto_name = 'NacLoginResponse';

function NacLoginResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacLoginResponseData();
    }
}

function genNacLoginResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacLoginResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacLoginResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacLoginResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacLoginResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacLoginResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacLoginResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacLoginResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacLoginResponseDataInit;
exports.genData = genNacLoginResponseData;
exports.getData = getNacLoginResponseData;
exports.findData = findNacLoginResponseData;
exports.getListData = getNacLoginResponseListData;
exports.deleteData = deleteNacLoginResponseData;
exports.saveData = saveNacLoginResponseData;
exports.saveListData = saveNacLoginResponseListData;
exports.getAllData = getAllNacLoginResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacLoginResponseDataInit();
}

var overrideModule = '../overrides/NacLoginResponse';
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



