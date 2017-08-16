'use strict';

//Model Definition File for HostStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var HostStat = require('./HostStat');

'use strict';
/**
* Uç Birime ait istatistik veri transfer modeli.
*/
exports.HostStatsDTO =  {
    type:'class',
    name:'HostStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        hostStats : { name: 'hostStats', type: 'HostStat', isRequired: true }
    }
}


//Mockup System for HostStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDHostStatsDTO';
var dto_name = 'HostStatsDTO';

function HostStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genHostStatsDTOData();
    }
}

function genHostStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getHostStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getHostStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findHostStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteHostStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveHostStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveHostStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllHostStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = HostStatsDTODataInit;
exports.genData = genHostStatsDTOData;
exports.getData = getHostStatsDTOData;
exports.findData = findHostStatsDTOData;
exports.getListData = getHostStatsDTOListData;
exports.deleteData = deleteHostStatsDTOData;
exports.saveData = saveHostStatsDTOData;
exports.saveListData = saveHostStatsDTOListData;
exports.getAllData = getAllHostStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    HostStatsDTODataInit();
}

var overrideModule = '../overrides/HostStatsDTO';
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



