'use strict';

//Model Definition File for ConfigDefinitionListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ConfigDefinitionDTO = require('./ConfigDefinitionDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Konfigürasyon tanım listesi.
*/
exports.ConfigDefinitionListDTO =  {
    type:'class',
    name:'ConfigDefinitionListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ConfigDefinitionDTO', isRequired: true }
    }
}


//Mockup System for ConfigDefinitionListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDConfigDefinitionListDTO';
var dto_name = 'ConfigDefinitionListDTO';

function ConfigDefinitionListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genConfigDefinitionListDTOData();
    }
}

function genConfigDefinitionListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getConfigDefinitionListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getConfigDefinitionListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findConfigDefinitionListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteConfigDefinitionListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveConfigDefinitionListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveConfigDefinitionListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllConfigDefinitionListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ConfigDefinitionListDTODataInit;
exports.genData = genConfigDefinitionListDTOData;
exports.getData = getConfigDefinitionListDTOData;
exports.findData = findConfigDefinitionListDTOData;
exports.getListData = getConfigDefinitionListDTOListData;
exports.deleteData = deleteConfigDefinitionListDTOData;
exports.saveData = saveConfigDefinitionListDTOData;
exports.saveListData = saveConfigDefinitionListDTOListData;
exports.getAllData = getAllConfigDefinitionListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ConfigDefinitionListDTODataInit();
}

var overrideModule = '../overrides/ConfigDefinitionListDTO';
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



