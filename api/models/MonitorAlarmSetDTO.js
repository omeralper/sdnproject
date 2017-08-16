'use strict';

//Model Definition File for MonitorAlarmSetDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* id numarası ile belirtilen bir göstergeye (ölçer olmalıdır) ait alarm kurgularını içeren nesnedir.
*/
exports.MonitorAlarmSetDTO =  {
    type:'class',
    name:'MonitorAlarmSetDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        idList : { name: 'idList', type: 'Array', subType: 'string', isRequired: true }, 
        loAlarm : { name: 'loAlarm', type: 'Double', isRequired: true }, 
        hiAlarm : { name: 'hiAlarm', type: 'Double', isRequired: true }
    }
}


//Mockup System for MonitorAlarmSetDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorAlarmSetDTO';
var dto_name = 'MonitorAlarmSetDTO';

function MonitorAlarmSetDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorAlarmSetDTOData();
    }
}

function genMonitorAlarmSetDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorAlarmSetDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorAlarmSetDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorAlarmSetDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorAlarmSetDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorAlarmSetDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorAlarmSetDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorAlarmSetDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorAlarmSetDTODataInit;
exports.genData = genMonitorAlarmSetDTOData;
exports.getData = getMonitorAlarmSetDTOData;
exports.findData = findMonitorAlarmSetDTOData;
exports.getListData = getMonitorAlarmSetDTOListData;
exports.deleteData = deleteMonitorAlarmSetDTOData;
exports.saveData = saveMonitorAlarmSetDTOData;
exports.saveListData = saveMonitorAlarmSetDTOListData;
exports.getAllData = getAllMonitorAlarmSetDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorAlarmSetDTODataInit();
}

var overrideModule = '../overrides/MonitorAlarmSetDTO';
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



