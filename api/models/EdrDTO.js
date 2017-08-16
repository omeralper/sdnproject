'use strict';

//Model Definition File for EdrDTO.js

//var BaseDTO = require('./BaseDTO');
//var EDR_STATUS = require('./EDR_STATUS');

'use strict';
/**
* EDR detaylarının bulunduğu veri yapısı.
*/
exports.EdrDTO =  {
    type:'class',
    name:'EdrDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        time : { name: 'time', type: 'Date' }, 
        status : { name: 'status', type: 'EDR_STATUS' }, 
        username : { name: 'username', type: 'String' }, 
        module : { name: 'module', type: 'String' }, 
        sourceIP : { name: 'sourceIP', type: 'String' }, 
        destinationIP : { name: 'destinationIP', type: 'String' }, 
        sourceMAC : { name: 'sourceMAC', type: 'String' }, 
        destinationMAC : { name: 'destinationMAC', type: 'String' }, 
        sourcePort : { name: 'sourcePort', type: 'Integer' }, 
        destinationPort : { name: 'destinationPort', type: 'Integer' }, 
        protocol : { name: 'protocol', type: 'String' }, 
        xid : { name: 'xid', type: 'String' }, 
        data : { name: 'data', type: 'String' }
    }
}


//Mockup System for EdrDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEdrDTO';
var dto_name = 'EdrDTO';

function EdrDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEdrDTOData();
    }
}

function genEdrDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEdrDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEdrDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEdrDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEdrDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEdrDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEdrDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEdrDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EdrDTODataInit;
exports.genData = genEdrDTOData;
exports.getData = getEdrDTOData;
exports.findData = findEdrDTOData;
exports.getListData = getEdrDTOListData;
exports.deleteData = deleteEdrDTOData;
exports.saveData = saveEdrDTOData;
exports.saveListData = saveEdrDTOListData;
exports.getAllData = getAllEdrDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EdrDTODataInit();
}

var overrideModule = '../overrides/EdrDTO';
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



