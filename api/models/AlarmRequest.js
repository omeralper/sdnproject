'use strict';

//Model Definition File for AlarmRequest.js

//var AlarmDTO = require('./AlarmDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alarm verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.AlarmRequest =  {
    type:'class',
    name:'AlarmRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AlarmDTO', isRequired: true }
    }
}


//Mockup System for AlarmRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmRequest';
var dto_name = 'AlarmRequest';

function AlarmRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmRequestData();
    }
}

function genAlarmRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmRequestDataInit;
exports.genData = genAlarmRequestData;
exports.getData = getAlarmRequestData;
exports.findData = findAlarmRequestData;
exports.getListData = getAlarmRequestListData;
exports.deleteData = deleteAlarmRequestData;
exports.saveData = saveAlarmRequestData;
exports.saveListData = saveAlarmRequestListData;
exports.getAllData = getAllAlarmRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmRequestDataInit();
}

var overrideModule = '../overrides/AlarmRequest';
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



