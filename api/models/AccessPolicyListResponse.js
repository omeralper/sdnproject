'use strict';

//Model Definition File for AccessPolicyListResponse.js

//var AccessPolicyListDTO = require('./AccessPolicyListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası listeleme işleminin cevap veri yapısı.
*/
exports.AccessPolicyListResponse =  {
    type:'class',
    name:'AccessPolicyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessPolicyListDTO', isRequired: true }
    }
}


//Mockup System for AccessPolicyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyListResponse';
var dto_name = 'AccessPolicyListResponse';

function AccessPolicyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyListResponseData();
    }
}

function genAccessPolicyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyListResponseDataInit;
exports.genData = genAccessPolicyListResponseData;
exports.getData = getAccessPolicyListResponseData;
exports.findData = findAccessPolicyListResponseData;
exports.getListData = getAccessPolicyListResponseListData;
exports.deleteData = deleteAccessPolicyListResponseData;
exports.saveData = saveAccessPolicyListResponseData;
exports.saveListData = saveAccessPolicyListResponseListData;
exports.getAllData = getAllAccessPolicyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyListResponseDataInit();
}

var overrideModule = '../overrides/AccessPolicyListResponse';
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



