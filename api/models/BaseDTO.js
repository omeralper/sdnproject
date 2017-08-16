'use strict';

//Model Definition File for BaseDTO.js


'use strict';
/**
* Temel veri transfer model tanımıdır. Tüm veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
exports.BaseDTO =  {
    type:'class',
    name:'BaseDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }
    }
}


//Mockup System for BaseDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDBaseDTO';
var dto_name = 'BaseDTO';

function BaseDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genBaseDTOData();
    }
}

function genBaseDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getBaseDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getBaseDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findBaseDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteBaseDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveBaseDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveBaseDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllBaseDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = BaseDTODataInit;
exports.genData = genBaseDTOData;
exports.getData = getBaseDTOData;
exports.findData = findBaseDTOData;
exports.getListData = getBaseDTOListData;
exports.deleteData = deleteBaseDTOData;
exports.saveData = saveBaseDTOData;
exports.saveListData = saveBaseDTOListData;
exports.getAllData = getAllBaseDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    BaseDTODataInit();
}

var overrideModule = '../overrides/BaseDTO';
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



