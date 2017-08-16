'use strict';

//Model Definition File for AlarmNotificationDTO.js

//var ALARM_SOURCE = require('./ALARM_SOURCE');
//var BaseDTO = require('./BaseDTO');
//var SEVERITY = require('./SEVERITY');

'use strict';
/**
* Alarm bildirim konfigürasyon bilgisinin bulunduğu veri yapısı.
*/
exports.AlarmNotificationDTO =  {
    type:'class',
    name:'AlarmNotificationDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        creationDate : { name: 'creationDate', type: 'Date' }, 
        lastUpdateDate : { name: 'lastUpdateDate', type: 'Date' }, 
        source : { name: 'source', type: 'Array', subType: 'ALARM_SOURCE' }, 
        severity : { name: 'severity', type: 'Array', subType: 'SEVERITY' }, 
        mvtnId : { name: 'mvtnId', type: 'Array', subType: 'integer' }, 
        mvtnName : { name: 'mvtnName', type: 'Array', subType: 'string' }, 
        email : { name: 'email', type: 'Array', subType: 'string' }
    }
}


//Mockup System for AlarmNotificationDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmNotificationDTO';
var dto_name = 'AlarmNotificationDTO';

function AlarmNotificationDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmNotificationDTOData();
    }
}

function genAlarmNotificationDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmNotificationDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmNotificationDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmNotificationDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmNotificationDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmNotificationDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmNotificationDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmNotificationDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmNotificationDTODataInit;
exports.genData = genAlarmNotificationDTOData;
exports.getData = getAlarmNotificationDTOData;
exports.findData = findAlarmNotificationDTOData;
exports.getListData = getAlarmNotificationDTOListData;
exports.deleteData = deleteAlarmNotificationDTOData;
exports.saveData = saveAlarmNotificationDTOData;
exports.saveListData = saveAlarmNotificationDTOListData;
exports.getAllData = getAllAlarmNotificationDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmNotificationDTODataInit();
}

var overrideModule = '../overrides/AlarmNotificationDTO';
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



