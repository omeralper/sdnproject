'use strict';

//Model Definition File for ServicePolicyClassRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var ServicePolicyClassDTO = require('./ServicePolicyClassDTO');

'use strict';
/**
* Trafik sınıfı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.ServicePolicyClassRequest =  {
    type:'class',
    name:'ServicePolicyClassRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ServicePolicyClassDTO', isRequired: true }
    }
}


//Mockup System for ServicePolicyClassRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServicePolicyClassRequest';
var dto_name = 'ServicePolicyClassRequest';

function ServicePolicyClassRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServicePolicyClassRequestData();
    }
}

function genServicePolicyClassRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServicePolicyClassRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServicePolicyClassRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findServicePolicyClassRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServicePolicyClassRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServicePolicyClassRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveServicePolicyClassRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServicePolicyClassRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ServicePolicyClassRequestDataInit;
exports.genData = genServicePolicyClassRequestData;
exports.getData = getServicePolicyClassRequestData;
exports.findData = findServicePolicyClassRequestData;
exports.getListData = getServicePolicyClassRequestListData;
exports.deleteData = deleteServicePolicyClassRequestData;
exports.saveData = saveServicePolicyClassRequestData;
exports.saveListData = saveServicePolicyClassRequestListData;
exports.getAllData = getAllServicePolicyClassRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServicePolicyClassRequestDataInit();
}

var overrideModule = '../overrides/ServicePolicyClassRequest';
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



