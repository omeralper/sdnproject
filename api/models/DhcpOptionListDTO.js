'use strict';

//Model Definition File for DhcpOptionListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var DhcpOptionDTO = require('./DhcpOptionDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* dhcp kapsamı içindeki opsiyonel yapılandırma veri harita DTO nesnelerinin listesidir.
*/
exports.DhcpOptionListDTO =  {
    type:'class',
    name:'DhcpOptionListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'DhcpOptionDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionListDTO';
var dto_name = 'DhcpOptionListDTO';

function DhcpOptionListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionListDTOData();
    }
}

function genDhcpOptionListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionListDTODataInit;
exports.genData = genDhcpOptionListDTOData;
exports.getData = getDhcpOptionListDTOData;
exports.findData = findDhcpOptionListDTOData;
exports.getListData = getDhcpOptionListDTOListData;
exports.deleteData = deleteDhcpOptionListDTOData;
exports.saveData = saveDhcpOptionListDTOData;
exports.saveListData = saveDhcpOptionListDTOListData;
exports.getAllData = getAllDhcpOptionListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionListDTODataInit();
}

var overrideModule = '../overrides/DhcpOptionListDTO';
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



