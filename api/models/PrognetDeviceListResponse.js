'use strict';

//Model Definition File for PrognetDeviceListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SwitchListDTO = require('./SwitchListDTO');

'use strict';
/**
* Anahtarlayıcı ile ilgili listeleme komutlarının cevapları için kullanılan veri yapısıdır.
*/
exports.PrognetDeviceListResponse =  {
    type:'class',
    name:'PrognetDeviceListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SwitchListDTO', isRequired: true }
    }
}


//Mockup System for PrognetDeviceListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPrognetDeviceListResponse';
var dto_name = 'PrognetDeviceListResponse';

function PrognetDeviceListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPrognetDeviceListResponseData();
    }
}

function genPrognetDeviceListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPrognetDeviceListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPrognetDeviceListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPrognetDeviceListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePrognetDeviceListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePrognetDeviceListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePrognetDeviceListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPrognetDeviceListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PrognetDeviceListResponseDataInit;
exports.genData = genPrognetDeviceListResponseData;
exports.getData = getPrognetDeviceListResponseData;
exports.findData = findPrognetDeviceListResponseData;
exports.getListData = getPrognetDeviceListResponseListData;
exports.deleteData = deletePrognetDeviceListResponseData;
exports.saveData = savePrognetDeviceListResponseData;
exports.saveListData = savePrognetDeviceListResponseListData;
exports.getAllData = getAllPrognetDeviceListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PrognetDeviceListResponseDataInit();
}

var overrideModule = '../overrides/PrognetDeviceListResponse';
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



