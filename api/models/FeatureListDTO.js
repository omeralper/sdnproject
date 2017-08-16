'use strict';

//Model Definition File for FeatureListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var FeatureDTO = require('./FeatureDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Özellik profillerinin bulundugu veri modeli.
*/
exports.FeatureListDTO =  {
    type:'class',
    name:'FeatureListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'FeatureDTO' }
    }
}


//Mockup System for FeatureListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureListDTO';
var dto_name = 'FeatureListDTO';

function FeatureListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureListDTOData();
    }
}

function genFeatureListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureListDTODataInit;
exports.genData = genFeatureListDTOData;
exports.getData = getFeatureListDTOData;
exports.findData = findFeatureListDTOData;
exports.getListData = getFeatureListDTOListData;
exports.deleteData = deleteFeatureListDTOData;
exports.saveData = saveFeatureListDTOData;
exports.saveListData = saveFeatureListDTOListData;
exports.getAllData = getAllFeatureListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureListDTODataInit();
}

var overrideModule = '../overrides/FeatureListDTO';
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



