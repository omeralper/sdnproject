'use strict';

//Model Definition File for SwitchStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var StatsDetail = require('./StatsDetail');

'use strict';
/**
* Anahtarlayıcıya ait istatistik veri transfer modeli.
*/
exports.SwitchStatsDTO =  {
    type:'class',
    name:'SwitchStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        stats : { name: 'stats', type: 'StatsDetail', isRequired: true }
    }
}


//Mockup System for SwitchStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchStatsDTO';
var dto_name = 'SwitchStatsDTO';

function SwitchStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchStatsDTOData();
    }
}

function genSwitchStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchStatsDTODataInit;
exports.genData = genSwitchStatsDTOData;
exports.getData = getSwitchStatsDTOData;
exports.findData = findSwitchStatsDTOData;
exports.getListData = getSwitchStatsDTOListData;
exports.deleteData = deleteSwitchStatsDTOData;
exports.saveData = saveSwitchStatsDTOData;
exports.saveListData = saveSwitchStatsDTOListData;
exports.getAllData = getAllSwitchStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchStatsDTODataInit();
}

var overrideModule = '../overrides/SwitchStatsDTO';
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



