'use strict';

//Model Definition File for ModuleNodeConfigListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ModuleNodeConfigDTO = require('./ModuleNodeConfigDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Modül node konfigürasyonlarının listesi.
*/
exports.ModuleNodeConfigListDTO =  {
    type:'class',
    name:'ModuleNodeConfigListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ModuleNodeConfigDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodeConfigListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodeConfigListDTO';
var dto_name = 'ModuleNodeConfigListDTO';

function ModuleNodeConfigListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodeConfigListDTOData();
    }
}

function genModuleNodeConfigListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodeConfigListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodeConfigListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodeConfigListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodeConfigListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodeConfigListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodeConfigListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodeConfigListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodeConfigListDTODataInit;
exports.genData = genModuleNodeConfigListDTOData;
exports.getData = getModuleNodeConfigListDTOData;
exports.findData = findModuleNodeConfigListDTOData;
exports.getListData = getModuleNodeConfigListDTOListData;
exports.deleteData = deleteModuleNodeConfigListDTOData;
exports.saveData = saveModuleNodeConfigListDTOData;
exports.saveListData = saveModuleNodeConfigListDTOListData;
exports.getAllData = getAllModuleNodeConfigListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodeConfigListDTODataInit();
}

var overrideModule = '../overrides/ModuleNodeConfigListDTO';
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



