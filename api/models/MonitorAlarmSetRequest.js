'use strict';

//Model Definition File for MonitorAlarmSetRequest.js

//var GenericRequest = require('./GenericRequest');
//var MonitorAlarmSetDTO = require('./MonitorAlarmSetDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kurulmak istenen alarmların sunucuya bildirilmesi için kullanılan veri yapısıdır.
*/
exports.MonitorAlarmSetRequest =  {
    type:'class',
    name:'MonitorAlarmSetRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MonitorAlarmSetDTO', isRequired: true }
    }
}


//Mockup System for MonitorAlarmSetRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorAlarmSetRequest';
var dto_name = 'MonitorAlarmSetRequest';

function MonitorAlarmSetRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorAlarmSetRequestData();
    }
}

function genMonitorAlarmSetRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorAlarmSetRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorAlarmSetRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorAlarmSetRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorAlarmSetRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorAlarmSetRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorAlarmSetRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorAlarmSetRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorAlarmSetRequestDataInit;
exports.genData = genMonitorAlarmSetRequestData;
exports.getData = getMonitorAlarmSetRequestData;
exports.findData = findMonitorAlarmSetRequestData;
exports.getListData = getMonitorAlarmSetRequestListData;
exports.deleteData = deleteMonitorAlarmSetRequestData;
exports.saveData = saveMonitorAlarmSetRequestData;
exports.saveListData = saveMonitorAlarmSetRequestListData;
exports.getAllData = getAllMonitorAlarmSetRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorAlarmSetRequestDataInit();
}

var overrideModule = '../overrides/MonitorAlarmSetRequest';
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



