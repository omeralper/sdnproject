'use strict';

//Model Definition File for NacGroupListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NacGroupDTO = require('./NacGroupDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Nac Grup listesinin bulunduğu veri yapısı.
*/
exports.NacGroupListDTO =  {
    type:'class',
    name:'NacGroupListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NacGroupDTO', isRequired: true }
    }
}


//Mockup System for NacGroupListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacGroupListDTO';
var dto_name = 'NacGroupListDTO';

function NacGroupListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacGroupListDTOData();
    }
}

function genNacGroupListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacGroupListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacGroupListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacGroupListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacGroupListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacGroupListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacGroupListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacGroupListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacGroupListDTODataInit;
exports.genData = genNacGroupListDTOData;
exports.getData = getNacGroupListDTOData;
exports.findData = findNacGroupListDTOData;
exports.getListData = getNacGroupListDTOListData;
exports.deleteData = deleteNacGroupListDTOData;
exports.saveData = saveNacGroupListDTOData;
exports.saveListData = saveNacGroupListDTOListData;
exports.getAllData = getAllNacGroupListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacGroupListDTODataInit();
}

var overrideModule = '../overrides/NacGroupListDTO';
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



