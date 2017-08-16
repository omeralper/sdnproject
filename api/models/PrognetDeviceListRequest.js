'use strict';

//Model Definition File for PrognetDeviceListRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var SwitchListDTO = require('./SwitchListDTO');

'use strict';
/**
* Anahtarlayıcı ile ilgili listeleme komutlarının cevapları için kullanılan veri yapısıdır.
*/
exports.PrognetDeviceListRequest =  {
    type:'class',
    name:'PrognetDeviceListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SwitchListDTO', isRequired: true }
    }
}


//Mockup System for PrognetDeviceListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPrognetDeviceListRequest';
var dto_name = 'PrognetDeviceListRequest';

function PrognetDeviceListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPrognetDeviceListRequestData();
    }
}

function genPrognetDeviceListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPrognetDeviceListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPrognetDeviceListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findPrognetDeviceListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePrognetDeviceListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function savePrognetDeviceListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function savePrognetDeviceListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPrognetDeviceListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = PrognetDeviceListRequestDataInit;
exports.genData = genPrognetDeviceListRequestData;
exports.getData = getPrognetDeviceListRequestData;
exports.findData = findPrognetDeviceListRequestData;
exports.getListData = getPrognetDeviceListRequestListData;
exports.deleteData = deletePrognetDeviceListRequestData;
exports.saveData = savePrognetDeviceListRequestData;
exports.saveListData = savePrognetDeviceListRequestListData;
exports.getAllData = getAllPrognetDeviceListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    PrognetDeviceListRequestDataInit();
}

var overrideModule = '../overrides/PrognetDeviceListRequest';
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



