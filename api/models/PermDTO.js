'use strict';

//Model Definition File for PermDTO.js

//var AAA_STATUS = require('./AAA_STATUS');
//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Yetki detaylarının bulunduğu veri yapısı.
*/
exports.PermDTO =  {
    type:'class',
    name:'PermDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        tag : { name: 'tag', type: 'String' }, 
        notes : { name: 'notes', type: 'String' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        status : { name: 'status', type: 'AAA_STATUS', isRequired: true }
    }
}


//Mockup System for PermDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPermDTO';
var dto_name = 'PermDTO';

function PermDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPermDTOData();
    }
}

function genPermDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPermDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPermDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPermDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePermDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePermDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePermDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPermDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PermDTODataInit;
exports.genData = genPermDTOData;
exports.getData = getPermDTOData;
exports.findData = findPermDTOData;
exports.getListData = getPermDTOListData;
exports.deleteData = deletePermDTOData;
exports.saveData = savePermDTOData;
exports.saveListData = savePermDTOListData;
exports.getAllData = getAllPermDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PermDTODataInit();
}

var overrideModule = '../overrides/PermDTO';
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



