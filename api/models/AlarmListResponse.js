'use strict';

//Model Definition File for AlarmListResponse.js

//var AlarmListDTO = require('./AlarmListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm listeleme işleminin cevap veri yapısı.
*/
exports.AlarmListResponse =  {
    type:'class',
    name:'AlarmListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AlarmListDTO', isRequired: true }
    }
}


//Mockup System for AlarmListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmListResponse';
var dto_name = 'AlarmListResponse';

function AlarmListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmListResponseData();
    }
}

function genAlarmListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmListResponseDataInit;
exports.genData = genAlarmListResponseData;
exports.getData = getAlarmListResponseData;
exports.findData = findAlarmListResponseData;
exports.getListData = getAlarmListResponseListData;
exports.deleteData = deleteAlarmListResponseData;
exports.saveData = saveAlarmListResponseData;
exports.saveListData = saveAlarmListResponseListData;
exports.getAllData = getAllAlarmListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmListResponseDataInit();
}

var overrideModule = '../overrides/AlarmListResponse';
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



