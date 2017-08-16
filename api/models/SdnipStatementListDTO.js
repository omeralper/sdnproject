'use strict';

//Model Definition File for SdnipStatementListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipStatementDTO = require('./SdnipStatementDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Durum tanımları listesini tutan modeldir
*/
exports.SdnipStatementListDTO =  {
    type:'class',
    name:'SdnipStatementListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipStatementDTO', isRequired: true }
    }
}


//Mockup System for SdnipStatementListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipStatementListDTO';
var dto_name = 'SdnipStatementListDTO';

function SdnipStatementListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipStatementListDTOData();
    }
}

function genSdnipStatementListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipStatementListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipStatementListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipStatementListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipStatementListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipStatementListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipStatementListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipStatementListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipStatementListDTODataInit;
exports.genData = genSdnipStatementListDTOData;
exports.getData = getSdnipStatementListDTOData;
exports.findData = findSdnipStatementListDTOData;
exports.getListData = getSdnipStatementListDTOListData;
exports.deleteData = deleteSdnipStatementListDTOData;
exports.saveData = saveSdnipStatementListDTOData;
exports.saveListData = saveSdnipStatementListDTOListData;
exports.getAllData = getAllSdnipStatementListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipStatementListDTODataInit();
}

var overrideModule = '../overrides/SdnipStatementListDTO';
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



