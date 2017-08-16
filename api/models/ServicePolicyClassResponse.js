'use strict';

//Model Definition File for ServicePolicyClassResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ServicePolicyClassDTO = require('./ServicePolicyClassDTO');

'use strict';
/**
* Trafik sınıfı detaylarının dönüldüğü veri yapısı.
*/
exports.ServicePolicyClassResponse =  {
    type:'class',
    name:'ServicePolicyClassResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ServicePolicyClassDTO' }
    }
}


//Mockup System for ServicePolicyClassResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServicePolicyClassResponse';
var dto_name = 'ServicePolicyClassResponse';

function ServicePolicyClassResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServicePolicyClassResponseData();
    }
}

function genServicePolicyClassResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServicePolicyClassResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServicePolicyClassResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findServicePolicyClassResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServicePolicyClassResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServicePolicyClassResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveServicePolicyClassResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServicePolicyClassResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ServicePolicyClassResponseDataInit;
exports.genData = genServicePolicyClassResponseData;
exports.getData = getServicePolicyClassResponseData;
exports.findData = findServicePolicyClassResponseData;
exports.getListData = getServicePolicyClassResponseListData;
exports.deleteData = deleteServicePolicyClassResponseData;
exports.saveData = saveServicePolicyClassResponseData;
exports.saveListData = saveServicePolicyClassResponseListData;
exports.getAllData = getAllServicePolicyClassResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServicePolicyClassResponseDataInit();
}

var overrideModule = '../overrides/ServicePolicyClassResponse';
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



