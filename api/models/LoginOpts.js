'use strict';

//Model Definition File for LoginOpts.js

//var map = require('./map');

'use strict';
/**
* Giriş işlemi için gerekli veri yapısı.\&quot;
*/
exports.LoginOpts =  {
    type:'class',
    name:'LoginOpts',
    fields: {
        username : { name: 'username', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String', isRequired: true }, 
        isRemember : { name: 'isRemember', type: 'Boolean' }, 
        params : { name: 'params', type: 'Map', subType: 'string' }
    }
}


//Mockup System for LoginOpts.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLoginOpts';
var dto_name = 'LoginOpts';

function LoginOptsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLoginOptsData();
    }
}

function genLoginOptsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLoginOptsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLoginOptsListData(options) {
    return mockup.getListData(data_key, options);
}

function findLoginOptsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLoginOptsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLoginOptsData(data) {
    return mockup.saveData(data_key, data);
}

function saveLoginOptsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLoginOptsData() {
    return mockup.getAllData(data_key);
}

exports.init = LoginOptsDataInit;
exports.genData = genLoginOptsData;
exports.getData = getLoginOptsData;
exports.findData = findLoginOptsData;
exports.getListData = getLoginOptsListData;
exports.deleteData = deleteLoginOptsData;
exports.saveData = saveLoginOptsData;
exports.saveListData = saveLoginOptsListData;
exports.getAllData = getAllLoginOptsData;

function autoInit(){
    mockup.initDatabase(data_key);
    LoginOptsDataInit();
}

var overrideModule = '../overrides/LoginOpts';
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



