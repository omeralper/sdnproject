'use strict';

//Model Definition File for StatsDetail.js

//var NetworkCounter = require('./NetworkCounter');
//var SendReceiveRates = require('./SendReceiveRates');

'use strict';
/**
* İstatistik detaylarının tutulduğu veri yapısı.
*/
exports.StatsDetail =  {
    type:'class',
    name:'StatsDetail',
    fields: {
        packets : { name: 'packets', type: 'NetworkCounter', isRequired: true }, 
        packetErrors : { name: 'packetErrors', type: 'NetworkCounter', isRequired: true }, 
        packetDrops : { name: 'packetDrops', type: 'NetworkCounter', isRequired: true }, 
        bytes : { name: 'bytes', type: 'NetworkCounter', isRequired: true }, 
        rates : { name: 'rates', type: 'SendReceiveRates', isRequired: true }, 
        collisions : { name: 'collisions', type: 'Long', isRequired: true }
    }
}


//Mockup System for StatsDetail.js

var mockup = require('../helpers/mockup');

var data_key = 'IDStatsDetail';
var dto_name = 'StatsDetail';

function StatsDetailDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genStatsDetailData();
    }
}

function genStatsDetailData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getStatsDetailData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getStatsDetailListData(options) {
    return mockup.getListData(data_key, options);
}

function findStatsDetailData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteStatsDetailData(id) {
    return mockup.deleteData(data_key, id);
}

function saveStatsDetailData(data) {
    return mockup.saveData(data_key, data);
}

function saveStatsDetailListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllStatsDetailData() {
    return mockup.getAllData(data_key);
}

exports.init = StatsDetailDataInit;
exports.genData = genStatsDetailData;
exports.getData = getStatsDetailData;
exports.findData = findStatsDetailData;
exports.getListData = getStatsDetailListData;
exports.deleteData = deleteStatsDetailData;
exports.saveData = saveStatsDetailData;
exports.saveListData = saveStatsDetailListData;
exports.getAllData = getAllStatsDetailData;

function autoInit(){
    mockup.initDatabase(data_key);
    StatsDetailDataInit();
}

var overrideModule = '../overrides/StatsDetail';
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



