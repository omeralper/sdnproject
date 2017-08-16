'use strict';

//Model Definition File for ControllerListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ControllerDTO = require('./ControllerDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Anahtarlayıcı listesinin bulunduğu veri yapısı.
*/
exports.ControllerListDTO =  {
    type:'class',
    name:'ControllerListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ControllerDTO', isRequired: true }
    }
}


//Mockup System for ControllerListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerListDTO';
var dto_name = 'ControllerListDTO';

function ControllerListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerListDTOData();
    }
}

function genControllerListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerListDTODataInit;
exports.genData = genControllerListDTOData;
exports.getData = getControllerListDTOData;
exports.findData = findControllerListDTOData;
exports.getListData = getControllerListDTOListData;
exports.deleteData = deleteControllerListDTOData;
exports.saveData = saveControllerListDTOData;
exports.saveListData = saveControllerListDTOListData;
exports.getAllData = getAllControllerListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerListDTODataInit();
}

var overrideModule = '../overrides/ControllerListDTO';
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



