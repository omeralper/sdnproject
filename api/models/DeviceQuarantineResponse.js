'use strict';

//Model Definition File for DeviceQuarantineResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Cihaz karantinaya alma işleminin cevap veri yapısı.
*/
exports.DeviceQuarantineResponse =  {
    type:'class',
    name:'DeviceQuarantineResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }
    }
}


//Mockup System for DeviceQuarantineResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceQuarantineResponse';
var dto_name = 'DeviceQuarantineResponse';

function DeviceQuarantineResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceQuarantineResponseData();
    }
}

function genDeviceQuarantineResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceQuarantineResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceQuarantineResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceQuarantineResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceQuarantineResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceQuarantineResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceQuarantineResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceQuarantineResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceQuarantineResponseDataInit;
exports.genData = genDeviceQuarantineResponseData;
exports.getData = getDeviceQuarantineResponseData;
exports.findData = findDeviceQuarantineResponseData;
exports.getListData = getDeviceQuarantineResponseListData;
exports.deleteData = deleteDeviceQuarantineResponseData;
exports.saveData = saveDeviceQuarantineResponseData;
exports.saveListData = saveDeviceQuarantineResponseListData;
exports.getAllData = getAllDeviceQuarantineResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceQuarantineResponseDataInit();
}

var overrideModule = '../overrides/DeviceQuarantineResponse';
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



