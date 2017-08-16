'use strict';

//Model Definition File for MonitorSearchCriteria.js

//var MONITOR_TYPE = require('./MONITOR_TYPE');
//var MonitorTagValue = require('./MonitorTagValue');

'use strict';
/**
* MonitorSelect istek nesnesi içinde yeralabilecek araştırma kriter alanlarını içerir.
*/
exports.MonitorSearchCriteria =  {
    type:'class',
    name:'MonitorSearchCriteria',
    fields: {
        id : { name: 'id', type: 'String' }, 
        owner : { name: 'owner', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        monitorTags : { name: 'monitorTags', type: 'Array', subType: 'MonitorTagValue' }, 
        monitorType : { name: 'monitorType', type: 'MONITOR_TYPE' }
    }
}


//Mockup System for MonitorSearchCriteria.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSearchCriteria';
var dto_name = 'MonitorSearchCriteria';

function MonitorSearchCriteriaDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSearchCriteriaData();
    }
}

function genMonitorSearchCriteriaData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSearchCriteriaData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSearchCriteriaListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSearchCriteriaData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSearchCriteriaData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSearchCriteriaData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSearchCriteriaListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSearchCriteriaData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSearchCriteriaDataInit;
exports.genData = genMonitorSearchCriteriaData;
exports.getData = getMonitorSearchCriteriaData;
exports.findData = findMonitorSearchCriteriaData;
exports.getListData = getMonitorSearchCriteriaListData;
exports.deleteData = deleteMonitorSearchCriteriaData;
exports.saveData = saveMonitorSearchCriteriaData;
exports.saveListData = saveMonitorSearchCriteriaListData;
exports.getAllData = getAllMonitorSearchCriteriaData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSearchCriteriaDataInit();
}

var overrideModule = '../overrides/MonitorSearchCriteria';
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



