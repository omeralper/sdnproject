'use strict';

//Model Definition File for ComputeHostStatisticsDTO.js

//var ComputeStatisticsDTO = require('./ComputeStatisticsDTO');

'use strict';
/**
* Node&#39;un istatistik bilgilerini tutan veri modeli
*/
exports.ComputeHostStatisticsDTO =  {
    type:'class',
    name:'ComputeHostStatisticsDTO',
    fields: {
        statistics : { name: 'statistics', type: 'ComputeStatisticsDTO', isRequired: true }, 
        rawResponseData : { name: 'rawResponseData', type: 'String', isRequired: true }
    }
}


//Mockup System for ComputeHostStatisticsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticsDTO';
var dto_name = 'ComputeHostStatisticsDTO';

function ComputeHostStatisticsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticsDTOData();
    }
}

function genComputeHostStatisticsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticsDTODataInit;
exports.genData = genComputeHostStatisticsDTOData;
exports.getData = getComputeHostStatisticsDTOData;
exports.findData = findComputeHostStatisticsDTOData;
exports.getListData = getComputeHostStatisticsDTOListData;
exports.deleteData = deleteComputeHostStatisticsDTOData;
exports.saveData = saveComputeHostStatisticsDTOData;
exports.saveListData = saveComputeHostStatisticsDTOListData;
exports.getAllData = getAllComputeHostStatisticsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticsDTODataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticsDTO';
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



