'use strict';

//Model Definition File for PrognetDeviceResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı ile ilgili isteklere verilecek cevabın veri yapısıdır.
*/
exports.PrognetDeviceResponse =  {
    type:'class',
    name:'PrognetDeviceResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SwitchDTO', isRequired: true }
    }
}


//Mockup System for PrognetDeviceResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPrognetDeviceResponse';
var dto_name = 'PrognetDeviceResponse';

function PrognetDeviceResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPrognetDeviceResponseData();
    }
}

function genPrognetDeviceResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPrognetDeviceResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPrognetDeviceResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPrognetDeviceResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePrognetDeviceResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePrognetDeviceResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePrognetDeviceResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPrognetDeviceResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PrognetDeviceResponseDataInit;
exports.genData = genPrognetDeviceResponseData;
exports.getData = getPrognetDeviceResponseData;
exports.findData = findPrognetDeviceResponseData;
exports.getListData = getPrognetDeviceResponseListData;
exports.deleteData = deletePrognetDeviceResponseData;
exports.saveData = savePrognetDeviceResponseData;
exports.saveListData = savePrognetDeviceResponseListData;
exports.getAllData = getAllPrognetDeviceResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PrognetDeviceResponseDataInit();
}

var overrideModule = '../overrides/PrognetDeviceResponse';
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



