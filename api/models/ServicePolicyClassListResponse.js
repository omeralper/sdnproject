'use strict';

//Model Definition File for ServicePolicyClassListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ServicePolicyClassListDTO = require('./ServicePolicyClassListDTO');

'use strict';
/**
* Trafik sınıfı listeleme işleminin cevap veri yapısı.
*/
exports.ServicePolicyClassListResponse =  {
    type:'class',
    name:'ServicePolicyClassListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ServicePolicyClassListDTO', isRequired: true }
    }
}


//Mockup System for ServicePolicyClassListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServicePolicyClassListResponse';
var dto_name = 'ServicePolicyClassListResponse';

function ServicePolicyClassListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServicePolicyClassListResponseData();
    }
}

function genServicePolicyClassListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServicePolicyClassListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServicePolicyClassListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findServicePolicyClassListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServicePolicyClassListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServicePolicyClassListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveServicePolicyClassListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServicePolicyClassListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ServicePolicyClassListResponseDataInit;
exports.genData = genServicePolicyClassListResponseData;
exports.getData = getServicePolicyClassListResponseData;
exports.findData = findServicePolicyClassListResponseData;
exports.getListData = getServicePolicyClassListResponseListData;
exports.deleteData = deleteServicePolicyClassListResponseData;
exports.saveData = saveServicePolicyClassListResponseData;
exports.saveListData = saveServicePolicyClassListResponseListData;
exports.getAllData = getAllServicePolicyClassListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServicePolicyClassListResponseDataInit();
}

var overrideModule = '../overrides/ServicePolicyClassListResponse';
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



