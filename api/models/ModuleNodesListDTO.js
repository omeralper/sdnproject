'use strict';

//Model Definition File for ModuleNodesListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ModuleNodesDTO = require('./ModuleNodesDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Modül node listesi.
*/
exports.ModuleNodesListDTO =  {
    type:'class',
    name:'ModuleNodesListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ModuleNodesDTO', isRequired: true }
    }
}


//Mockup System for ModuleNodesListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDModuleNodesListDTO';
var dto_name = 'ModuleNodesListDTO';

function ModuleNodesListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genModuleNodesListDTOData();
    }
}

function genModuleNodesListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getModuleNodesListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getModuleNodesListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findModuleNodesListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteModuleNodesListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveModuleNodesListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveModuleNodesListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllModuleNodesListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ModuleNodesListDTODataInit;
exports.genData = genModuleNodesListDTOData;
exports.getData = getModuleNodesListDTOData;
exports.findData = findModuleNodesListDTOData;
exports.getListData = getModuleNodesListDTOListData;
exports.deleteData = deleteModuleNodesListDTOData;
exports.saveData = saveModuleNodesListDTOData;
exports.saveListData = saveModuleNodesListDTOListData;
exports.getAllData = getAllModuleNodesListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ModuleNodesListDTODataInit();
}

var overrideModule = '../overrides/ModuleNodesListDTO';
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



