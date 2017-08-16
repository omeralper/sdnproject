'use strict';

//Model Definition File for ConfigDefinitionListResponse.js

//var ConfigDefinitionListDTO = require('./ConfigDefinitionListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Konfigürasyon tanımları listeleme işleminin cevap veri yapısı.
*/
exports.ConfigDefinitionListResponse =  {
    type:'class',
    name:'ConfigDefinitionListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ConfigDefinitionListDTO', isRequired: true }
    }
}


//Mockup System for ConfigDefinitionListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDConfigDefinitionListResponse';
var dto_name = 'ConfigDefinitionListResponse';

function ConfigDefinitionListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genConfigDefinitionListResponseData();
    }
}

function genConfigDefinitionListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getConfigDefinitionListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getConfigDefinitionListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findConfigDefinitionListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteConfigDefinitionListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveConfigDefinitionListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveConfigDefinitionListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllConfigDefinitionListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ConfigDefinitionListResponseDataInit;
exports.genData = genConfigDefinitionListResponseData;
exports.getData = getConfigDefinitionListResponseData;
exports.findData = findConfigDefinitionListResponseData;
exports.getListData = getConfigDefinitionListResponseListData;
exports.deleteData = deleteConfigDefinitionListResponseData;
exports.saveData = saveConfigDefinitionListResponseData;
exports.saveListData = saveConfigDefinitionListResponseListData;
exports.getAllData = getAllConfigDefinitionListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ConfigDefinitionListResponseDataInit();
}

var overrideModule = '../overrides/ConfigDefinitionListResponse';
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



