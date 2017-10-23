'use strict';

//Model Definition File for NacDeviceDTO.js

//var BaseDTO = require('./BaseDTO');
//var HOST_TYPE = require('./HOST_TYPE');
//var NAC_DEVICE_STATUS = require('./NAC_DEVICE_STATUS');
//var NacAccessPortDTO = require('./NacAccessPortDTO');
//var NacGroupDTO = require('./NacGroupDTO');

'use strict';
/**
* Cihaz detaylarının bulunduğu veri yapısı.
*/
exports.NacDeviceDTO =  {
    type:'class',
    name:'NacDeviceDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        notes : { name: 'notes', type: 'String' }, 
        ipv4 : { name: 'ipv4', type: 'String', isRequired: true }, 
        mac : { name: 'mac', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'NAC_DEVICE_STATUS', isRequired: true }, 
        type : { name: 'type', type: 'HOST_TYPE', isRequired: true }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        isExempt : { name: 'isExempt', type: 'Boolean', isRequired: true }, 
        nacGroup : { name: 'nacGroup', type: 'NacGroupDTO' }, 
        accessPortList : { name: 'accessPortList', type: 'Array', subType: 'NacAccessPortDTO' }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }
    }
}


//Mockup System for NacDeviceDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacDeviceDTO';
var dto_name = 'NacDeviceDTO';

function NacDeviceDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacDeviceDTOData();
    }
}

function genNacDeviceDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacDeviceDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacDeviceDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacDeviceDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacDeviceDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacDeviceDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacDeviceDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacDeviceDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacDeviceDTODataInit;
exports.genData = genNacDeviceDTOData;
exports.getData = getNacDeviceDTOData;
exports.findData = findNacDeviceDTOData;
exports.getListData = getNacDeviceDTOListData;
exports.deleteData = deleteNacDeviceDTOData;
exports.saveData = saveNacDeviceDTOData;
exports.saveListData = saveNacDeviceDTOListData;
exports.getAllData = getAllNacDeviceDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacDeviceDTODataInit();
}

var overrideModule = '../overrides/NacDeviceDTO';
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



