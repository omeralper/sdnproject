'use strict';

//Model Definition File for ModuleNodesListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var ModuleNodesListDTO = require('./ModuleNodesListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Modül node listesi cevap veri yapısı.
*/
exports.ModuleNodesListResponse =  {
    type:'class',
    name:'ModuleNodesListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ModuleNodesListDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodesListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodesListResponse';
var dto_name = 'ModuleNodesListResponse';

function ModuleNodesListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodesListResponseData();
    }
}

function genModuleNodesListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodesListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodesListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodesListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodesListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodesListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodesListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodesListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodesListResponseDataInit;
exports.genData = genModuleNodesListResponseData;
exports.getData = getModuleNodesListResponseData;
exports.findData = findModuleNodesListResponseData;
exports.getListData = getModuleNodesListResponseListData;
exports.deleteData = deleteModuleNodesListResponseData;
exports.saveData = saveModuleNodesListResponseData;
exports.saveListData = saveModuleNodesListResponseListData;
exports.getAllData = getAllModuleNodesListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodesListResponseDataInit();
}

var overrideModule = '../overrides/ModuleNodesListResponse';
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



