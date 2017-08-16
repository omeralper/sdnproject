'use strict';

//Model Definition File for AccessProfileCountOptions.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Politika profil sayısı istek veri transfer veri modeli.
*/
exports.AccessProfileCountOptions =  {
    type:'class',
    name:'AccessProfileCountOptions',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        count : { name: 'count', type: 'Integer', isRequired: true }
    }
}


//Mockup System for AccessProfileCountOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileCountOptions';
var dto_name = 'AccessProfileCountOptions';

function AccessProfileCountOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileCountOptionsData();
    }
}

function genAccessProfileCountOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileCountOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileCountOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileCountOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileCountOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileCountOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileCountOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileCountOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileCountOptionsDataInit;
exports.genData = genAccessProfileCountOptionsData;
exports.getData = getAccessProfileCountOptionsData;
exports.findData = findAccessProfileCountOptionsData;
exports.getListData = getAccessProfileCountOptionsListData;
exports.deleteData = deleteAccessProfileCountOptionsData;
exports.saveData = saveAccessProfileCountOptionsData;
exports.saveListData = saveAccessProfileCountOptionsListData;
exports.getAllData = getAllAccessProfileCountOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileCountOptionsDataInit();
}

var overrideModule = '../overrides/AccessProfileCountOptions';
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



