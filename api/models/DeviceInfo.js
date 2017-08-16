'use strict';

//Model Definition File for DeviceInfo.js

//var DEVICE_TYPE = require('./DEVICE_TYPE');

'use strict';
/**
* Cihaz detaylarının tutulduğu veri yapısı.
*/
exports.DeviceInfo =  {
    type:'class',
    name:'DeviceInfo',
    fields: {
        vendor : { name: 'vendor', type: 'String', isRequired: true }, 
        model : { name: 'model', type: 'String', isRequired: true }, 
        type : { name: 'type', type: 'DEVICE_TYPE', isRequired: true }, 
        swVersion : { name: 'swVersion', type: 'String' }
    }
}


//Mockup System for DeviceInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceInfo';
var dto_name = 'DeviceInfo';

function DeviceInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceInfoData();
    }
}

function genDeviceInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceInfoDataInit;
exports.genData = genDeviceInfoData;
exports.getData = getDeviceInfoData;
exports.findData = findDeviceInfoData;
exports.getListData = getDeviceInfoListData;
exports.deleteData = deleteDeviceInfoData;
exports.saveData = saveDeviceInfoData;
exports.saveListData = saveDeviceInfoListData;
exports.getAllData = getAllDeviceInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceInfoDataInit();
}

var overrideModule = '../overrides/DeviceInfo';
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



