'use strict';

//Model Definition File for MonitorInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MonitorInfoDTO = require('./MonitorInfoDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Göstergeleri ve onlara ait alanları içeren nesnelerin listesidir.
*/
exports.MonitorInfoListDTO =  {
    type:'class',
    name:'MonitorInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MonitorInfoDTO', isRequired: true }
    }
}


//Mockup System for MonitorInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorInfoListDTO';
var dto_name = 'MonitorInfoListDTO';

function MonitorInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorInfoListDTOData();
    }
}

function genMonitorInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorInfoListDTODataInit;
exports.genData = genMonitorInfoListDTOData;
exports.getData = getMonitorInfoListDTOData;
exports.findData = findMonitorInfoListDTOData;
exports.getListData = getMonitorInfoListDTOListData;
exports.deleteData = deleteMonitorInfoListDTOData;
exports.saveData = saveMonitorInfoListDTOData;
exports.saveListData = saveMonitorInfoListDTOListData;
exports.getAllData = getAllMonitorInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorInfoListDTODataInit();
}

var overrideModule = '../overrides/MonitorInfoListDTO';
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



