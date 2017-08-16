'use strict';

//Model Definition File for NacUserDeviceResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacUserDeviceDTO = require('./NacUserDeviceDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı cihaz atama detaylarının dönüldüğü veri yapısı.
*/
exports.NacUserDeviceResponse =  {
    type:'class',
    name:'NacUserDeviceResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacUserDeviceDTO' }
    }
}


//Mockup System for NacUserDeviceResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceResponse';
var dto_name = 'NacUserDeviceResponse';

function NacUserDeviceResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceResponseData();
    }
}

function genNacUserDeviceResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceResponseDataInit;
exports.genData = genNacUserDeviceResponseData;
exports.getData = getNacUserDeviceResponseData;
exports.findData = findNacUserDeviceResponseData;
exports.getListData = getNacUserDeviceResponseListData;
exports.deleteData = deleteNacUserDeviceResponseData;
exports.saveData = saveNacUserDeviceResponseData;
exports.saveListData = saveNacUserDeviceResponseListData;
exports.getAllData = getAllNacUserDeviceResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceResponseDataInit();
}

var overrideModule = '../overrides/NacUserDeviceResponse';
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



