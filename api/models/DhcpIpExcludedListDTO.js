'use strict';

//Model Definition File for DhcpIpExcludedListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpIpExcludedDTO = require('./DhcpIpExcludedDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki kullanılması yasaklanmış ip adres aralıklarını gösteren nesnelerin listesidir.
*/
exports.DhcpIpExcludedListDTO =  {
    type:'class',
    name:'DhcpIpExcludedListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpIpExcludedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpExcludedListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpExcludedListDTO';
var dto_name = 'DhcpIpExcludedListDTO';

function DhcpIpExcludedListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpExcludedListDTOData();
    }
}

function genDhcpIpExcludedListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpExcludedListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpExcludedListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpExcludedListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpExcludedListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpExcludedListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpExcludedListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpExcludedListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpExcludedListDTODataInit;
exports.genData = genDhcpIpExcludedListDTOData;
exports.getData = getDhcpIpExcludedListDTOData;
exports.findData = findDhcpIpExcludedListDTOData;
exports.getListData = getDhcpIpExcludedListDTOListData;
exports.deleteData = deleteDhcpIpExcludedListDTOData;
exports.saveData = saveDhcpIpExcludedListDTOData;
exports.saveListData = saveDhcpIpExcludedListDTOListData;
exports.getAllData = getAllDhcpIpExcludedListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpExcludedListDTODataInit();
}

var overrideModule = '../overrides/DhcpIpExcludedListDTO';
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



