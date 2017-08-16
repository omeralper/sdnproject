'use strict';

//Model Definition File for ServiceActionListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ServiceActionListDTO = require('./ServiceActionListDTO');

'use strict';
/**
* Hizmet aksiyonu listeleme işleminin cevap veri yapısı.
*/
exports.ServiceActionListResponse =  {
    type:'class',
    name:'ServiceActionListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ServiceActionListDTO', isRequired: true }
    }
}


//Mockup System for ServiceActionListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServiceActionListResponse';
var dto_name = 'ServiceActionListResponse';

function ServiceActionListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServiceActionListResponseData();
    }
}

function genServiceActionListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServiceActionListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServiceActionListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findServiceActionListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServiceActionListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServiceActionListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveServiceActionListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServiceActionListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ServiceActionListResponseDataInit;
exports.genData = genServiceActionListResponseData;
exports.getData = getServiceActionListResponseData;
exports.findData = findServiceActionListResponseData;
exports.getListData = getServiceActionListResponseListData;
exports.deleteData = deleteServiceActionListResponseData;
exports.saveData = saveServiceActionListResponseData;
exports.saveListData = saveServiceActionListResponseListData;
exports.getAllData = getAllServiceActionListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServiceActionListResponseDataInit();
}

var overrideModule = '../overrides/ServiceActionListResponse';
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



