'use strict';

//Model Definition File for ComputeHostStatisticListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ComputeStatisticsDTO = require('./ComputeStatisticsDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Istatistiki bilgilerin tumunu toplayan data modeli
*/
exports.ComputeHostStatisticListDTO =  {
    type:'class',
    name:'ComputeHostStatisticListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        computeHostStatisticList : { name: 'computeHostStatisticList', type: 'Array', subType: 'ComputeStatisticsDTO' }
    }
}


//Mockup System for ComputeHostStatisticListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticListDTO';
var dto_name = 'ComputeHostStatisticListDTO';

function ComputeHostStatisticListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticListDTOData();
    }
}

function genComputeHostStatisticListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticListDTODataInit;
exports.genData = genComputeHostStatisticListDTOData;
exports.getData = getComputeHostStatisticListDTOData;
exports.findData = findComputeHostStatisticListDTOData;
exports.getListData = getComputeHostStatisticListDTOListData;
exports.deleteData = deleteComputeHostStatisticListDTOData;
exports.saveData = saveComputeHostStatisticListDTOData;
exports.saveListData = saveComputeHostStatisticListDTOListData;
exports.getAllData = getAllComputeHostStatisticListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticListDTODataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticListDTO';
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



