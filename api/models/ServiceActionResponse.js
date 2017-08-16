'use strict';

//Model Definition File for ServiceActionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ServiceActionDTO = require('./ServiceActionDTO');

'use strict';
/**
* Hizmet aksiyonu detaylarının dönüldüğü veri yapısı.
*/
exports.ServiceActionResponse =  {
    type:'class',
    name:'ServiceActionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ServiceActionDTO' }
    }
}


//Mockup System for ServiceActionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServiceActionResponse';
var dto_name = 'ServiceActionResponse';

function ServiceActionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServiceActionResponseData();
    }
}

function genServiceActionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServiceActionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServiceActionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findServiceActionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServiceActionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServiceActionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveServiceActionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServiceActionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ServiceActionResponseDataInit;
exports.genData = genServiceActionResponseData;
exports.getData = getServiceActionResponseData;
exports.findData = findServiceActionResponseData;
exports.getListData = getServiceActionResponseListData;
exports.deleteData = deleteServiceActionResponseData;
exports.saveData = saveServiceActionResponseData;
exports.saveListData = saveServiceActionResponseListData;
exports.getAllData = getAllServiceActionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServiceActionResponseDataInit();
}

var overrideModule = '../overrides/ServiceActionResponse';
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



