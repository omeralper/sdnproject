'use strict';

//Model Definition File for AccessProfileCountResponse.js

//var AccessProfileCountOptions = require('./AccessProfileCountOptions');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Politika profil sayısı cevap veri yapısı.
*/
exports.AccessProfileCountResponse =  {
    type:'class',
    name:'AccessProfileCountResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessProfileCountOptions', isRequired: true }
    }
}


//Mockup System for AccessProfileCountResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileCountResponse';
var dto_name = 'AccessProfileCountResponse';

function AccessProfileCountResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileCountResponseData();
    }
}

function genAccessProfileCountResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileCountResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileCountResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileCountResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileCountResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileCountResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileCountResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileCountResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileCountResponseDataInit;
exports.genData = genAccessProfileCountResponseData;
exports.getData = getAccessProfileCountResponseData;
exports.findData = findAccessProfileCountResponseData;
exports.getListData = getAccessProfileCountResponseListData;
exports.deleteData = deleteAccessProfileCountResponseData;
exports.saveData = saveAccessProfileCountResponseData;
exports.saveListData = saveAccessProfileCountResponseListData;
exports.getAllData = getAllAccessProfileCountResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileCountResponseDataInit();
}

var overrideModule = '../overrides/AccessProfileCountResponse';
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



