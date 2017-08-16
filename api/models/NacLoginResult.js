'use strict';

//Model Definition File for NacLoginResult.js

//var NacUserDTO = require('./NacUserDTO');
//var map = require('./map');

'use strict';
/**
* Son kullanıcı giriş işlemi sonunda dönülen veri yapısı.
*/
exports.NacLoginResult =  {
    type:'class',
    name:'NacLoginResult',
    fields: {
        user : { name: 'user', type: 'NacUserDTO', isRequired: true }, 
        settings : { name: 'settings', type: 'Map', subType: 'string' }
    }
}


//Mockup System for NacLoginResult.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacLoginResult';
var dto_name = 'NacLoginResult';

function NacLoginResultDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacLoginResultData();
    }
}

function genNacLoginResultData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacLoginResultData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacLoginResultListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacLoginResultData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacLoginResultData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacLoginResultData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacLoginResultListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacLoginResultData() {
    return mockup.getAllData(data_key);
}

exports.init = NacLoginResultDataInit;
exports.genData = genNacLoginResultData;
exports.getData = getNacLoginResultData;
exports.findData = findNacLoginResultData;
exports.getListData = getNacLoginResultListData;
exports.deleteData = deleteNacLoginResultData;
exports.saveData = saveNacLoginResultData;
exports.saveListData = saveNacLoginResultListData;
exports.getAllData = getAllNacLoginResultData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacLoginResultDataInit();
}

var overrideModule = '../overrides/NacLoginResult';
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



