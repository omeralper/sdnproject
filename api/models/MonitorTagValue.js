'use strict';

//Model Definition File for MonitorTagValue.js


'use strict';
/**
* Metrik veri noktalarında olması gereken tag&#x3D;val
*/
exports.MonitorTagValue =  {
    type:'class',
    name:'MonitorTagValue',
    fields: {
        tag : { name: 'tag', type: 'String', isRequired: true }, 
        val : { name: 'val', type: 'String', isRequired: true }
    }
}


//Mockup System for MonitorTagValue.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorTagValue';
var dto_name = 'MonitorTagValue';

function MonitorTagValueDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorTagValueData();
    }
}

function genMonitorTagValueData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorTagValueData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorTagValueListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorTagValueData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorTagValueData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorTagValueData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorTagValueListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorTagValueData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorTagValueDataInit;
exports.genData = genMonitorTagValueData;
exports.getData = getMonitorTagValueData;
exports.findData = findMonitorTagValueData;
exports.getListData = getMonitorTagValueListData;
exports.deleteData = deleteMonitorTagValueData;
exports.saveData = saveMonitorTagValueData;
exports.saveListData = saveMonitorTagValueListData;
exports.getAllData = getAllMonitorTagValueData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorTagValueDataInit();
}

var overrideModule = '../overrides/MonitorTagValue';
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



