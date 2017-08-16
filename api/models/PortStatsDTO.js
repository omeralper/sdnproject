'use strict';

//Model Definition File for PortStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var PortStat = require('./PortStat');

'use strict';
/**
* Anahtarlayıcı portlarına ait istatistik veri transfer modeli.
*/
exports.PortStatsDTO =  {
    type:'class',
    name:'PortStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        portDetails : { name: 'portDetails', type: 'Array', subType: 'PortStat', isRequired: true }
    }
}


//Mockup System for PortStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortStatsDTO';
var dto_name = 'PortStatsDTO';

function PortStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortStatsDTOData();
    }
}

function genPortStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePortStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PortStatsDTODataInit;
exports.genData = genPortStatsDTOData;
exports.getData = getPortStatsDTOData;
exports.findData = findPortStatsDTOData;
exports.getListData = getPortStatsDTOListData;
exports.deleteData = deletePortStatsDTOData;
exports.saveData = savePortStatsDTOData;
exports.saveListData = savePortStatsDTOListData;
exports.getAllData = getAllPortStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortStatsDTODataInit();
}

var overrideModule = '../overrides/PortStatsDTO';
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



