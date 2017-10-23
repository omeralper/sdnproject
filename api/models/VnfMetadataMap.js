'use strict';

//Model Definition File for VnfMetadataMap.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VnfMetadataMapArray = require('./VnfMetadataMapArray');

'use strict';
/**
* VNF&#39;lerin metadata bilgileri
*/
exports.VnfMetadataMap =  {
    type:'class',
    name:'VnfMetadataMap',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        vnfName : { name: 'vnfName', type: 'String', isRequired: true }, 
        vnfMetadataMapArray : { name: 'vnfMetadataMapArray', type: 'Array', subType: 'VnfMetadataMapArray', isRequired: true }
    }
}


//Mockup System for VnfMetadataMap.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfMetadataMap';
var dto_name = 'VnfMetadataMap';

function VnfMetadataMapDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfMetadataMapData();
    }
}

function genVnfMetadataMapData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfMetadataMapData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfMetadataMapListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfMetadataMapData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfMetadataMapData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfMetadataMapData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfMetadataMapListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfMetadataMapData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfMetadataMapDataInit;
exports.genData = genVnfMetadataMapData;
exports.getData = getVnfMetadataMapData;
exports.findData = findVnfMetadataMapData;
exports.getListData = getVnfMetadataMapListData;
exports.deleteData = deleteVnfMetadataMapData;
exports.saveData = saveVnfMetadataMapData;
exports.saveListData = saveVnfMetadataMapListData;
exports.getAllData = getAllVnfMetadataMapData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfMetadataMapDataInit();
}

var overrideModule = '../overrides/VnfMetadataMap';
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



