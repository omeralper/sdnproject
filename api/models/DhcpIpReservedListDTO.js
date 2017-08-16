'use strict';

//Model Definition File for DhcpIpReservedListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIpReservedDTO = require('./DhcpIpReservedDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki mac adresi-ip adresi çiftlerini içeren nesnelerin listesidir.
*/
exports.DhcpIpReservedListDTO =  {
    type:'class',
    name:'DhcpIpReservedListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIpReservedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedListDTO';
var dto_name = 'DhcpIpReservedListDTO';

function DhcpIpReservedListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedListDTOData();
    }
}

function genDhcpIpReservedListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedListDTODataInit;
exports.genData = genDhcpIpReservedListDTOData;
exports.getData = getDhcpIpReservedListDTOData;
exports.findData = findDhcpIpReservedListDTOData;
exports.getListData = getDhcpIpReservedListDTOListData;
exports.deleteData = deleteDhcpIpReservedListDTOData;
exports.saveData = saveDhcpIpReservedListDTOData;
exports.saveListData = saveDhcpIpReservedListDTOListData;
exports.getAllData = getAllDhcpIpReservedListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedListDTODataInit();
}

var overrideModule = '../overrides/DhcpIpReservedListDTO';
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



