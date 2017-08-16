'use strict';

//Model Definition File for VirtualNetFunctionListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VirtualNetFunctionDTO = require('./VirtualNetFunctionDTO');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı listesinin bulunduğu veri yapısı.
*/
exports.VirtualNetFunctionListDTO =  {
    type:'class',
    name:'VirtualNetFunctionListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VirtualNetFunctionDTO', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionListDTO';
var dto_name = 'VirtualNetFunctionListDTO';

function VirtualNetFunctionListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionListDTOData();
    }
}

function genVirtualNetFunctionListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionListDTODataInit;
exports.genData = genVirtualNetFunctionListDTOData;
exports.getData = getVirtualNetFunctionListDTOData;
exports.findData = findVirtualNetFunctionListDTOData;
exports.getListData = getVirtualNetFunctionListDTOListData;
exports.deleteData = deleteVirtualNetFunctionListDTOData;
exports.saveData = saveVirtualNetFunctionListDTOData;
exports.saveListData = saveVirtualNetFunctionListDTOListData;
exports.getAllData = getAllVirtualNetFunctionListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionListDTODataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionListDTO';
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



