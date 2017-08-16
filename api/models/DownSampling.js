'use strict';

//Model Definition File for DownSampling.js

//var TsdbAggregator = require('./TsdbAggregator');

'use strict';
/**
* Bir periyoda saçılmış çok sayıda veri noktasını birleştirmek
*/
exports.DownSampling =  {
    type:'class',
    name:'DownSampling',
    fields: {
        period : { name: 'period', type: 'Long', isRequired: true }, 
        aggregator : { name: 'aggregator', type: 'TsdbAggregator', isRequired: true }
    }
}


//Mockup System for DownSampling.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDownSampling';
var dto_name = 'DownSampling';

function DownSamplingDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDownSamplingData();
    }
}

function genDownSamplingData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDownSamplingData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDownSamplingListData(options) {
    return mockup.getListData(data_key, options);
}

function findDownSamplingData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDownSamplingData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDownSamplingData(data) {
    return mockup.saveData(data_key, data);
}

function saveDownSamplingListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDownSamplingData() {
    return mockup.getAllData(data_key);
}

exports.init = DownSamplingDataInit;
exports.genData = genDownSamplingData;
exports.getData = getDownSamplingData;
exports.findData = findDownSamplingData;
exports.getListData = getDownSamplingListData;
exports.deleteData = deleteDownSamplingData;
exports.saveData = saveDownSamplingData;
exports.saveListData = saveDownSamplingListData;
exports.getAllData = getAllDownSamplingData;

function autoInit(){
    mockup.initDatabase(data_key);
    DownSamplingDataInit();
}

var overrideModule = '../overrides/DownSampling';
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



