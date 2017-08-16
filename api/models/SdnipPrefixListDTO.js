'use strict';

//Model Definition File for SdnipPrefixListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipPrefixDTO = require('./SdnipPrefixDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Eşleşme rota listesinin bulunduğu veri yapısı.
*/
exports.SdnipPrefixListDTO =  {
    type:'class',
    name:'SdnipPrefixListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipPrefixDTO', isRequired: true }
    }
}


//Mockup System for SdnipPrefixListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPrefixListDTO';
var dto_name = 'SdnipPrefixListDTO';

function SdnipPrefixListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPrefixListDTOData();
    }
}

function genSdnipPrefixListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPrefixListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPrefixListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPrefixListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPrefixListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPrefixListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPrefixListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPrefixListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPrefixListDTODataInit;
exports.genData = genSdnipPrefixListDTOData;
exports.getData = getSdnipPrefixListDTOData;
exports.findData = findSdnipPrefixListDTOData;
exports.getListData = getSdnipPrefixListDTOListData;
exports.deleteData = deleteSdnipPrefixListDTOData;
exports.saveData = saveSdnipPrefixListDTOData;
exports.saveListData = saveSdnipPrefixListDTOListData;
exports.getAllData = getAllSdnipPrefixListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPrefixListDTODataInit();
}

var overrideModule = '../overrides/SdnipPrefixListDTO';
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



