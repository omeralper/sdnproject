'use strict';

//Model Definition File for ModuleNodeConfigRequest.js

//var GenericRequest = require('./GenericRequest');
//var ModuleNodeConfigDTO = require('./ModuleNodeConfigDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Modül node konfigürasyon istek veri yapısı.
*/
exports.ModuleNodeConfigRequest =  {
    type:'class',
    name:'ModuleNodeConfigRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ModuleNodeConfigDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigRequest';
var dto_name = 'ModuleNodeConfigRequest';

function ModuleNodeConfigRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigRequestData();
    }
}

function genModuleNodeConfigRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigRequestDataInit;
exports.genData = genModuleNodeConfigRequestData;
exports.getData = getModuleNodeConfigRequestData;
exports.findData = findModuleNodeConfigRequestData;
exports.getListData = getModuleNodeConfigRequestListData;
exports.deleteData = deleteModuleNodeConfigRequestData;
exports.saveData = saveModuleNodeConfigRequestData;
exports.saveListData = saveModuleNodeConfigRequestListData;
exports.getAllData = getAllModuleNodeConfigRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigRequestDataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigRequest';
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



