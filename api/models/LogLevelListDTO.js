'use strict';

//Model Definition File for LogLevelListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var LogLevelDTO = require('./LogLevelDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Günlük verilerinin seviyelerinin listelerinin yer aldığı veri yapısıdır.
*/
exports.LogLevelListDTO =  {
    type:'class',
    name:'LogLevelListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'LogLevelDTO', isRequired: true }
    }
}


//Mockup System for LogLevelListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLogLevelListDTO';
var dto_name = 'LogLevelListDTO';

function LogLevelListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLogLevelListDTOData();
    }
}

function genLogLevelListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLogLevelListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLogLevelListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLogLevelListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLogLevelListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLogLevelListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLogLevelListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLogLevelListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LogLevelListDTODataInit;
exports.genData = genLogLevelListDTOData;
exports.getData = getLogLevelListDTOData;
exports.findData = findLogLevelListDTOData;
exports.getListData = getLogLevelListDTOListData;
exports.deleteData = deleteLogLevelListDTOData;
exports.saveData = saveLogLevelListDTOData;
exports.saveListData = saveLogLevelListDTOListData;
exports.getAllData = getAllLogLevelListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LogLevelListDTODataInit();
}

var overrideModule = '../overrides/LogLevelListDTO';
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



