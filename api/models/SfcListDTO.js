'use strict';

//Model Definition File for SfcListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SfcDTO = require('./SfcDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sfc listesinin bulunduğu veri yapısı.
*/
exports.SfcListDTO =  {
    type:'class',
    name:'SfcListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SfcDTO', isRequired: true }
    }
}


//Mockup System for SfcListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcListDTO';
var dto_name = 'SfcListDTO';

function SfcListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcListDTOData();
    }
}

function genSfcListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcListDTODataInit;
exports.genData = genSfcListDTOData;
exports.getData = getSfcListDTOData;
exports.findData = findSfcListDTOData;
exports.getListData = getSfcListDTOListData;
exports.deleteData = deleteSfcListDTOData;
exports.saveData = saveSfcListDTOData;
exports.saveListData = saveSfcListDTOListData;
exports.getAllData = getAllSfcListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcListDTODataInit();
}

var overrideModule = '../overrides/SfcListDTO';
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



