'use strict';

//Model Definition File for MonitorAlarmSetResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MonitorAlarmSetDTO = require('./MonitorAlarmSetDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* MonitorAlarm isteğine verilecek cevabın veri yapısıdır
*/
exports.MonitorAlarmSetResponse =  {
    type:'class',
    name:'MonitorAlarmSetResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MonitorAlarmSetDTO', isRequired: true }
    }
}


//Mockup System for MonitorAlarmSetResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorAlarmSetResponse';
var dto_name = 'MonitorAlarmSetResponse';

function MonitorAlarmSetResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorAlarmSetResponseData();
    }
}

function genMonitorAlarmSetResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorAlarmSetResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorAlarmSetResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorAlarmSetResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorAlarmSetResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorAlarmSetResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorAlarmSetResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorAlarmSetResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorAlarmSetResponseDataInit;
exports.genData = genMonitorAlarmSetResponseData;
exports.getData = getMonitorAlarmSetResponseData;
exports.findData = findMonitorAlarmSetResponseData;
exports.getListData = getMonitorAlarmSetResponseListData;
exports.deleteData = deleteMonitorAlarmSetResponseData;
exports.saveData = saveMonitorAlarmSetResponseData;
exports.saveListData = saveMonitorAlarmSetResponseListData;
exports.getAllData = getAllMonitorAlarmSetResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorAlarmSetResponseDataInit();
}

var overrideModule = '../overrides/MonitorAlarmSetResponse';
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



