'use strict';

//Model Definition File for MonitorSelectListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MonitorSelectDTO = require('./MonitorSelectDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Araştırma kriterlerine uygun göstergeleri ve onlara ait alanları içeren nesnelerin listesidir.
*/
exports.MonitorSelectListDTO =  {
    type:'class',
    name:'MonitorSelectListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MonitorSelectDTO', isRequired: true }
    }
}


//Mockup System for MonitorSelectListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSelectListDTO';
var dto_name = 'MonitorSelectListDTO';

function MonitorSelectListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSelectListDTOData();
    }
}

function genMonitorSelectListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSelectListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSelectListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSelectListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSelectListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSelectListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSelectListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSelectListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSelectListDTODataInit;
exports.genData = genMonitorSelectListDTOData;
exports.getData = getMonitorSelectListDTOData;
exports.findData = findMonitorSelectListDTOData;
exports.getListData = getMonitorSelectListDTOListData;
exports.deleteData = deleteMonitorSelectListDTOData;
exports.saveData = saveMonitorSelectListDTOData;
exports.saveListData = saveMonitorSelectListDTOListData;
exports.getAllData = getAllMonitorSelectListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSelectListDTODataInit();
}

var overrideModule = '../overrides/MonitorSelectListDTO';
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



