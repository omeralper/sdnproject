'use strict';

//Model Definition File for NetworkDeviceListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetworkDeviceListDTO = require('./NetworkDeviceListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* NetworkDevice detaylarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.NetworkDeviceListResponse =  {
    type:'class',
    name:'NetworkDeviceListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetworkDeviceListDTO', isRequired: true }
    }
}


//Mockup System for NetworkDeviceListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceListResponse';
var dto_name = 'NetworkDeviceListResponse';

function NetworkDeviceListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceListResponseData();
    }
}

function genNetworkDeviceListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceListResponseDataInit;
exports.genData = genNetworkDeviceListResponseData;
exports.getData = getNetworkDeviceListResponseData;
exports.findData = findNetworkDeviceListResponseData;
exports.getListData = getNetworkDeviceListResponseListData;
exports.deleteData = deleteNetworkDeviceListResponseData;
exports.saveData = saveNetworkDeviceListResponseData;
exports.saveListData = saveNetworkDeviceListResponseListData;
exports.getAllData = getAllNetworkDeviceListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceListResponseDataInit();
}

var overrideModule = '../overrides/NetworkDeviceListResponse';
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



