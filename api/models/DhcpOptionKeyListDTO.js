'use strict';

//Model Definition File for DhcpOptionKeyListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpOptionKeyDTO = require('./DhcpOptionKeyDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki mac adresi-ip adresi çiftlerini içeren nesnelerin listesidir.
*/
exports.DhcpOptionKeyListDTO =  {
    type:'class',
    name:'DhcpOptionKeyListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpOptionKeyDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionKeyListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionKeyListDTO';
var dto_name = 'DhcpOptionKeyListDTO';

function DhcpOptionKeyListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionKeyListDTOData();
    }
}

function genDhcpOptionKeyListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionKeyListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionKeyListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionKeyListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionKeyListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionKeyListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionKeyListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionKeyListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionKeyListDTODataInit;
exports.genData = genDhcpOptionKeyListDTOData;
exports.getData = getDhcpOptionKeyListDTOData;
exports.findData = findDhcpOptionKeyListDTOData;
exports.getListData = getDhcpOptionKeyListDTOListData;
exports.deleteData = deleteDhcpOptionKeyListDTOData;
exports.saveData = saveDhcpOptionKeyListDTOData;
exports.saveListData = saveDhcpOptionKeyListDTOListData;
exports.getAllData = getAllDhcpOptionKeyListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionKeyListDTODataInit();
}

var overrideModule = '../overrides/DhcpOptionKeyListDTO';
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



