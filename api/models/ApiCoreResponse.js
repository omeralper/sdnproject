'use strict';

//Model Definition File for ApiCoreResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Api Core modülünün basic response türü
*/
exports.ApiCoreResponse =  {
    type:'class',
    name:'ApiCoreResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }
    }
}


//Mockup System for ApiCoreResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDApiCoreResponse';
var dto_name = 'ApiCoreResponse';

function ApiCoreResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genApiCoreResponseData();
    }
}

function genApiCoreResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getApiCoreResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getApiCoreResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findApiCoreResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteApiCoreResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveApiCoreResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveApiCoreResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllApiCoreResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ApiCoreResponseDataInit;
exports.genData = genApiCoreResponseData;
exports.getData = getApiCoreResponseData;
exports.findData = findApiCoreResponseData;
exports.getListData = getApiCoreResponseListData;
exports.deleteData = deleteApiCoreResponseData;
exports.saveData = saveApiCoreResponseData;
exports.saveListData = saveApiCoreResponseListData;
exports.getAllData = getAllApiCoreResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ApiCoreResponseDataInit();
}

var overrideModule = '../overrides/ApiCoreResponse';
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



