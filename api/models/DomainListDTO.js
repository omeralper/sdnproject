'use strict';

//Model Definition File for DomainListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DomainDTO = require('./DomainDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Domain verilerini içeren DTO nesnelerinin listesidir.
*/
exports.DomainListDTO =  {
    type:'class',
    name:'DomainListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DomainDTO', isRequired: true }
    }
}


//Mockup System for DomainListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDomainListDTO';
var dto_name = 'DomainListDTO';

function DomainListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDomainListDTOData();
    }
}

function genDomainListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDomainListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDomainListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDomainListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDomainListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDomainListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDomainListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDomainListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DomainListDTODataInit;
exports.genData = genDomainListDTOData;
exports.getData = getDomainListDTOData;
exports.findData = findDomainListDTOData;
exports.getListData = getDomainListDTOListData;
exports.deleteData = deleteDomainListDTOData;
exports.saveData = saveDomainListDTOData;
exports.saveListData = saveDomainListDTOListData;
exports.getAllData = getAllDomainListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DomainListDTODataInit();
}

var overrideModule = '../overrides/DomainListDTO';
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



