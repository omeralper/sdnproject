'use strict';

//Model Definition File for HostStat.js


'use strict';
/**
* Hostların istatistiklerinin tutulduğu veri yapısıdır.
*/
exports.HostStat =  {
    type:'class',
    name:'HostStat',
    fields: {
        mac : { name: 'mac', type: 'String' }, 
        sendByteCount : { name: 'sendByteCount', type: 'Long', isRequired: true }, 
        receiveByteCount : { name: 'receiveByteCount', type: 'Long', isRequired: true }
    }
}


//Mockup System for HostStat.js

var mockup = require('../helpers/mockup');

var data_key = 'IDHostStat';
var dto_name = 'HostStat';

function HostStatDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genHostStatData();
    }
}

function genHostStatData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getHostStatData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getHostStatListData(options) {
    return mockup.getListData(data_key, options);
}

function findHostStatData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteHostStatData(id) {
    return mockup.deleteData(data_key, id);
}

function saveHostStatData(data) {
    return mockup.saveData(data_key, data);
}

function saveHostStatListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllHostStatData() {
    return mockup.getAllData(data_key);
}

exports.init = HostStatDataInit;
exports.genData = genHostStatData;
exports.getData = getHostStatData;
exports.findData = findHostStatData;
exports.getListData = getHostStatListData;
exports.deleteData = deleteHostStatData;
exports.saveData = saveHostStatData;
exports.saveListData = saveHostStatListData;
exports.getAllData = getAllHostStatData;

function autoInit(){
    mockup.initDatabase(data_key);
    HostStatDataInit();
}

var overrideModule = '../overrides/HostStat';
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



