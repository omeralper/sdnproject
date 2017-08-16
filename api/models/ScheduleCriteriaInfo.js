'use strict';

//Model Definition File for ScheduleCriteriaInfo.js


'use strict';
/**
* Politika uygulanma zaman bilgilerini içeren veri modeli
*/
exports.ScheduleCriteriaInfo =  {
    type:'class',
    name:'ScheduleCriteriaInfo',
    fields: {
        startTime : { name: 'startTime', type: 'Date' }, 
        endTime : { name: 'endTime', type: 'Date' }, 
        cronData : { name: 'cronData', type: 'String' }
    }
}


//Mockup System for ScheduleCriteriaInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDScheduleCriteriaInfo';
var dto_name = 'ScheduleCriteriaInfo';

function ScheduleCriteriaInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genScheduleCriteriaInfoData();
    }
}

function genScheduleCriteriaInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getScheduleCriteriaInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getScheduleCriteriaInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findScheduleCriteriaInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteScheduleCriteriaInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveScheduleCriteriaInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveScheduleCriteriaInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllScheduleCriteriaInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = ScheduleCriteriaInfoDataInit;
exports.genData = genScheduleCriteriaInfoData;
exports.getData = getScheduleCriteriaInfoData;
exports.findData = findScheduleCriteriaInfoData;
exports.getListData = getScheduleCriteriaInfoListData;
exports.deleteData = deleteScheduleCriteriaInfoData;
exports.saveData = saveScheduleCriteriaInfoData;
exports.saveListData = saveScheduleCriteriaInfoListData;
exports.getAllData = getAllScheduleCriteriaInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    ScheduleCriteriaInfoDataInit();
}

var overrideModule = '../overrides/ScheduleCriteriaInfo';
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



