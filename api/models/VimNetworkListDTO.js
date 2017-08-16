'use strict';

//Model Definition File for VimNetworkListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VimNetworkDTO = require('./VimNetworkDTO');

'use strict';
/**
* VIM ag bilgilerinin listesinin tutulacağı ana tanım
*/
exports.VimNetworkListDTO =  {
    type:'class',
    name:'VimNetworkListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VimNetworkDTO', isRequired: true }
    }
}


//Mockup System for VimNetworkListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimNetworkListDTO';
var dto_name = 'VimNetworkListDTO';

function VimNetworkListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimNetworkListDTOData();
    }
}

function genVimNetworkListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimNetworkListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimNetworkListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimNetworkListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimNetworkListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimNetworkListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimNetworkListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimNetworkListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimNetworkListDTODataInit;
exports.genData = genVimNetworkListDTOData;
exports.getData = getVimNetworkListDTOData;
exports.findData = findVimNetworkListDTOData;
exports.getListData = getVimNetworkListDTOListData;
exports.deleteData = deleteVimNetworkListDTOData;
exports.saveData = saveVimNetworkListDTOData;
exports.saveListData = saveVimNetworkListDTOListData;
exports.getAllData = getAllVimNetworkListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimNetworkListDTODataInit();
}

var overrideModule = '../overrides/VimNetworkListDTO';
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



