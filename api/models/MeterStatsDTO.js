'use strict';

//Model Definition File for MeterStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var MeterStat = require('./MeterStat');

'use strict';
/**
* OF meter istatistikleri veri transfer nesnesi.
*/
exports.MeterStatsDTO =  {
    type:'class',
    name:'MeterStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        meterStats : { name: 'meterStats', type: 'MeterStat', isRequired: true }
    }
}


//Mockup System for MeterStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterStatsDTO';
var dto_name = 'MeterStatsDTO';

function MeterStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterStatsDTOData();
    }
}

function genMeterStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterStatsDTODataInit;
exports.genData = genMeterStatsDTOData;
exports.getData = getMeterStatsDTOData;
exports.findData = findMeterStatsDTOData;
exports.getListData = getMeterStatsDTOListData;
exports.deleteData = deleteMeterStatsDTOData;
exports.saveData = saveMeterStatsDTOData;
exports.saveListData = saveMeterStatsDTOListData;
exports.getAllData = getAllMeterStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterStatsDTODataInit();
}

var overrideModule = '../overrides/MeterStatsDTO';
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



