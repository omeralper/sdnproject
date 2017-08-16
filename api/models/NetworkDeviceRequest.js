'use strict';

//Model Definition File for NetworkDeviceRequest.js

//var GenericRequest = require('./GenericRequest');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* NetworkDevice verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.NetworkDeviceRequest =  {
    type:'class',
    name:'NetworkDeviceRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NetworkDeviceDTO', isRequired: true }
    }
}


//Mockup System for NetworkDeviceRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceRequest';
var dto_name = 'NetworkDeviceRequest';

function NetworkDeviceRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceRequestData();
    }
}

function genNetworkDeviceRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceRequestDataInit;
exports.genData = genNetworkDeviceRequestData;
exports.getData = getNetworkDeviceRequestData;
exports.findData = findNetworkDeviceRequestData;
exports.getListData = getNetworkDeviceRequestListData;
exports.deleteData = deleteNetworkDeviceRequestData;
exports.saveData = saveNetworkDeviceRequestData;
exports.saveListData = saveNetworkDeviceRequestListData;
exports.getAllData = getAllNetworkDeviceRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceRequestDataInit();
}

var overrideModule = '../overrides/NetworkDeviceRequest';
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



