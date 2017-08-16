'use strict';

//Model Definition File for LoginResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var LoginResult = require('./LoginResult');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Giriş işleminin cevap veri yapısı.
*/
exports.LoginResponse =  {
    type:'class',
    name:'LoginResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'LoginResult', isRequired: true }
    }
}


//Mockup System for LoginResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLoginResponse';
var dto_name = 'LoginResponse';

function LoginResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLoginResponseData();
    }
}

function genLoginResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLoginResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLoginResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findLoginResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLoginResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLoginResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveLoginResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLoginResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = LoginResponseDataInit;
exports.genData = genLoginResponseData;
exports.getData = getLoginResponseData;
exports.findData = findLoginResponseData;
exports.getListData = getLoginResponseListData;
exports.deleteData = deleteLoginResponseData;
exports.saveData = saveLoginResponseData;
exports.saveListData = saveLoginResponseListData;
exports.getAllData = getAllLoginResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    LoginResponseDataInit();
}

var overrideModule = '../overrides/LoginResponse';
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



