'use strict';

//Model Definition File for DeviceQuarantineRequest.js

//var DeviceQuarantineDTO = require('./DeviceQuarantineDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Cihaz karantina isteklerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.DeviceQuarantineRequest =  {
    type:'class',
    name:'DeviceQuarantineRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DeviceQuarantineDTO', isRequired: true }
    }
}


//Mockup System for DeviceQuarantineRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeviceQuarantineRequest';
var dto_name = 'DeviceQuarantineRequest';

function DeviceQuarantineRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeviceQuarantineRequestData();
    }
}

function genDeviceQuarantineRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeviceQuarantineRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeviceQuarantineRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeviceQuarantineRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeviceQuarantineRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeviceQuarantineRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeviceQuarantineRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeviceQuarantineRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DeviceQuarantineRequestDataInit;
exports.genData = genDeviceQuarantineRequestData;
exports.getData = getDeviceQuarantineRequestData;
exports.findData = findDeviceQuarantineRequestData;
exports.getListData = getDeviceQuarantineRequestListData;
exports.deleteData = deleteDeviceQuarantineRequestData;
exports.saveData = saveDeviceQuarantineRequestData;
exports.saveListData = saveDeviceQuarantineRequestListData;
exports.getAllData = getAllDeviceQuarantineRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeviceQuarantineRequestDataInit();
}

var overrideModule = '../overrides/DeviceQuarantineRequest';
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



