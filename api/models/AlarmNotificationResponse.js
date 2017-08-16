'use strict';

//Model Definition File for AlarmNotificationResponse.js

//var AlarmNotificationDTO = require('./AlarmNotificationDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm bildirim konfigürasyonlarının dönüldüğü veri yapısı.
*/
exports.AlarmNotificationResponse =  {
    type:'class',
    name:'AlarmNotificationResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AlarmNotificationDTO' }
    }
}


//Mockup System for AlarmNotificationResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmNotificationResponse';
var dto_name = 'AlarmNotificationResponse';

function AlarmNotificationResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmNotificationResponseData();
    }
}

function genAlarmNotificationResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmNotificationResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmNotificationResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmNotificationResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmNotificationResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmNotificationResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmNotificationResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmNotificationResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmNotificationResponseDataInit;
exports.genData = genAlarmNotificationResponseData;
exports.getData = getAlarmNotificationResponseData;
exports.findData = findAlarmNotificationResponseData;
exports.getListData = getAlarmNotificationResponseListData;
exports.deleteData = deleteAlarmNotificationResponseData;
exports.saveData = saveAlarmNotificationResponseData;
exports.saveListData = saveAlarmNotificationResponseListData;
exports.getAllData = getAllAlarmNotificationResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmNotificationResponseDataInit();
}

var overrideModule = '../overrides/AlarmNotificationResponse';
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



