'use strict';

//Model Definition File for DeviceProfileInfo.js


'use strict';
/**
* Cihaz profil bilgilerinin bulunduğu veri yapısı
*/
exports.DeviceProfileInfo =  {
    type:'class',
    name:'DeviceProfileInfo',
    fields: {
        profileId : { name: 'profileId', type: 'String' }, 
        profileName : { name: 'profileName', type: 'String' }
    }
}


//Mockup System for DeviceProfileInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceProfileInfo';
var dto_name = 'DeviceProfileInfo';

function DeviceProfileInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceProfileInfoData();
    }
}

function genDeviceProfileInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceProfileInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceProfileInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceProfileInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceProfileInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceProfileInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceProfileInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceProfileInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceProfileInfoDataInit;
exports.genData = genDeviceProfileInfoData;
exports.getData = getDeviceProfileInfoData;
exports.findData = findDeviceProfileInfoData;
exports.getListData = getDeviceProfileInfoListData;
exports.deleteData = deleteDeviceProfileInfoData;
exports.saveData = saveDeviceProfileInfoData;
exports.saveListData = saveDeviceProfileInfoListData;
exports.getAllData = getAllDeviceProfileInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceProfileInfoDataInit();
}

var overrideModule = '../overrides/DeviceProfileInfo';
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



