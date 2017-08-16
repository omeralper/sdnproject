'use strict';

//Model Definition File for PortStat.js

//var StatsDetail = require('./StatsDetail');

'use strict';
/**
* Tek bir portun istatistiklerinin tutulduğu veri yapısı.
*/
exports.PortStat =  {
    type:'class',
    name:'PortStat',
    fields: {
        id : { name: 'id', type: 'String' }, 
        number : { name: 'number', type: 'Integer', isRequired: true }, 
        stats : { name: 'stats', type: 'StatsDetail', isRequired: true }
    }
}


//Mockup System for PortStat.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortStat';
var dto_name = 'PortStat';

function PortStatDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortStatData();
    }
}

function genPortStatData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortStatData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortStatListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortStatData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortStatData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortStatData(data) {
    return mockup.saveData(data_key, data);
}

function savePortStatListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortStatData() {
    return mockup.getAllData(data_key);
}

exports.init = PortStatDataInit;
exports.genData = genPortStatData;
exports.getData = getPortStatData;
exports.findData = findPortStatData;
exports.getListData = getPortStatListData;
exports.deleteData = deletePortStatData;
exports.saveData = savePortStatData;
exports.saveListData = savePortStatListData;
exports.getAllData = getAllPortStatData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortStatDataInit();
}

var overrideModule = '../overrides/PortStat';
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



