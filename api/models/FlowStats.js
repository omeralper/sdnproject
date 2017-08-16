'use strict';

//Model Definition File for FlowStats.js


'use strict';
/**
* Tek bir portun istatistiklerinin tutulduğu veri yapısı.
*/
exports.FlowStats =  {
    type:'class',
    name:'FlowStats',
    fields: {
        life : { name: 'life', type: 'Long', isRequired: true }, 
        packets : { name: 'packets', type: 'Long', isRequired: true }, 
        bytes : { name: 'bytes', type: 'Long', isRequired: true }, 
        rate : { name: 'rate', type: 'Long', isRequired: true }, 
        tstamp : { name: 'tstamp', type: 'Long', isRequired: true }
    }
}


//Mockup System for FlowStats.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowStats';
var dto_name = 'FlowStats';

function FlowStatsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowStatsData();
    }
}

function genFlowStatsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowStatsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowStatsListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowStatsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowStatsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowStatsData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowStatsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowStatsData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowStatsDataInit;
exports.genData = genFlowStatsData;
exports.getData = getFlowStatsData;
exports.findData = findFlowStatsData;
exports.getListData = getFlowStatsListData;
exports.deleteData = deleteFlowStatsData;
exports.saveData = saveFlowStatsData;
exports.saveListData = saveFlowStatsListData;
exports.getAllData = getAllFlowStatsData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowStatsDataInit();
}

var overrideModule = '../overrides/FlowStats';
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



