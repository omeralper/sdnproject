'use strict';

//Model Definition File for AccessProfileResponse.js

//var AccessProfileDTO = require('./AccessProfileDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası detaylarının dönüldüğü veri yapısı.
*/
exports.AccessProfileResponse =  {
    type:'class',
    name:'AccessProfileResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessProfileDTO' }
    }
}


//Mockup System for AccessProfileResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileResponse';
var dto_name = 'AccessProfileResponse';

function AccessProfileResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileResponseData();
    }
}

function genAccessProfileResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileResponseDataInit;
exports.genData = genAccessProfileResponseData;
exports.getData = getAccessProfileResponseData;
exports.findData = findAccessProfileResponseData;
exports.getListData = getAccessProfileResponseListData;
exports.deleteData = deleteAccessProfileResponseData;
exports.saveData = saveAccessProfileResponseData;
exports.saveListData = saveAccessProfileResponseListData;
exports.getAllData = getAllAccessProfileResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileResponseDataInit();
}

var overrideModule = '../overrides/AccessProfileResponse';
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



