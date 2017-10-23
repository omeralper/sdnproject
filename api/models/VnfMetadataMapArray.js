'use strict';

//Model Definition File for VnfMetadataMapArray.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* VNF metadata bilgileri
*/
exports.VnfMetadataMapArray =  {
    type:'class',
    name:'VnfMetadataMapArray',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        mdKey : { name: 'mdKey', type: 'String' }, 
        mdValue : { name: 'mdValue', type: 'String' }
    }
}


//Mockup System for VnfMetadataMapArray.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfMetadataMapArray';
var dto_name = 'VnfMetadataMapArray';

function VnfMetadataMapArrayDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfMetadataMapArrayData();
    }
}

function genVnfMetadataMapArrayData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfMetadataMapArrayData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfMetadataMapArrayListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfMetadataMapArrayData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfMetadataMapArrayData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfMetadataMapArrayData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfMetadataMapArrayListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfMetadataMapArrayData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfMetadataMapArrayDataInit;
exports.genData = genVnfMetadataMapArrayData;
exports.getData = getVnfMetadataMapArrayData;
exports.findData = findVnfMetadataMapArrayData;
exports.getListData = getVnfMetadataMapArrayListData;
exports.deleteData = deleteVnfMetadataMapArrayData;
exports.saveData = saveVnfMetadataMapArrayData;
exports.saveListData = saveVnfMetadataMapArrayListData;
exports.getAllData = getAllVnfMetadataMapArrayData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfMetadataMapArrayDataInit();
}

var overrideModule = '../overrides/VnfMetadataMapArray';
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



