'use strict';

//Model Definition File for ModuleNodeConfigDTO.js

//var BaseDTO = require('./BaseDTO');
//var ConfigDefinitionDTO = require('./ConfigDefinitionDTO');

'use strict';
/**
* Konfigürasyon tanımı veri modeli.
*/
exports.ModuleNodeConfigDTO =  {
    type:'class',
    name:'ModuleNodeConfigDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        configId : { name: 'configId', type: 'Integer', isRequired: true }, 
        configDefinition : { name: 'configDefinition', type: 'ConfigDefinitionDTO', isRequired: true }, 
        nodeId : { name: 'nodeId', type: 'String' }, 
        nodeVersion : { name: 'nodeVersion', type: 'String' }, 
        configValue : { name: 'configValue', type: 'String', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigDTO';
var dto_name = 'ModuleNodeConfigDTO';

function ModuleNodeConfigDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigDTOData();
    }
}

function genModuleNodeConfigDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigDTODataInit;
exports.genData = genModuleNodeConfigDTOData;
exports.getData = getModuleNodeConfigDTOData;
exports.findData = findModuleNodeConfigDTOData;
exports.getListData = getModuleNodeConfigDTOListData;
exports.deleteData = deleteModuleNodeConfigDTOData;
exports.saveData = saveModuleNodeConfigDTOData;
exports.saveListData = saveModuleNodeConfigDTOListData;
exports.getAllData = getAllModuleNodeConfigDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigDTODataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigDTO';
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



