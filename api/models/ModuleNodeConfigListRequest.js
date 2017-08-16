'use strict';

//Model Definition File for ModuleNodeConfigListRequest.js

//var GenericRequest = require('./GenericRequest');
//var ModuleNodeConfigSearchDTO = require('./ModuleNodeConfigSearchDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Modül node konfigürasyon listesi istek veri yapısı.
*/
exports.ModuleNodeConfigListRequest =  {
    type:'class',
    name:'ModuleNodeConfigListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ModuleNodeConfigSearchDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigListRequest';
var dto_name = 'ModuleNodeConfigListRequest';

function ModuleNodeConfigListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigListRequestData();
    }
}

function genModuleNodeConfigListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigListRequestDataInit;
exports.genData = genModuleNodeConfigListRequestData;
exports.getData = getModuleNodeConfigListRequestData;
exports.findData = findModuleNodeConfigListRequestData;
exports.getListData = getModuleNodeConfigListRequestListData;
exports.deleteData = deleteModuleNodeConfigListRequestData;
exports.saveData = saveModuleNodeConfigListRequestData;
exports.saveListData = saveModuleNodeConfigListRequestListData;
exports.getAllData = getAllModuleNodeConfigListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigListRequestDataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigListRequest';
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



