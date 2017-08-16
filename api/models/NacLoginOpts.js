'use strict';

//Model Definition File for NacLoginOpts.js

//var map = require('./map');

'use strict';
/**
* Son kullanıcı giriş işlemi için gerekli veri yapısı.\&quot;
*/
exports.NacLoginOpts =  {
    type:'class',
    name:'NacLoginOpts',
    fields: {
        username : { name: 'username', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String', isRequired: true }, 
        isRemember : { name: 'isRemember', type: 'Boolean' }, 
        params : { name: 'params', type: 'Map', subType: 'string' }
    }
}


//Mockup System for NacLoginOpts.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacLoginOpts';
var dto_name = 'NacLoginOpts';

function NacLoginOptsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacLoginOptsData();
    }
}

function genNacLoginOptsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacLoginOptsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacLoginOptsListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacLoginOptsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacLoginOptsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacLoginOptsData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacLoginOptsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacLoginOptsData() {
    return mockup.getAllData(data_key);
}

exports.init = NacLoginOptsDataInit;
exports.genData = genNacLoginOptsData;
exports.getData = getNacLoginOptsData;
exports.findData = findNacLoginOptsData;
exports.getListData = getNacLoginOptsListData;
exports.deleteData = deleteNacLoginOptsData;
exports.saveData = saveNacLoginOptsData;
exports.saveListData = saveNacLoginOptsListData;
exports.getAllData = getAllNacLoginOptsData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacLoginOptsDataInit();
}

var overrideModule = '../overrides/NacLoginOpts';
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



