'use strict';

//Model Definition File for AlarmDTO.js

//var ALARM_RESOURCE = require('./ALARM_RESOURCE');
//var ALARM_SOURCE = require('./ALARM_SOURCE');
//var ALARM_STATUS = require('./ALARM_STATUS');
//var ALARM_TYPE = require('./ALARM_TYPE');
//var BaseDTO = require('./BaseDTO');
//var GUI_NOTIFICATION = require('./GUI_NOTIFICATION');
//var SEVERITY = require('./SEVERITY');

'use strict';
/**
* Alarm / Event bilgisinin bulunduğu veri yapısı.
*/
exports.AlarmDTO =  {
    type:'class',
    name:'AlarmDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        time : { name: 'time', type: 'Date' }, 
        severity : { name: 'severity', type: 'SEVERITY' }, 
        source : { name: 'source', type: 'ALARM_SOURCE' }, 
        sourceHost : { name: 'sourceHost', type: 'String' }, 
        sourceInstance : { name: 'sourceInstance', type: 'String' }, 
        resource : { name: 'resource', type: 'ALARM_RESOURCE' }, 
        description : { name: 'description', type: 'String' }, 
        detail : { name: 'detail', type: 'String' }, 
        correctionAction : { name: 'correctionAction', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        alarmStatus : { name: 'alarmStatus', type: 'ALARM_STATUS' }, 
        type : { name: 'type', type: 'ALARM_TYPE' }, 
        resourceId : { name: 'resourceId', type: 'String' }, 
        vtnId : { name: 'vtnId', type: 'String' }, 
        vtnName : { name: 'vtnName', type: 'String' }, 
        resolver : { name: 'resolver', type: 'String' }, 
        resolveNote : { name: 'resolveNote', type: 'String' }, 
        reportingMethod : { name: 'reportingMethod', type: 'String' }, 
        solveTime : { name: 'solveTime', type: 'Date' }, 
        guiNotification : { name: 'guiNotification', type: 'GUI_NOTIFICATION' }, 
        emergencyPolicyIdArray : { name: 'emergencyPolicyIdArray', type: 'Array', subType: 'long' }
    }
}


//Mockup System for AlarmDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmDTO';
var dto_name = 'AlarmDTO';

function AlarmDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmDTOData();
    }
}

function genAlarmDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmDTODataInit;
exports.genData = genAlarmDTOData;
exports.getData = getAlarmDTOData;
exports.findData = findAlarmDTOData;
exports.getListData = getAlarmDTOListData;
exports.deleteData = deleteAlarmDTOData;
exports.saveData = saveAlarmDTOData;
exports.saveListData = saveAlarmDTOListData;
exports.getAllData = getAllAlarmDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmDTODataInit();
}

var overrideModule = '../overrides/AlarmDTO';
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



