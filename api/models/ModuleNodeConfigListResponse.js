'use strict';

//Model Definition File for ModuleNodeConfigListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var ModuleNodeConfigListDTO = require('./ModuleNodeConfigListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Modül node konfigürasyon listesi cevap veri yapısı.
*/
exports.ModuleNodeConfigListResponse =  {
    type:'class',
    name:'ModuleNodeConfigListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ModuleNodeConfigListDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigListResponse';
var dto_name = 'ModuleNodeConfigListResponse';

function ModuleNodeConfigListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigListResponseData();
    }
}

function genModuleNodeConfigListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigListResponseDataInit;
exports.genData = genModuleNodeConfigListResponseData;
exports.getData = getModuleNodeConfigListResponseData;
exports.findData = findModuleNodeConfigListResponseData;
exports.getListData = getModuleNodeConfigListResponseListData;
exports.deleteData = deleteModuleNodeConfigListResponseData;
exports.saveData = saveModuleNodeConfigListResponseData;
exports.saveListData = saveModuleNodeConfigListResponseListData;
exports.getAllData = getAllModuleNodeConfigListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigListResponseDataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigListResponse';
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



