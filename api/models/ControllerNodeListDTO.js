'use strict';

//Model Definition File for ControllerNodeListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ControllerNodeDTO = require('./ControllerNodeDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Kontrolcü profillerinin bulundugu veri modeli.
*/
exports.ControllerNodeListDTO =  {
    type:'class',
    name:'ControllerNodeListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ControllerNodeDTO' }
    }
}


//Mockup System for ControllerNodeListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeListDTO';
var dto_name = 'ControllerNodeListDTO';

function ControllerNodeListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeListDTOData();
    }
}

function genControllerNodeListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeListDTODataInit;
exports.genData = genControllerNodeListDTOData;
exports.getData = getControllerNodeListDTOData;
exports.findData = findControllerNodeListDTOData;
exports.getListData = getControllerNodeListDTOListData;
exports.deleteData = deleteControllerNodeListDTOData;
exports.saveData = saveControllerNodeListDTOData;
exports.saveListData = saveControllerNodeListDTOListData;
exports.getAllData = getAllControllerNodeListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeListDTODataInit();
}

var overrideModule = '../overrides/ControllerNodeListDTO';
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



