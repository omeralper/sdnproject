'use strict';

//Model Definition File for LoginRequest.js

//var GenericRequest = require('./GenericRequest');
//var LoginOpts = require('./LoginOpts');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Giriş işlemi için kullanılan veri yapısı.
*/
exports.LoginRequest =  {
    type:'class',
    name:'LoginRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'LoginOpts', isRequired: true }
    }
}


//Mockup System for LoginRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLoginRequest';
var dto_name = 'LoginRequest';

function LoginRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLoginRequestData();
    }
}

function genLoginRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLoginRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLoginRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findLoginRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLoginRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLoginRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveLoginRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLoginRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = LoginRequestDataInit;
exports.genData = genLoginRequestData;
exports.getData = getLoginRequestData;
exports.findData = findLoginRequestData;
exports.getListData = getLoginRequestListData;
exports.deleteData = deleteLoginRequestData;
exports.saveData = saveLoginRequestData;
exports.saveListData = saveLoginRequestListData;
exports.getAllData = getAllLoginRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    LoginRequestDataInit();
}

var overrideModule = '../overrides/LoginRequest';
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



