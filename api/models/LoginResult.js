'use strict';

//Model Definition File for LoginResult.js

//var UserDTO = require('./UserDTO');
//var map = require('./map');

'use strict';
/**
* Giriş işlemi sonunda dönülen veri yapısı.
*/
exports.LoginResult =  {
    type:'class',
    name:'LoginResult',
    fields: {
        user : { name: 'user', type: 'UserDTO', isRequired: true }, 
        settings : { name: 'settings', type: 'Map', subType: 'string' }
    }
}


//Mockup System for LoginResult.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLoginResult';
var dto_name = 'LoginResult';

function LoginResultDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLoginResultData();
    }
}

function genLoginResultData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLoginResultData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLoginResultListData(options) {
    return mockup.getListData(data_key, options);
}

function findLoginResultData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLoginResultData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLoginResultData(data) {
    return mockup.saveData(data_key, data);
}

function saveLoginResultListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLoginResultData() {
    return mockup.getAllData(data_key);
}

exports.init = LoginResultDataInit;
exports.genData = genLoginResultData;
exports.getData = getLoginResultData;
exports.findData = findLoginResultData;
exports.getListData = getLoginResultListData;
exports.deleteData = deleteLoginResultData;
exports.saveData = saveLoginResultData;
exports.saveListData = saveLoginResultListData;
exports.getAllData = getAllLoginResultData;

function autoInit(){
    mockup.initDatabase(data_key);
    LoginResultDataInit();
}

var overrideModule = '../overrides/LoginResult';
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



