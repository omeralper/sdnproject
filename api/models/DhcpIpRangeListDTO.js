'use strict';

//Model Definition File for DhcpIpRangeListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIpRangeDTO = require('./DhcpIpRangeDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Dhcp ip menzili (DhcpIpRange) verilerini içeren DTO nesnelerinin listesidir.
*/
exports.DhcpIpRangeListDTO =  {
    type:'class',
    name:'DhcpIpRangeListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIpRangeDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpRangeListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpRangeListDTO';
var dto_name = 'DhcpIpRangeListDTO';

function DhcpIpRangeListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpRangeListDTOData();
    }
}

function genDhcpIpRangeListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpRangeListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpRangeListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpRangeListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpRangeListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpRangeListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpRangeListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpRangeListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpRangeListDTODataInit;
exports.genData = genDhcpIpRangeListDTOData;
exports.getData = getDhcpIpRangeListDTOData;
exports.findData = findDhcpIpRangeListDTOData;
exports.getListData = getDhcpIpRangeListDTOListData;
exports.deleteData = deleteDhcpIpRangeListDTOData;
exports.saveData = saveDhcpIpRangeListDTOData;
exports.saveListData = saveDhcpIpRangeListDTOListData;
exports.getAllData = getAllDhcpIpRangeListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpRangeListDTODataInit();
}

var overrideModule = '../overrides/DhcpIpRangeListDTO';
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



