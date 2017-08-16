'use strict';

//Model Definition File for AppListResponse.js

//var AppListDTO = require('./AppListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Uygulama listeleme işleminin cevap veri yapısı.
*/
exports.AppListResponse =  {
    type:'class',
    name:'AppListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AppListDTO', isRequired: true }
    }
}


//Mockup System for AppListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAppListResponse';
var dto_name = 'AppListResponse';

function AppListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAppListResponseData();
    }
}

function genAppListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAppListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAppListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAppListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAppListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAppListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAppListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAppListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AppListResponseDataInit;
exports.genData = genAppListResponseData;
exports.getData = getAppListResponseData;
exports.findData = findAppListResponseData;
exports.getListData = getAppListResponseListData;
exports.deleteData = deleteAppListResponseData;
exports.saveData = saveAppListResponseData;
exports.saveListData = saveAppListResponseListData;
exports.getAllData = getAllAppListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AppListResponseDataInit();
}

var overrideModule = '../overrides/AppListResponse';
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



