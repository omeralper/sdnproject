'use strict';

//Model Definition File for DeviceProfileListRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Device profillerini listelemek için kullanılacak istek veri modelidir.
*/
exports.DeviceProfileListRequest =  {
    type:'class',
    name:'DeviceProfileListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }
    }
}


//Mockup System for DeviceProfileListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceProfileListRequest';
var dto_name = 'DeviceProfileListRequest';

function DeviceProfileListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceProfileListRequestData();
    }
}

function genDeviceProfileListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceProfileListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceProfileListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceProfileListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceProfileListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceProfileListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceProfileListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceProfileListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceProfileListRequestDataInit;
exports.genData = genDeviceProfileListRequestData;
exports.getData = getDeviceProfileListRequestData;
exports.findData = findDeviceProfileListRequestData;
exports.getListData = getDeviceProfileListRequestListData;
exports.deleteData = deleteDeviceProfileListRequestData;
exports.saveData = saveDeviceProfileListRequestData;
exports.saveListData = saveDeviceProfileListRequestListData;
exports.getAllData = getAllDeviceProfileListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceProfileListRequestDataInit();
}

var overrideModule = '../overrides/DeviceProfileListRequest';
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



