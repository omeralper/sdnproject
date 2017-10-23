'use strict';

//Model Definition File for DhcpIpReservedUserListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIpReservedUserDTO = require('./DhcpIpReservedUserDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki kullanıcı-ip adresi çiftlerini içeren nesnelerin listesidir.
*/
exports.DhcpIpReservedUserListDTO =  {
    type:'class',
    name:'DhcpIpReservedUserListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIpReservedUserDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedUserListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedUserListDTO';
var dto_name = 'DhcpIpReservedUserListDTO';

function DhcpIpReservedUserListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedUserListDTOData();
    }
}

function genDhcpIpReservedUserListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedUserListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedUserListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedUserListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedUserListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedUserListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedUserListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedUserListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedUserListDTODataInit;
exports.genData = genDhcpIpReservedUserListDTOData;
exports.getData = getDhcpIpReservedUserListDTOData;
exports.findData = findDhcpIpReservedUserListDTOData;
exports.getListData = getDhcpIpReservedUserListDTOListData;
exports.deleteData = deleteDhcpIpReservedUserListDTOData;
exports.saveData = saveDhcpIpReservedUserListDTOData;
exports.saveListData = saveDhcpIpReservedUserListDTOListData;
exports.getAllData = getAllDhcpIpReservedUserListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedUserListDTODataInit();
}

var overrideModule = '../overrides/DhcpIpReservedUserListDTO';
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



