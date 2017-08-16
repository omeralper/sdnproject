'use strict';

//Model Definition File for NacSessionDTO.js

//var BaseDTO = require('./BaseDTO');
//var NacDeviceDTO = require('./NacDeviceDTO');
//var NacGroupDTO = require('./NacGroupDTO');
//var NacUserDTO = require('./NacUserDTO');

'use strict';
/**
* Nac Session alanlarının bulunduğu veri yapısı.
*/
exports.NacSessionDTO =  {
    type:'class',
    name:'NacSessionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        macAddress : { name: 'macAddress', type: 'String', isRequired: true }, 
        sourceAddress : { name: 'sourceAddress', type: 'String' }, 
        portNumber : { name: 'portNumber', type: 'Long', isRequired: true }, 
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }, 
        stateId : { name: 'stateId', type: 'Integer' }, 
        nacDeviceDTO : { name: 'nacDeviceDTO', type: 'NacDeviceDTO' }, 
        nacGroupDTO : { name: 'nacGroupDTO', type: 'NacGroupDTO' }, 
        nacUserDTO : { name: 'nacUserDTO', type: 'NacUserDTO' }
    }
}


//Mockup System for NacSessionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacSessionDTO';
var dto_name = 'NacSessionDTO';

function NacSessionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacSessionDTOData();
    }
}

function genNacSessionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacSessionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacSessionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacSessionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacSessionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacSessionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacSessionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacSessionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacSessionDTODataInit;
exports.genData = genNacSessionDTOData;
exports.getData = getNacSessionDTOData;
exports.findData = findNacSessionDTOData;
exports.getListData = getNacSessionDTOListData;
exports.deleteData = deleteNacSessionDTOData;
exports.saveData = saveNacSessionDTOData;
exports.saveListData = saveNacSessionDTOListData;
exports.getAllData = getAllNacSessionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacSessionDTODataInit();
}

var overrideModule = '../overrides/NacSessionDTO';
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



