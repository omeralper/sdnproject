'use strict';

//Model Definition File for DeviceQuarantineDTO.js

//var BaseDTO = require('./BaseDTO');
//var HOST_TYPE = require('./HOST_TYPE');

'use strict';
/**
* Karantinaya alınacak/alınmış cihazların başlıca bilgilerini taşıyan veri yapısı
*/
exports.DeviceQuarantineDTO =  {
    type:'class',
    name:'DeviceQuarantineDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        macAddress : { name: 'macAddress', type: 'String', isRequired: true }, 
        portNumber : { name: 'portNumber', type: 'Integer' }, 
        deviceId : { name: 'deviceId', type: 'String' }, 
        type : { name: 'type', type: 'HOST_TYPE' }
    }
}


//Mockup System for DeviceQuarantineDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceQuarantineDTO';
var dto_name = 'DeviceQuarantineDTO';

function DeviceQuarantineDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceQuarantineDTOData();
    }
}

function genDeviceQuarantineDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceQuarantineDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceQuarantineDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceQuarantineDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceQuarantineDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceQuarantineDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceQuarantineDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceQuarantineDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceQuarantineDTODataInit;
exports.genData = genDeviceQuarantineDTOData;
exports.getData = getDeviceQuarantineDTOData;
exports.findData = findDeviceQuarantineDTOData;
exports.getListData = getDeviceQuarantineDTOListData;
exports.deleteData = deleteDeviceQuarantineDTOData;
exports.saveData = saveDeviceQuarantineDTOData;
exports.saveListData = saveDeviceQuarantineDTOListData;
exports.getAllData = getAllDeviceQuarantineDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceQuarantineDTODataInit();
}

var overrideModule = '../overrides/DeviceQuarantineDTO';
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



