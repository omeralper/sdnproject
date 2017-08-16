'use strict';

//Model Definition File for DhcpIPOwnerListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIPOwnerDTO = require('./DhcpIPOwnerDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Dhcp IP sahibi (DhcpIPOwnerDTO) verilerini içeren DTO nesnelerinin listesidir.
*/
exports.DhcpIPOwnerListDTO =  {
    type:'class',
    name:'DhcpIPOwnerListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIPOwnerDTO', isRequired: true }
    }
}


//Mockup System for DhcpIPOwnerListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIPOwnerListDTO';
var dto_name = 'DhcpIPOwnerListDTO';

function DhcpIPOwnerListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIPOwnerListDTOData();
    }
}

function genDhcpIPOwnerListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIPOwnerListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIPOwnerListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIPOwnerListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIPOwnerListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIPOwnerListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIPOwnerListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIPOwnerListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIPOwnerListDTODataInit;
exports.genData = genDhcpIPOwnerListDTOData;
exports.getData = getDhcpIPOwnerListDTOData;
exports.findData = findDhcpIPOwnerListDTOData;
exports.getListData = getDhcpIPOwnerListDTOListData;
exports.deleteData = deleteDhcpIPOwnerListDTOData;
exports.saveData = saveDhcpIPOwnerListDTOData;
exports.saveListData = saveDhcpIPOwnerListDTOListData;
exports.getAllData = getAllDhcpIPOwnerListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIPOwnerListDTODataInit();
}

var overrideModule = '../overrides/DhcpIPOwnerListDTO';
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



