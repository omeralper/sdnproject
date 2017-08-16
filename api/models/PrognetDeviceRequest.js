'use strict';

//Model Definition File for PrognetDeviceRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı ile ilgili kayıt - güncelleme komutlarının sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.PrognetDeviceRequest =  {
    type:'class',
    name:'PrognetDeviceRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SwitchDTO', isRequired: true }
    }
}


//Mockup System for PrognetDeviceRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPrognetDeviceRequest';
var dto_name = 'PrognetDeviceRequest';

function PrognetDeviceRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPrognetDeviceRequestData();
    }
}

function genPrognetDeviceRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPrognetDeviceRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPrognetDeviceRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findPrognetDeviceRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePrognetDeviceRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function savePrognetDeviceRequestData(data) {
    return mockup.saveData(data_key, data);
}

function savePrognetDeviceRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPrognetDeviceRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = PrognetDeviceRequestDataInit;
exports.genData = genPrognetDeviceRequestData;
exports.getData = getPrognetDeviceRequestData;
exports.findData = findPrognetDeviceRequestData;
exports.getListData = getPrognetDeviceRequestListData;
exports.deleteData = deletePrognetDeviceRequestData;
exports.saveData = savePrognetDeviceRequestData;
exports.saveListData = savePrognetDeviceRequestListData;
exports.getAllData = getAllPrognetDeviceRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    PrognetDeviceRequestDataInit();
}

var overrideModule = '../overrides/PrognetDeviceRequest';
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



