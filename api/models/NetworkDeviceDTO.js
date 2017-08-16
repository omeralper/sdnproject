'use strict';

//Model Definition File for NetworkDeviceDTO.js

//var BaseDTO = require('./BaseDTO');
//var NETWORK_DEVICE_STATUS = require('./NETWORK_DEVICE_STATUS');
//var NETWORK_DEVICE_TYPE = require('./NETWORK_DEVICE_TYPE');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var PortDetail = require('./PortDetail');

'use strict';
/**
* Ağ cihazı veri transfer veri modeli.
*/
exports.NetworkDeviceDTO =  {
    type:'class',
    name:'NetworkDeviceDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        port : { name: 'port', type: 'PortDetail', isRequired: true }, 
        type : { name: 'type', type: 'NETWORK_DEVICE_TYPE', isRequired: true }, 
        redundancyDevices : { name: 'redundancyDevices', type: 'Array', subType: 'NetworkDeviceDTO' }, 
        vlanid : { name: 'vlanid', type: 'Integer' }, 
        mac : { name: 'mac', type: 'String', isRequired: true }, 
        ip : { name: 'ip', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'NETWORK_DEVICE_STATUS', isRequired: true }
    }
}


//Mockup System for NetworkDeviceDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceDTO';
var dto_name = 'NetworkDeviceDTO';

function NetworkDeviceDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceDTOData();
    }
}

function genNetworkDeviceDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceDTODataInit;
exports.genData = genNetworkDeviceDTOData;
exports.getData = getNetworkDeviceDTOData;
exports.findData = findNetworkDeviceDTOData;
exports.getListData = getNetworkDeviceDTOListData;
exports.deleteData = deleteNetworkDeviceDTOData;
exports.saveData = saveNetworkDeviceDTOData;
exports.saveListData = saveNetworkDeviceDTOListData;
exports.getAllData = getAllNetworkDeviceDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceDTODataInit();
}

var overrideModule = '../overrides/NetworkDeviceDTO';
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



