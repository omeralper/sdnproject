'use strict';

//Model Definition File for DhcpIpPoolListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIpPoolDTO = require('./DhcpIpPoolDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Dhcp kapsamı (DhcpIpPoolDTO) verilerini içeren DTO nesnelerinin listesidir.
*/
exports.DhcpIpPoolListDTO =  {
    type:'class',
    name:'DhcpIpPoolListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIpPoolDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpPoolListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpPoolListDTO';
var dto_name = 'DhcpIpPoolListDTO';

function DhcpIpPoolListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpPoolListDTOData();
    }
}

function genDhcpIpPoolListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpPoolListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpPoolListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpPoolListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpPoolListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpPoolListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpPoolListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpPoolListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpPoolListDTODataInit;
exports.genData = genDhcpIpPoolListDTOData;
exports.getData = getDhcpIpPoolListDTOData;
exports.findData = findDhcpIpPoolListDTOData;
exports.getListData = getDhcpIpPoolListDTOListData;
exports.deleteData = deleteDhcpIpPoolListDTOData;
exports.saveData = saveDhcpIpPoolListDTOData;
exports.saveListData = saveDhcpIpPoolListDTOListData;
exports.getAllData = getAllDhcpIpPoolListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpPoolListDTODataInit();
}

var overrideModule = '../overrides/DhcpIpPoolListDTO';
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



