'use strict';

//Model Definition File for AccessPolicyResponse.js

//var AccessPolicyDTO = require('./AccessPolicyDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası detaylarının dönüldüğü veri yapısı.
*/
exports.AccessPolicyResponse =  {
    type:'class',
    name:'AccessPolicyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessPolicyDTO' }
    }
}


//Mockup System for AccessPolicyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyResponse';
var dto_name = 'AccessPolicyResponse';

function AccessPolicyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyResponseData();
    }
}

function genAccessPolicyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyResponseDataInit;
exports.genData = genAccessPolicyResponseData;
exports.getData = getAccessPolicyResponseData;
exports.findData = findAccessPolicyResponseData;
exports.getListData = getAccessPolicyResponseListData;
exports.deleteData = deleteAccessPolicyResponseData;
exports.saveData = saveAccessPolicyResponseData;
exports.saveListData = saveAccessPolicyResponseListData;
exports.getAllData = getAllAccessPolicyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyResponseDataInit();
}

var overrideModule = '../overrides/AccessPolicyResponse';
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



