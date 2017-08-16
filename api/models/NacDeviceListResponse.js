'use strict';

//Model Definition File for NacDeviceListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacDeviceListDTO = require('./NacDeviceListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Cihaz listeleme işleminin cevap veri yapısı.
*/
exports.NacDeviceListResponse =  {
    type:'class',
    name:'NacDeviceListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacDeviceListDTO', isRequired: true }
    }
}


//Mockup System for NacDeviceListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacDeviceListResponse';
var dto_name = 'NacDeviceListResponse';

function NacDeviceListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacDeviceListResponseData();
    }
}

function genNacDeviceListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacDeviceListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacDeviceListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacDeviceListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacDeviceListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacDeviceListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacDeviceListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacDeviceListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacDeviceListResponseDataInit;
exports.genData = genNacDeviceListResponseData;
exports.getData = getNacDeviceListResponseData;
exports.findData = findNacDeviceListResponseData;
exports.getListData = getNacDeviceListResponseListData;
exports.deleteData = deleteNacDeviceListResponseData;
exports.saveData = saveNacDeviceListResponseData;
exports.saveListData = saveNacDeviceListResponseListData;
exports.getAllData = getAllNacDeviceListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacDeviceListResponseDataInit();
}

var overrideModule = '../overrides/NacDeviceListResponse';
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



