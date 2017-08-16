'use strict';

//Model Definition File for ModuleNodesDTO.js

//var BaseDTO = require('./BaseDTO');
//var NODE_TYPE = require('./NODE_TYPE');
//var VersionNodesDTO = require('./VersionNodesDTO');

'use strict';
/**
* Modül elemanlarının listesini içerir.
*/
exports.ModuleNodesDTO =  {
    type:'class',
    name:'ModuleNodesDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        nodeType : { name: 'nodeType', type: 'NODE_TYPE', isRequired: true }, 
        moduleVersions : { name: 'moduleVersions', type: 'Array', subType: 'VersionNodesDTO' }
    }
}


//Mockup System for ModuleNodesDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodesDTO';
var dto_name = 'ModuleNodesDTO';

function ModuleNodesDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodesDTOData();
    }
}

function genModuleNodesDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodesDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodesDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodesDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodesDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodesDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodesDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodesDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodesDTODataInit;
exports.genData = genModuleNodesDTOData;
exports.getData = getModuleNodesDTOData;
exports.findData = findModuleNodesDTOData;
exports.getListData = getModuleNodesDTOListData;
exports.deleteData = deleteModuleNodesDTOData;
exports.saveData = saveModuleNodesDTOData;
exports.saveListData = saveModuleNodesDTOListData;
exports.getAllData = getAllModuleNodesDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodesDTODataInit();
}

var overrideModule = '../overrides/ModuleNodesDTO';
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



