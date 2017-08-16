'use strict';

//Model Definition File for SdnipSetItemListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipSetItemDTO = require('./SdnipSetItemDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Eşleşecek eleman listesinin bulunduğu veri yapısı.
*/
exports.SdnipSetItemListDTO =  {
    type:'class',
    name:'SdnipSetItemListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipSetItemDTO', isRequired: true }
    }
}


//Mockup System for SdnipSetItemListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipSetItemListDTO';
var dto_name = 'SdnipSetItemListDTO';

function SdnipSetItemListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipSetItemListDTOData();
    }
}

function genSdnipSetItemListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipSetItemListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipSetItemListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipSetItemListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipSetItemListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipSetItemListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipSetItemListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipSetItemListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipSetItemListDTODataInit;
exports.genData = genSdnipSetItemListDTOData;
exports.getData = getSdnipSetItemListDTOData;
exports.findData = findSdnipSetItemListDTOData;
exports.getListData = getSdnipSetItemListDTOListData;
exports.deleteData = deleteSdnipSetItemListDTOData;
exports.saveData = saveSdnipSetItemListDTOData;
exports.saveListData = saveSdnipSetItemListDTOListData;
exports.getAllData = getAllSdnipSetItemListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipSetItemListDTODataInit();
}

var overrideModule = '../overrides/SdnipSetItemListDTO';
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



