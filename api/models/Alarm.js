'use strict';

//Model Definition File for Alarm.js

//var ALARM_RESOURCE = require('./ALARM_RESOURCE');
//var ALARM_SOURCE = require('./ALARM_SOURCE');
//var ALARM_STATUS = require('./ALARM_STATUS');
//var ALARM_TYPE = require('./ALARM_TYPE');
//var GUI_NOTIFICATION = require('./GUI_NOTIFICATION');

'use strict';
/**
* Uygulamalar tarafından alarm yöneticisine gönderilecek detaysız alarm objesi
*/
exports.Alarm =  {
    type:'class',
    name:'Alarm',
    fields: {
        name : { name: 'name', type: 'String', isRequired: true }, 
        resource : { name: 'resource', type: 'ALARM_RESOURCE', isRequired: true }, 
        sourceHost : { name: 'sourceHost', type: 'String', isRequired: true }, 
        sourceInstance : { name: 'sourceInstance', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'ALARM_STATUS', isRequired: true }, 
        type : { name: 'type', type: 'ALARM_TYPE', isRequired: true }, 
        source : { name: 'source', type: 'ALARM_SOURCE', isRequired: true }, 
        detail : { name: 'detail', type: 'String', isRequired: true }, 
        resourceId : { name: 'resourceId', type: 'String', isRequired: true }, 
        vtnId : { name: 'vtnId', type: 'String', isRequired: true }, 
        vtnName : { name: 'vtnName', type: 'String' }, 
        resolver : { name: 'resolver', type: 'String', isRequired: true }, 
        resolveNote : { name: 'resolveNote', type: 'String' }, 
        reportingMethod : { name: 'reportingMethod', type: 'String', isRequired: true }, 
        solveTime : { name: 'solveTime', type: 'Date', isRequired: true }, 
        GUI_notification : { name: 'GUI_notification', type: 'GUI_NOTIFICATION' }, 
        emergencyPolicyIdArray : { name: 'emergencyPolicyIdArray', type: 'String' }
    }
}


//Mockup System for Alarm.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarm';
var dto_name = 'Alarm';

function AlarmDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmData();
    }
}

function genAlarmData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmDataInit;
exports.genData = genAlarmData;
exports.getData = getAlarmData;
exports.findData = findAlarmData;
exports.getListData = getAlarmListData;
exports.deleteData = deleteAlarmData;
exports.saveData = saveAlarmData;
exports.saveListData = saveAlarmListData;
exports.getAllData = getAllAlarmData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmDataInit();
}

var overrideModule = '../overrides/Alarm';
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



