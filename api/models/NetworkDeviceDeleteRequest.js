'use strict';

//Model Definition File for NetworkDeviceDeleteRequest.js

//var DeleteOptions = require('./DeleteOptions');
//var GenericDeleteRequest = require('./GenericDeleteRequest');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* NetworkDevice delete isteğinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.NetworkDeviceDeleteRequest =  {
    type:'class',
    name:'NetworkDeviceDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'DeleteOptions', isRequired: true }, 
        data : { name: 'data', type: 'NetworkDeviceDTO', isRequired: true }
    }
}


//Mockup System for NetworkDeviceDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceDeleteRequest';
var dto_name = 'NetworkDeviceDeleteRequest';

function NetworkDeviceDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceDeleteRequestData();
    }
}

function genNetworkDeviceDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceDeleteRequestDataInit;
exports.genData = genNetworkDeviceDeleteRequestData;
exports.getData = getNetworkDeviceDeleteRequestData;
exports.findData = findNetworkDeviceDeleteRequestData;
exports.getListData = getNetworkDeviceDeleteRequestListData;
exports.deleteData = deleteNetworkDeviceDeleteRequestData;
exports.saveData = saveNetworkDeviceDeleteRequestData;
exports.saveListData = saveNetworkDeviceDeleteRequestListData;
exports.getAllData = getAllNetworkDeviceDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceDeleteRequestDataInit();
}

var overrideModule = '../overrides/NetworkDeviceDeleteRequest';
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



