'use strict';

//Model Definition File for MeterStat.js


'use strict';
/**
* OF meter istatistiklerinin tutulduğu veri yapısı.
*/
exports.MeterStat =  {
    type:'class',
    name:'MeterStat',
    fields: {
        life : { name: 'life', type: 'Long', isRequired: true }, 
        packets : { name: 'packets', type: 'Long', isRequired: true }, 
        bytes : { name: 'bytes', type: 'Long', isRequired: true }
    }
}


//Mockup System for MeterStat.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterStat';
var dto_name = 'MeterStat';

function MeterStatDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterStatData();
    }
}

function genMeterStatData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterStatData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterStatListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterStatData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterStatData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterStatData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterStatListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterStatData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterStatDataInit;
exports.genData = genMeterStatData;
exports.getData = getMeterStatData;
exports.findData = findMeterStatData;
exports.getListData = getMeterStatListData;
exports.deleteData = deleteMeterStatData;
exports.saveData = saveMeterStatData;
exports.saveListData = saveMeterStatListData;
exports.getAllData = getAllMeterStatData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterStatDataInit();
}

var overrideModule = '../overrides/MeterStat';
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



