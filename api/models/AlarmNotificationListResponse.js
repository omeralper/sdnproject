'use strict';

//Model Definition File for AlarmNotificationListResponse.js

//var AlarmNotificationListDTO = require('./AlarmNotificationListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm bildirim konfigürasyon listesinin dönüldüğü veri yapısı.
*/
exports.AlarmNotificationListResponse =  {
    type:'class',
    name:'AlarmNotificationListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AlarmNotificationListDTO' }
    }
}


//Mockup System for AlarmNotificationListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmNotificationListResponse';
var dto_name = 'AlarmNotificationListResponse';

function AlarmNotificationListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmNotificationListResponseData();
    }
}

function genAlarmNotificationListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmNotificationListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmNotificationListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmNotificationListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmNotificationListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmNotificationListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmNotificationListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmNotificationListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmNotificationListResponseDataInit;
exports.genData = genAlarmNotificationListResponseData;
exports.getData = getAlarmNotificationListResponseData;
exports.findData = findAlarmNotificationListResponseData;
exports.getListData = getAlarmNotificationListResponseListData;
exports.deleteData = deleteAlarmNotificationListResponseData;
exports.saveData = saveAlarmNotificationListResponseData;
exports.saveListData = saveAlarmNotificationListResponseListData;
exports.getAllData = getAllAlarmNotificationListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmNotificationListResponseDataInit();
}

var overrideModule = '../overrides/AlarmNotificationListResponse';
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



