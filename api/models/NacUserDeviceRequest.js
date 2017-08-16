'use strict';

//Model Definition File for NacUserDeviceRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacUserDeviceDTO = require('./NacUserDeviceDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı cihaz atama verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NacUserDeviceRequest =  {
    type:'class',
    name:'NacUserDeviceRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacUserDeviceDTO', isRequired: true }
    }
}


//Mockup System for NacUserDeviceRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceRequest';
var dto_name = 'NacUserDeviceRequest';

function NacUserDeviceRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceRequestData();
    }
}

function genNacUserDeviceRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceRequestDataInit;
exports.genData = genNacUserDeviceRequestData;
exports.getData = getNacUserDeviceRequestData;
exports.findData = findNacUserDeviceRequestData;
exports.getListData = getNacUserDeviceRequestListData;
exports.deleteData = deleteNacUserDeviceRequestData;
exports.saveData = saveNacUserDeviceRequestData;
exports.saveListData = saveNacUserDeviceRequestListData;
exports.getAllData = getAllNacUserDeviceRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceRequestDataInit();
}

var overrideModule = '../overrides/NacUserDeviceRequest';
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



