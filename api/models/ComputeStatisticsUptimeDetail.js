'use strict';

//Model Definition File for ComputeStatisticsUptimeDetail.js


'use strict';
/**
* Istatistik veri modeli
*/
exports.ComputeStatisticsUptimeDetail =  {
    type:'class',
    name:'ComputeStatisticsUptimeDetail',
    fields: {
        current_node_time : { name: 'current_node_time', type: 'String' }, 
        running_time : { name: 'running_time', type: 'String' }, 
        logged_users : { name: 'logged_users', type: 'Integer' }, 
        past1MinLoad : { name: 'past1MinLoad', type: 'Double' }, 
        past5MinLoad : { name: 'past5MinLoad', type: 'Double' }, 
        past15MinLoad : { name: 'past15MinLoad', type: 'Double' }
    }
}


//Mockup System for ComputeStatisticsUptimeDetail.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeStatisticsUptimeDetail';
var dto_name = 'ComputeStatisticsUptimeDetail';

function ComputeStatisticsUptimeDetailDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeStatisticsUptimeDetailData();
    }
}

function genComputeStatisticsUptimeDetailData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeStatisticsUptimeDetailData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeStatisticsUptimeDetailListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeStatisticsUptimeDetailData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeStatisticsUptimeDetailData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeStatisticsUptimeDetailData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeStatisticsUptimeDetailListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeStatisticsUptimeDetailData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeStatisticsUptimeDetailDataInit;
exports.genData = genComputeStatisticsUptimeDetailData;
exports.getData = getComputeStatisticsUptimeDetailData;
exports.findData = findComputeStatisticsUptimeDetailData;
exports.getListData = getComputeStatisticsUptimeDetailListData;
exports.deleteData = deleteComputeStatisticsUptimeDetailData;
exports.saveData = saveComputeStatisticsUptimeDetailData;
exports.saveListData = saveComputeStatisticsUptimeDetailListData;
exports.getAllData = getAllComputeStatisticsUptimeDetailData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeStatisticsUptimeDetailDataInit();
}

var overrideModule = '../overrides/ComputeStatisticsUptimeDetail';
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



