'use strict';

//Model Definition File for HostNetworkDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Hostun bağlı olduğu network&#39;ün id ve name değerleri
*/
exports.HostNetworkDTO =  {
    type:'class',
    name:'HostNetworkDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }
    }
}


//Mockup System for HostNetworkDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDHostNetworkDTO';
var dto_name = 'HostNetworkDTO';

function HostNetworkDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genHostNetworkDTOData();
    }
}

function genHostNetworkDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getHostNetworkDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getHostNetworkDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findHostNetworkDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteHostNetworkDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveHostNetworkDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveHostNetworkDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllHostNetworkDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = HostNetworkDTODataInit;
exports.genData = genHostNetworkDTOData;
exports.getData = getHostNetworkDTOData;
exports.findData = findHostNetworkDTOData;
exports.getListData = getHostNetworkDTOListData;
exports.deleteData = deleteHostNetworkDTOData;
exports.saveData = saveHostNetworkDTOData;
exports.saveListData = saveHostNetworkDTOListData;
exports.getAllData = getAllHostNetworkDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    HostNetworkDTODataInit();
}

var overrideModule = '../overrides/HostNetworkDTO';
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



