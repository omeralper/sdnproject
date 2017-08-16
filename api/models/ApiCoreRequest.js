'use strict';

//Model Definition File for ApiCoreRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Api Core modülünün basic request türü
*/
exports.ApiCoreRequest =  {
    type:'class',
    name:'ApiCoreRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }
    }
}


//Mockup System for ApiCoreRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDApiCoreRequest';
var dto_name = 'ApiCoreRequest';

function ApiCoreRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genApiCoreRequestData();
    }
}

function genApiCoreRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getApiCoreRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getApiCoreRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findApiCoreRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteApiCoreRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveApiCoreRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveApiCoreRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllApiCoreRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ApiCoreRequestDataInit;
exports.genData = genApiCoreRequestData;
exports.getData = getApiCoreRequestData;
exports.findData = findApiCoreRequestData;
exports.getListData = getApiCoreRequestListData;
exports.deleteData = deleteApiCoreRequestData;
exports.saveData = saveApiCoreRequestData;
exports.saveListData = saveApiCoreRequestListData;
exports.getAllData = getAllApiCoreRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ApiCoreRequestDataInit();
}

var overrideModule = '../overrides/ApiCoreRequest';
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



