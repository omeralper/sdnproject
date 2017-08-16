'use strict';

//Model Definition File for AccessProfileListDTO.js

//var AccessProfileDTO = require('./AccessProfileDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Erişim politikası listesinin bulunduğu veri yapısı.
*/
exports.AccessProfileListDTO =  {
    type:'class',
    name:'AccessProfileListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AccessProfileDTO', isRequired: true }
    }
}


//Mockup System for AccessProfileListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileListDTO';
var dto_name = 'AccessProfileListDTO';

function AccessProfileListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileListDTOData();
    }
}

function genAccessProfileListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileListDTODataInit;
exports.genData = genAccessProfileListDTOData;
exports.getData = getAccessProfileListDTOData;
exports.findData = findAccessProfileListDTOData;
exports.getListData = getAccessProfileListDTOListData;
exports.deleteData = deleteAccessProfileListDTOData;
exports.saveData = saveAccessProfileListDTOData;
exports.saveListData = saveAccessProfileListDTOListData;
exports.getAllData = getAllAccessProfileListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileListDTODataInit();
}

var overrideModule = '../overrides/AccessProfileListDTO';
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



