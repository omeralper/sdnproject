'use strict';

//Model Definition File for SfcTypeListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SfcTypeDTO = require('./SfcTypeDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sfc tip listesinin bulunduğu veri yapısı.
*/
exports.SfcTypeListDTO =  {
    type:'class',
    name:'SfcTypeListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SfcTypeDTO', isRequired: true }
    }
}


//Mockup System for SfcTypeListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcTypeListDTO';
var dto_name = 'SfcTypeListDTO';

function SfcTypeListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcTypeListDTOData();
    }
}

function genSfcTypeListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcTypeListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcTypeListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcTypeListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcTypeListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcTypeListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcTypeListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcTypeListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcTypeListDTODataInit;
exports.genData = genSfcTypeListDTOData;
exports.getData = getSfcTypeListDTOData;
exports.findData = findSfcTypeListDTOData;
exports.getListData = getSfcTypeListDTOListData;
exports.deleteData = deleteSfcTypeListDTOData;
exports.saveData = saveSfcTypeListDTOData;
exports.saveListData = saveSfcTypeListDTOListData;
exports.getAllData = getAllSfcTypeListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcTypeListDTODataInit();
}

var overrideModule = '../overrides/SfcTypeListDTO';
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



