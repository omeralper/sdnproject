'use strict';

//Model Definition File for NacDeviceResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacDeviceDTO = require('./NacDeviceDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Cihaz detaylarının dönüldüğü veri yapısı.
*/
exports.NacDeviceResponse =  {
    type:'class',
    name:'NacDeviceResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacDeviceDTO' }
    }
}


//Mockup System for NacDeviceResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacDeviceResponse';
var dto_name = 'NacDeviceResponse';

function NacDeviceResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacDeviceResponseData();
    }
}

function genNacDeviceResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacDeviceResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacDeviceResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacDeviceResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacDeviceResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacDeviceResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacDeviceResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacDeviceResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacDeviceResponseDataInit;
exports.genData = genNacDeviceResponseData;
exports.getData = getNacDeviceResponseData;
exports.findData = findNacDeviceResponseData;
exports.getListData = getNacDeviceResponseListData;
exports.deleteData = deleteNacDeviceResponseData;
exports.saveData = saveNacDeviceResponseData;
exports.saveListData = saveNacDeviceResponseListData;
exports.getAllData = getAllNacDeviceResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacDeviceResponseDataInit();
}

var overrideModule = '../overrides/NacDeviceResponse';
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



