'use strict';

//Model Definition File for AlarmNotificationRequest.js

//var AlarmNotificationDTO = require('./AlarmNotificationDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm bildirim konfigürasonlarının iletimi için kullanılan veri yapısı.
*/
exports.AlarmNotificationRequest =  {
    type:'class',
    name:'AlarmNotificationRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AlarmNotificationDTO' }
    }
}


//Mockup System for AlarmNotificationRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmNotificationRequest';
var dto_name = 'AlarmNotificationRequest';

function AlarmNotificationRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmNotificationRequestData();
    }
}

function genAlarmNotificationRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmNotificationRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmNotificationRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmNotificationRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmNotificationRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmNotificationRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmNotificationRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmNotificationRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmNotificationRequestDataInit;
exports.genData = genAlarmNotificationRequestData;
exports.getData = getAlarmNotificationRequestData;
exports.findData = findAlarmNotificationRequestData;
exports.getListData = getAlarmNotificationRequestListData;
exports.deleteData = deleteAlarmNotificationRequestData;
exports.saveData = saveAlarmNotificationRequestData;
exports.saveListData = saveAlarmNotificationRequestListData;
exports.getAllData = getAllAlarmNotificationRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmNotificationRequestDataInit();
}

var overrideModule = '../overrides/AlarmNotificationRequest';
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



