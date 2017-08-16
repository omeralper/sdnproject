'use strict';

//Model Definition File for DhcpScopeListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpScopeDTO = require('./DhcpScopeDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Dhcp kapsamı (DhcpScope) verilerini içeren DTO nesnelerinin listesidir.
*/
exports.DhcpScopeListDTO =  {
    type:'class',
    name:'DhcpScopeListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpScopeDTO', isRequired: true }
    }
}


//Mockup System for DhcpScopeListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpScopeListDTO';
var dto_name = 'DhcpScopeListDTO';

function DhcpScopeListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpScopeListDTOData();
    }
}

function genDhcpScopeListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpScopeListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpScopeListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpScopeListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpScopeListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpScopeListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpScopeListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpScopeListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpScopeListDTODataInit;
exports.genData = genDhcpScopeListDTOData;
exports.getData = getDhcpScopeListDTOData;
exports.findData = findDhcpScopeListDTOData;
exports.getListData = getDhcpScopeListDTOListData;
exports.deleteData = deleteDhcpScopeListDTOData;
exports.saveData = saveDhcpScopeListDTOData;
exports.saveListData = saveDhcpScopeListDTOListData;
exports.getAllData = getAllDhcpScopeListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpScopeListDTODataInit();
}

var overrideModule = '../overrides/DhcpScopeListDTO';
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



