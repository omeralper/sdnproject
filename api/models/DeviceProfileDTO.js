'use strict';

//Model Definition File for DeviceProfileDTO.js

//var BaseDTO = require('./BaseDTO');
//var MvtnPortInfo = require('./MvtnPortInfo');

'use strict';
/**
* Device profilini tanımlayan veri modeli.
*/
exports.DeviceProfileDTO =  {
    type:'class',
    name:'DeviceProfileDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        profileId : { name: 'profileId', type: 'String' }, 
        profileName : { name: 'profileName', type: 'String' }, 
        mvtnPortInfo : { name: 'mvtnPortInfo', type: 'MvtnPortInfo' }
    }
}


//Mockup System for DeviceProfileDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceProfileDTO';
var dto_name = 'DeviceProfileDTO';

function DeviceProfileDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceProfileDTOData();
    }
}

function genDeviceProfileDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceProfileDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceProfileDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceProfileDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceProfileDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceProfileDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceProfileDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceProfileDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceProfileDTODataInit;
exports.genData = genDeviceProfileDTOData;
exports.getData = getDeviceProfileDTOData;
exports.findData = findDeviceProfileDTOData;
exports.getListData = getDeviceProfileDTOListData;
exports.deleteData = deleteDeviceProfileDTOData;
exports.saveData = saveDeviceProfileDTOData;
exports.saveListData = saveDeviceProfileDTOListData;
exports.getAllData = getAllDeviceProfileDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceProfileDTODataInit();
}

var overrideModule = '../overrides/DeviceProfileDTO';
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



