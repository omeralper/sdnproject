'use strict';

//Model Definition File for SdnipDefinedSetListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipDefinedSetDTO = require('./SdnipDefinedSetDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Eşleşme listesinin bulunduğu veri yapısı.
*/
exports.SdnipDefinedSetListDTO =  {
    type:'class',
    name:'SdnipDefinedSetListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipDefinedSetDTO', isRequired: true }
    }
}


//Mockup System for SdnipDefinedSetListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipDefinedSetListDTO';
var dto_name = 'SdnipDefinedSetListDTO';

function SdnipDefinedSetListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipDefinedSetListDTOData();
    }
}

function genSdnipDefinedSetListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipDefinedSetListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipDefinedSetListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipDefinedSetListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipDefinedSetListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipDefinedSetListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipDefinedSetListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipDefinedSetListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipDefinedSetListDTODataInit;
exports.genData = genSdnipDefinedSetListDTOData;
exports.getData = getSdnipDefinedSetListDTOData;
exports.findData = findSdnipDefinedSetListDTOData;
exports.getListData = getSdnipDefinedSetListDTOListData;
exports.deleteData = deleteSdnipDefinedSetListDTOData;
exports.saveData = saveSdnipDefinedSetListDTOData;
exports.saveListData = saveSdnipDefinedSetListDTOListData;
exports.getAllData = getAllSdnipDefinedSetListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipDefinedSetListDTODataInit();
}

var overrideModule = '../overrides/SdnipDefinedSetListDTO';
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



