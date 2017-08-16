'use strict';

//Model Definition File for EdrListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var EdrDTO = require('./EdrDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* EDR listesinin bulunduğu veri yapısı.
*/
exports.EdrListDTO =  {
    type:'class',
    name:'EdrListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'EdrDTO', isRequired: true }
    }
}


//Mockup System for EdrListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEdrListDTO';
var dto_name = 'EdrListDTO';

function EdrListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEdrListDTOData();
    }
}

function genEdrListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEdrListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEdrListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEdrListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEdrListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEdrListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEdrListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEdrListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EdrListDTODataInit;
exports.genData = genEdrListDTOData;
exports.getData = getEdrListDTOData;
exports.findData = findEdrListDTOData;
exports.getListData = getEdrListDTOListData;
exports.deleteData = deleteEdrListDTOData;
exports.saveData = saveEdrListDTOData;
exports.saveListData = saveEdrListDTOListData;
exports.getAllData = getAllEdrListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EdrListDTODataInit();
}

var overrideModule = '../overrides/EdrListDTO';
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



