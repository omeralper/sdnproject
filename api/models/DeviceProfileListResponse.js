'use strict';

//Model Definition File for DeviceProfileListResponse.js

//var DeviceProfileListDTO = require('./DeviceProfileListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Device profillerinin listelendiği işleminin cevap veri yapısı.
*/
exports.DeviceProfileListResponse =  {
    type:'class',
    name:'DeviceProfileListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DeviceProfileListDTO', isRequired: true }
    }
}


//Mockup System for DeviceProfileListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceProfileListResponse';
var dto_name = 'DeviceProfileListResponse';

function DeviceProfileListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceProfileListResponseData();
    }
}

function genDeviceProfileListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceProfileListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceProfileListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceProfileListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceProfileListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceProfileListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceProfileListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceProfileListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceProfileListResponseDataInit;
exports.genData = genDeviceProfileListResponseData;
exports.getData = getDeviceProfileListResponseData;
exports.findData = findDeviceProfileListResponseData;
exports.getListData = getDeviceProfileListResponseListData;
exports.deleteData = deleteDeviceProfileListResponseData;
exports.saveData = saveDeviceProfileListResponseData;
exports.saveListData = saveDeviceProfileListResponseListData;
exports.getAllData = getAllDeviceProfileListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceProfileListResponseDataInit();
}

var overrideModule = '../overrides/DeviceProfileListResponse';
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



