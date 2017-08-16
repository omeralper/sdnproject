'use strict';

//Model Definition File for ModuleNodeConfigSearchDTO.js

//var BaseDTO = require('./BaseDTO');
//var NODE_TYPE = require('./NODE_TYPE');

'use strict';
/**
* Konfigürasyon listesi sorgulama istek veri modeli.
*/
exports.ModuleNodeConfigSearchDTO =  {
    type:'class',
    name:'ModuleNodeConfigSearchDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        nodeType : { name: 'nodeType', type: 'NODE_TYPE', isRequired: true }, 
        nodeId : { name: 'nodeId', type: 'String' }, 
        nodeVersion : { name: 'nodeVersion', type: 'String' }
    }
}


//Mockup System for ModuleNodeConfigSearchDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigSearchDTO';
var dto_name = 'ModuleNodeConfigSearchDTO';

function ModuleNodeConfigSearchDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigSearchDTOData();
    }
}

function genModuleNodeConfigSearchDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigSearchDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigSearchDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigSearchDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigSearchDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigSearchDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigSearchDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigSearchDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigSearchDTODataInit;
exports.genData = genModuleNodeConfigSearchDTOData;
exports.getData = getModuleNodeConfigSearchDTOData;
exports.findData = findModuleNodeConfigSearchDTOData;
exports.getListData = getModuleNodeConfigSearchDTOListData;
exports.deleteData = deleteModuleNodeConfigSearchDTOData;
exports.saveData = saveModuleNodeConfigSearchDTOData;
exports.saveListData = saveModuleNodeConfigSearchDTOListData;
exports.getAllData = getAllModuleNodeConfigSearchDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigSearchDTODataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigSearchDTO';
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



