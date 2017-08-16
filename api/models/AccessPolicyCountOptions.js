'use strict';

//Model Definition File for AccessPolicyCountOptions.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Politika sayısı istek veri transfer veri modeli.
*/
exports.AccessPolicyCountOptions =  {
    type:'class',
    name:'AccessPolicyCountOptions',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        count : { name: 'count', type: 'Integer', isRequired: true }
    }
}


//Mockup System for AccessPolicyCountOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyCountOptions';
var dto_name = 'AccessPolicyCountOptions';

function AccessPolicyCountOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyCountOptionsData();
    }
}

function genAccessPolicyCountOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyCountOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyCountOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyCountOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyCountOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyCountOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyCountOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyCountOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyCountOptionsDataInit;
exports.genData = genAccessPolicyCountOptionsData;
exports.getData = getAccessPolicyCountOptionsData;
exports.findData = findAccessPolicyCountOptionsData;
exports.getListData = getAccessPolicyCountOptionsListData;
exports.deleteData = deleteAccessPolicyCountOptionsData;
exports.saveData = saveAccessPolicyCountOptionsData;
exports.saveListData = saveAccessPolicyCountOptionsListData;
exports.getAllData = getAllAccessPolicyCountOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyCountOptionsDataInit();
}

var overrideModule = '../overrides/AccessPolicyCountOptions';
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



