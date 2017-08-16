'use strict';

//Model Definition File for NetworkDeviceResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* NetworkDevice isteğine ait cevap veri yapısıdır.
*/
exports.NetworkDeviceResponse =  {
    type:'class',
    name:'NetworkDeviceResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetworkDeviceDTO', isRequired: true }
    }
}


//Mockup System for NetworkDeviceResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceResponse';
var dto_name = 'NetworkDeviceResponse';

function NetworkDeviceResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceResponseData();
    }
}

function genNetworkDeviceResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceResponseDataInit;
exports.genData = genNetworkDeviceResponseData;
exports.getData = getNetworkDeviceResponseData;
exports.findData = findNetworkDeviceResponseData;
exports.getListData = getNetworkDeviceResponseListData;
exports.deleteData = deleteNetworkDeviceResponseData;
exports.saveData = saveNetworkDeviceResponseData;
exports.saveListData = saveNetworkDeviceResponseListData;
exports.getAllData = getAllNetworkDeviceResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceResponseDataInit();
}

var overrideModule = '../overrides/NetworkDeviceResponse';
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



