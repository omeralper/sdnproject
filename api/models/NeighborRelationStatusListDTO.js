'use strict';

//Model Definition File for NeighborRelationStatusListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NeighborRelationStatusDTO = require('./NeighborRelationStatusDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Bir BGP yönlendiricinin komşuları ile bağlantı durumunu tutan veri yapısıdır.
*/
exports.NeighborRelationStatusListDTO =  {
    type:'class',
    name:'NeighborRelationStatusListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NeighborRelationStatusDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationStatusListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationStatusListDTO';
var dto_name = 'NeighborRelationStatusListDTO';

function NeighborRelationStatusListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationStatusListDTOData();
    }
}

function genNeighborRelationStatusListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationStatusListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationStatusListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationStatusListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationStatusListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationStatusListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationStatusListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationStatusListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationStatusListDTODataInit;
exports.genData = genNeighborRelationStatusListDTOData;
exports.getData = getNeighborRelationStatusListDTOData;
exports.findData = findNeighborRelationStatusListDTOData;
exports.getListData = getNeighborRelationStatusListDTOListData;
exports.deleteData = deleteNeighborRelationStatusListDTOData;
exports.saveData = saveNeighborRelationStatusListDTOData;
exports.saveListData = saveNeighborRelationStatusListDTOListData;
exports.getAllData = getAllNeighborRelationStatusListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationStatusListDTODataInit();
}

var overrideModule = '../overrides/NeighborRelationStatusListDTO';
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



