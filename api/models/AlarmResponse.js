'use strict';

//Model Definition File for AlarmResponse.js

//var AlarmDTO = require('./AlarmDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm detaylarının dönüldüğü veri yapısı.
*/
exports.AlarmResponse =  {
    type:'class',
    name:'AlarmResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AlarmDTO' }
    }
}


//Mockup System for AlarmResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmResponse';
var dto_name = 'AlarmResponse';

function AlarmResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmResponseData();
    }
}

function genAlarmResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmResponseDataInit;
exports.genData = genAlarmResponseData;
exports.getData = getAlarmResponseData;
exports.findData = findAlarmResponseData;
exports.getListData = getAlarmResponseListData;
exports.deleteData = deleteAlarmResponseData;
exports.saveData = saveAlarmResponseData;
exports.saveListData = saveAlarmResponseListData;
exports.getAllData = getAllAlarmResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmResponseDataInit();
}

var overrideModule = '../overrides/AlarmResponse';
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



