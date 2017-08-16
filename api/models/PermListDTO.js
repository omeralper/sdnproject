'use strict';

//Model Definition File for PermListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var PermDTO = require('./PermDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Yetki listesinin bulunduğu veri yapısı.
*/
exports.PermListDTO =  {
    type:'class',
    name:'PermListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'PermDTO', isRequired: true }
    }
}


//Mockup System for PermListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPermListDTO';
var dto_name = 'PermListDTO';

function PermListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPermListDTOData();
    }
}

function genPermListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPermListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPermListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPermListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePermListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePermListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePermListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPermListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PermListDTODataInit;
exports.genData = genPermListDTOData;
exports.getData = getPermListDTOData;
exports.findData = findPermListDTOData;
exports.getListData = getPermListDTOListData;
exports.deleteData = deletePermListDTOData;
exports.saveData = savePermListDTOData;
exports.saveListData = savePermListDTOListData;
exports.getAllData = getAllPermListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PermListDTODataInit();
}

var overrideModule = '../overrides/PermListDTO';
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



