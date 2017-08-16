'use strict';

//Model Definition File for NacDeviceRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacDeviceDTO = require('./NacDeviceDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Cihaz verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NacDeviceRequest =  {
    type:'class',
    name:'NacDeviceRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacDeviceDTO', isRequired: true }
    }
}


//Mockup System for NacDeviceRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacDeviceRequest';
var dto_name = 'NacDeviceRequest';

function NacDeviceRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacDeviceRequestData();
    }
}

function genNacDeviceRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacDeviceRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacDeviceRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacDeviceRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacDeviceRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacDeviceRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacDeviceRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacDeviceRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacDeviceRequestDataInit;
exports.genData = genNacDeviceRequestData;
exports.getData = getNacDeviceRequestData;
exports.findData = findNacDeviceRequestData;
exports.getListData = getNacDeviceRequestListData;
exports.deleteData = deleteNacDeviceRequestData;
exports.saveData = saveNacDeviceRequestData;
exports.saveListData = saveNacDeviceRequestListData;
exports.getAllData = getAllNacDeviceRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacDeviceRequestDataInit();
}

var overrideModule = '../overrides/NacDeviceRequest';
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



