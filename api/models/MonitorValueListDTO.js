'use strict';

//Model Definition File for MonitorValueListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MonitorValueDTO = require('./MonitorValueDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* id numaraları ile belirtilen göstergeleri ve onlara ait değerleri içeren nesnelerin listesidir.
*/
exports.MonitorValueListDTO =  {
    type:'class',
    name:'MonitorValueListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MonitorValueDTO', isRequired: true }
    }
}


//Mockup System for MonitorValueListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorValueListDTO';
var dto_name = 'MonitorValueListDTO';

function MonitorValueListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorValueListDTOData();
    }
}

function genMonitorValueListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorValueListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorValueListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorValueListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorValueListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorValueListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorValueListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorValueListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorValueListDTODataInit;
exports.genData = genMonitorValueListDTOData;
exports.getData = getMonitorValueListDTOData;
exports.findData = findMonitorValueListDTOData;
exports.getListData = getMonitorValueListDTOListData;
exports.deleteData = deleteMonitorValueListDTOData;
exports.saveData = saveMonitorValueListDTOData;
exports.saveListData = saveMonitorValueListDTOListData;
exports.getAllData = getAllMonitorValueListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorValueListDTODataInit();
}

var overrideModule = '../overrides/MonitorValueListDTO';
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



