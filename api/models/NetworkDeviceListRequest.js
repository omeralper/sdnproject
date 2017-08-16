'use strict';

//Model Definition File for NetworkDeviceListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* NetworkDevice&#39;lerin listelenmesi için kullanılacak istek veri modelidir.
*/
exports.NetworkDeviceListRequest =  {
    type:'class',
    name:'NetworkDeviceListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for NetworkDeviceListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceListRequest';
var dto_name = 'NetworkDeviceListRequest';

function NetworkDeviceListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceListRequestData();
    }
}

function genNetworkDeviceListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceListRequestDataInit;
exports.genData = genNetworkDeviceListRequestData;
exports.getData = getNetworkDeviceListRequestData;
exports.findData = findNetworkDeviceListRequestData;
exports.getListData = getNetworkDeviceListRequestListData;
exports.deleteData = deleteNetworkDeviceListRequestData;
exports.saveData = saveNetworkDeviceListRequestData;
exports.saveListData = saveNetworkDeviceListRequestListData;
exports.getAllData = getAllNetworkDeviceListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceListRequestDataInit();
}

var overrideModule = '../overrides/NetworkDeviceListRequest';
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



