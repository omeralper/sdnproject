'use strict';

//Model Definition File for PathListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var PathDTO = require('./PathDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Patika listesinin bulunduğu veri yapısı.
*/
exports.PathListDTO =  {
    type:'class',
    name:'PathListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'PathDTO', isRequired: true }
    }
}


//Mockup System for PathListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathListDTO';
var dto_name = 'PathListDTO';

function PathListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathListDTOData();
    }
}

function genPathListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePathListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PathListDTODataInit;
exports.genData = genPathListDTOData;
exports.getData = getPathListDTOData;
exports.findData = findPathListDTOData;
exports.getListData = getPathListDTOListData;
exports.deleteData = deletePathListDTOData;
exports.saveData = savePathListDTOData;
exports.saveListData = savePathListDTOListData;
exports.getAllData = getAllPathListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathListDTODataInit();
}

var overrideModule = '../overrides/PathListDTO';
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



