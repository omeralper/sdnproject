'use strict';

//Model Definition File for LogDTO.js

//var BaseDTO = require('./BaseDTO');
//var LOG_LEVEL = require('./LOG_LEVEL');
//var object = require('./object');

'use strict';
/**
* Günlük verilerinin yer aldığı veri yapısıdır.
*/
exports.LogDTO =  {
    type:'class',
    name:'LogDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        level : { name: 'level', type: 'LOG_LEVEL', isRequired: true }, 
        message : { name: 'message', type: 'String', isRequired: true }, 
        extras : { name: 'extras', type: 'Object' }
    }
}


//Mockup System for LogDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogDTO';
var dto_name = 'LogDTO';

function LogDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogDTOData();
    }
}

function genLogDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LogDTODataInit;
exports.genData = genLogDTOData;
exports.getData = getLogDTOData;
exports.findData = findLogDTOData;
exports.getListData = getLogDTOListData;
exports.deleteData = deleteLogDTOData;
exports.saveData = saveLogDTOData;
exports.saveListData = saveLogDTOListData;
exports.getAllData = getAllLogDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogDTODataInit();
}

var overrideModule = '../overrides/LogDTO';
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



