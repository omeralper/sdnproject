'use strict';

//Model Definition File for LogLevelDTO.js

//var BaseDTO = require('./BaseDTO');
//var LOG_LEVEL = require('./LOG_LEVEL');

'use strict';
/**
* Günlük verilerinin seviyelerinin bulunduğu veri yapısı.
*/
exports.LogLevelDTO =  {
    type:'class',
    name:'LogLevelDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        displayName : { name: 'displayName', type: 'String', isRequired: true }, 
        level : { name: 'level', type: 'LOG_LEVEL', isRequired: true }
    }
}


//Mockup System for LogLevelDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelDTO';
var dto_name = 'LogLevelDTO';

function LogLevelDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelDTOData();
    }
}

function genLogLevelDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelDTODataInit;
exports.genData = genLogLevelDTOData;
exports.getData = getLogLevelDTOData;
exports.findData = findLogLevelDTOData;
exports.getListData = getLogLevelDTOListData;
exports.deleteData = deleteLogLevelDTOData;
exports.saveData = saveLogLevelDTOData;
exports.saveListData = saveLogLevelDTOListData;
exports.getAllData = getAllLogLevelDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelDTODataInit();
}

var overrideModule = '../overrides/LogLevelDTO';
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



