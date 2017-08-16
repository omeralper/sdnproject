'use strict';

//Model Definition File for AAAServerListDTO.js

//var AAAServerDTO = require('./AAAServerDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* AAA sunucu listesinin bulunduğu veri yapısı.
*/
exports.AAAServerListDTO =  {
    type:'class',
    name:'AAAServerListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AAAServerDTO', isRequired: true }
    }
}


//Mockup System for AAAServerListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAAAServerListDTO';
var dto_name = 'AAAServerListDTO';

function AAAServerListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAAAServerListDTOData();
    }
}

function genAAAServerListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAAAServerListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAAAServerListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAAAServerListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAAAServerListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAAAServerListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAAAServerListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAAAServerListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AAAServerListDTODataInit;
exports.genData = genAAAServerListDTOData;
exports.getData = getAAAServerListDTOData;
exports.findData = findAAAServerListDTOData;
exports.getListData = getAAAServerListDTOListData;
exports.deleteData = deleteAAAServerListDTOData;
exports.saveData = saveAAAServerListDTOData;
exports.saveListData = saveAAAServerListDTOListData;
exports.getAllData = getAllAAAServerListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AAAServerListDTODataInit();
}

var overrideModule = '../overrides/AAAServerListDTO';
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



