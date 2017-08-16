'use strict';

//Model Definition File for AlarmInfo.js

//var ALARM_STATUS = require('./ALARM_STATUS');

'use strict';
/**
* Alarm detaylarının yer aldığı veri yapısıdır.
*/
exports.AlarmInfo =  {
    type:'class',
    name:'AlarmInfo',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        message : { name: 'message', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'ALARM_STATUS', isRequired: true }
    }
}


//Mockup System for AlarmInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmInfo';
var dto_name = 'AlarmInfo';

function AlarmInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmInfoData();
    }
}

function genAlarmInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmInfoDataInit;
exports.genData = genAlarmInfoData;
exports.getData = getAlarmInfoData;
exports.findData = findAlarmInfoData;
exports.getListData = getAlarmInfoListData;
exports.deleteData = deleteAlarmInfoData;
exports.saveData = saveAlarmInfoData;
exports.saveListData = saveAlarmInfoListData;
exports.getAllData = getAllAlarmInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmInfoDataInit();
}

var overrideModule = '../overrides/AlarmInfo';
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



