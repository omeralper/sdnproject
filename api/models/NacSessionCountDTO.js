'use strict';

//Model Definition File for NacSessionCountDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Nac Session Count alanlarının bulunduğu veri yapısı.
*/
exports.NacSessionCountDTO =  {
    type:'class',
    name:'NacSessionCountDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        totalUserCount : { name: 'totalUserCount', type: 'Long' }, 
        activeUserCount : { name: 'activeUserCount', type: 'Long' }
    }
}


//Mockup System for NacSessionCountDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacSessionCountDTO';
var dto_name = 'NacSessionCountDTO';

function NacSessionCountDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacSessionCountDTOData();
    }
}

function genNacSessionCountDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacSessionCountDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacSessionCountDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacSessionCountDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacSessionCountDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacSessionCountDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacSessionCountDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacSessionCountDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacSessionCountDTODataInit;
exports.genData = genNacSessionCountDTOData;
exports.getData = getNacSessionCountDTOData;
exports.findData = findNacSessionCountDTOData;
exports.getListData = getNacSessionCountDTOListData;
exports.deleteData = deleteNacSessionCountDTOData;
exports.saveData = saveNacSessionCountDTOData;
exports.saveListData = saveNacSessionCountDTOListData;
exports.getAllData = getAllNacSessionCountDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacSessionCountDTODataInit();
}

var overrideModule = '../overrides/NacSessionCountDTO';
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



