'use strict';

//Model Definition File for NeighborRelationListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NeighborRelationDTO = require('./NeighborRelationDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* BGP komşuluk ilişkileri listesinin bulunduğu veri yapısı.
*/
exports.NeighborRelationListDTO =  {
    type:'class',
    name:'NeighborRelationListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NeighborRelationDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationListDTO';
var dto_name = 'NeighborRelationListDTO';

function NeighborRelationListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationListDTOData();
    }
}

function genNeighborRelationListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationListDTODataInit;
exports.genData = genNeighborRelationListDTOData;
exports.getData = getNeighborRelationListDTOData;
exports.findData = findNeighborRelationListDTOData;
exports.getListData = getNeighborRelationListDTOListData;
exports.deleteData = deleteNeighborRelationListDTOData;
exports.saveData = saveNeighborRelationListDTOData;
exports.saveListData = saveNeighborRelationListDTOListData;
exports.getAllData = getAllNeighborRelationListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationListDTODataInit();
}

var overrideModule = '../overrides/NeighborRelationListDTO';
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



