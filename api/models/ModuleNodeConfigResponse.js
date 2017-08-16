'use strict';

//Model Definition File for ModuleNodeConfigResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var ModuleNodeConfigDTO = require('./ModuleNodeConfigDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Modül node konfigürasyon cevap veri yapısı.
*/
exports.ModuleNodeConfigResponse =  {
    type:'class',
    name:'ModuleNodeConfigResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ModuleNodeConfigDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigResponse';
var dto_name = 'ModuleNodeConfigResponse';

function ModuleNodeConfigResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigResponseData();
    }
}

function genModuleNodeConfigResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigResponseDataInit;
exports.genData = genModuleNodeConfigResponseData;
exports.getData = getModuleNodeConfigResponseData;
exports.findData = findModuleNodeConfigResponseData;
exports.getListData = getModuleNodeConfigResponseListData;
exports.deleteData = deleteModuleNodeConfigResponseData;
exports.saveData = saveModuleNodeConfigResponseData;
exports.saveListData = saveModuleNodeConfigResponseListData;
exports.getAllData = getAllModuleNodeConfigResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigResponseDataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigResponse';
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



