'use strict';

//Model Definition File for NacUserDeviceDTO.js

//var BaseDTO = require('./BaseDTO');
//var NacDeviceDTO = require('./NacDeviceDTO');
//var NacGroupDTO = require('./NacGroupDTO');

'use strict';
/**
* Son kullanıcı cihaz atama detaylarının bulunduğu veri yapısı.
*/
exports.NacUserDeviceDTO =  {
    type:'class',
    name:'NacUserDeviceDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        nacUserId : { name: 'nacUserId', type: 'String', isRequired: true }, 
        nacDevice : { name: 'nacDevice', type: 'NacDeviceDTO', isRequired: true }, 
        byodNacGroup : { name: 'byodNacGroup', type: 'NacGroupDTO' }, 
        has8021xSupport : { name: 'has8021xSupport', type: 'Boolean' }, 
        isBYOD : { name: 'isBYOD', type: 'Boolean' }
    }
}


//Mockup System for NacUserDeviceDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceDTO';
var dto_name = 'NacUserDeviceDTO';

function NacUserDeviceDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceDTOData();
    }
}

function genNacUserDeviceDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceDTODataInit;
exports.genData = genNacUserDeviceDTOData;
exports.getData = getNacUserDeviceDTOData;
exports.findData = findNacUserDeviceDTOData;
exports.getListData = getNacUserDeviceDTOListData;
exports.deleteData = deleteNacUserDeviceDTOData;
exports.saveData = saveNacUserDeviceDTOData;
exports.saveListData = saveNacUserDeviceDTOListData;
exports.getAllData = getAllNacUserDeviceDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceDTODataInit();
}

var overrideModule = '../overrides/NacUserDeviceDTO';
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



