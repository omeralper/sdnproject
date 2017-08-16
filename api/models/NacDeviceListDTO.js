'use strict';

//Model Definition File for NacDeviceListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NacDeviceDTO = require('./NacDeviceDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Cihaz listesinin bulunduğu veri yapısı.
*/
exports.NacDeviceListDTO =  {
    type:'class',
    name:'NacDeviceListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NacDeviceDTO', isRequired: true }
    }
}


//Mockup System for NacDeviceListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacDeviceListDTO';
var dto_name = 'NacDeviceListDTO';

function NacDeviceListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacDeviceListDTOData();
    }
}

function genNacDeviceListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacDeviceListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacDeviceListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacDeviceListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacDeviceListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacDeviceListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacDeviceListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacDeviceListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacDeviceListDTODataInit;
exports.genData = genNacDeviceListDTOData;
exports.getData = getNacDeviceListDTOData;
exports.findData = findNacDeviceListDTOData;
exports.getListData = getNacDeviceListDTOListData;
exports.deleteData = deleteNacDeviceListDTOData;
exports.saveData = saveNacDeviceListDTOData;
exports.saveListData = saveNacDeviceListDTOListData;
exports.getAllData = getAllNacDeviceListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacDeviceListDTODataInit();
}

var overrideModule = '../overrides/NacDeviceListDTO';
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



