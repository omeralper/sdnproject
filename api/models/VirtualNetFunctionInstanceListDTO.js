'use strict';

//Model Definition File for VirtualNetFunctionInstanceListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VirtualNetFunctionInstanceDTO = require('./VirtualNetFunctionInstanceDTO');

'use strict';
/**
* VNFI bilgilerinn tutuldugu liste
*/
exports.VirtualNetFunctionInstanceListDTO =  {
    type:'class',
    name:'VirtualNetFunctionInstanceListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VirtualNetFunctionInstanceDTO', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionInstanceListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceListDTO';
var dto_name = 'VirtualNetFunctionInstanceListDTO';

function VirtualNetFunctionInstanceListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceListDTOData();
    }
}

function genVirtualNetFunctionInstanceListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceListDTODataInit;
exports.genData = genVirtualNetFunctionInstanceListDTOData;
exports.getData = getVirtualNetFunctionInstanceListDTOData;
exports.findData = findVirtualNetFunctionInstanceListDTOData;
exports.getListData = getVirtualNetFunctionInstanceListDTOListData;
exports.deleteData = deleteVirtualNetFunctionInstanceListDTOData;
exports.saveData = saveVirtualNetFunctionInstanceListDTOData;
exports.saveListData = saveVirtualNetFunctionInstanceListDTOListData;
exports.getAllData = getAllVirtualNetFunctionInstanceListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceListDTODataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceListDTO';
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



