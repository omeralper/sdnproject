'use strict';

//Model Definition File for NacUserDeviceListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacUserDeviceListDTO = require('./NacUserDeviceListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı cihaz atama verileri listeleme işleminin cevap veri yapısı.
*/
exports.NacUserDeviceListResponse =  {
    type:'class',
    name:'NacUserDeviceListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacUserDeviceListDTO', isRequired: true }
    }
}


//Mockup System for NacUserDeviceListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceListResponse';
var dto_name = 'NacUserDeviceListResponse';

function NacUserDeviceListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceListResponseData();
    }
}

function genNacUserDeviceListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceListResponseDataInit;
exports.genData = genNacUserDeviceListResponseData;
exports.getData = getNacUserDeviceListResponseData;
exports.findData = findNacUserDeviceListResponseData;
exports.getListData = getNacUserDeviceListResponseListData;
exports.deleteData = deleteNacUserDeviceListResponseData;
exports.saveData = saveNacUserDeviceListResponseData;
exports.saveListData = saveNacUserDeviceListResponseListData;
exports.getAllData = getAllNacUserDeviceListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceListResponseDataInit();
}

var overrideModule = '../overrides/NacUserDeviceListResponse';
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



