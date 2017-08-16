'use strict';

//Model Definition File for AccessPolicyCountResponse.js

//var AccessPolicyCountOptions = require('./AccessPolicyCountOptions');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Politika sayısı cevap veri yapısı.
*/
exports.AccessPolicyCountResponse =  {
    type:'class',
    name:'AccessPolicyCountResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AccessPolicyCountOptions', isRequired: true }
    }
}


//Mockup System for AccessPolicyCountResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyCountResponse';
var dto_name = 'AccessPolicyCountResponse';

function AccessPolicyCountResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyCountResponseData();
    }
}

function genAccessPolicyCountResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyCountResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyCountResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyCountResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyCountResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyCountResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyCountResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyCountResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyCountResponseDataInit;
exports.genData = genAccessPolicyCountResponseData;
exports.getData = getAccessPolicyCountResponseData;
exports.findData = findAccessPolicyCountResponseData;
exports.getListData = getAccessPolicyCountResponseListData;
exports.deleteData = deleteAccessPolicyCountResponseData;
exports.saveData = saveAccessPolicyCountResponseData;
exports.saveListData = saveAccessPolicyCountResponseListData;
exports.getAllData = getAllAccessPolicyCountResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyCountResponseDataInit();
}

var overrideModule = '../overrides/AccessPolicyCountResponse';
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



