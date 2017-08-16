'use strict';

//Model Definition File for ComputeStatisticsDTO.js

//var ComputeStatisticsUptimeDetail = require('./ComputeStatisticsUptimeDetail');

'use strict';
/**
* Istatistik veri modeli
*/
exports.ComputeStatisticsDTO =  {
    type:'class',
    name:'ComputeStatisticsDTO',
    fields: {
        vcpus : { name: 'vcpus', type: 'Integer' }, 
        vcpus_used : { name: 'vcpus_used', type: 'Integer' }, 
        running_vms : { name: 'running_vms', type: 'Integer' }, 
        current_workload : { name: 'current_workload', type: 'Integer' }, 
        memory_mb : { name: 'memory_mb', type: 'Integer' }, 
        memory_mb_used : { name: 'memory_mb_used', type: 'Integer' }, 
        free_ram_mb : { name: 'free_ram_mb', type: 'Integer' }, 
        free_disk_gb : { name: 'free_disk_gb', type: 'Integer' }, 
        disk_available_least : { name: 'disk_available_least', type: 'Integer' }, 
        local_gb : { name: 'local_gb', type: 'Integer' }, 
        local_gb_used : { name: 'local_gb_used', type: 'Integer' }, 
        computeHostId : { name: 'computeHostId', type: 'Integer' }, 
        uptimeDetail : { name: 'uptimeDetail', type: 'ComputeStatisticsUptimeDetail' }, 
        computeHostIp : { name: 'computeHostIp', type: 'String' }
    }
}


//Mockup System for ComputeStatisticsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeStatisticsDTO';
var dto_name = 'ComputeStatisticsDTO';

function ComputeStatisticsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeStatisticsDTOData();
    }
}

function genComputeStatisticsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeStatisticsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeStatisticsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeStatisticsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeStatisticsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeStatisticsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeStatisticsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeStatisticsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeStatisticsDTODataInit;
exports.genData = genComputeStatisticsDTOData;
exports.getData = getComputeStatisticsDTOData;
exports.findData = findComputeStatisticsDTOData;
exports.getListData = getComputeStatisticsDTOListData;
exports.deleteData = deleteComputeStatisticsDTOData;
exports.saveData = saveComputeStatisticsDTOData;
exports.saveListData = saveComputeStatisticsDTOListData;
exports.getAllData = getAllComputeStatisticsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeStatisticsDTODataInit();
}

var overrideModule = '../overrides/ComputeStatisticsDTO';
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



