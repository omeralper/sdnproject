'use strict';

//Model Definition File for AppResponse.js

//var AppDTO = require('./AppDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Uygulama detaylarının dönüldüğü veri yapısı.
*/
exports.AppResponse =  {
    type:'class',
    name:'AppResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AppDTO' }
    }
}


//Mockup System for AppResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAppResponse';
var dto_name = 'AppResponse';

function AppResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAppResponseData();
    }
}

function genAppResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAppResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAppResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAppResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAppResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAppResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAppResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAppResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AppResponseDataInit;
exports.genData = genAppResponseData;
exports.getData = getAppResponseData;
exports.findData = findAppResponseData;
exports.getListData = getAppResponseListData;
exports.deleteData = deleteAppResponseData;
exports.saveData = saveAppResponseData;
exports.saveListData = saveAppResponseListData;
exports.getAllData = getAllAppResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AppResponseDataInit();
}

var overrideModule = '../overrides/AppResponse';
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



