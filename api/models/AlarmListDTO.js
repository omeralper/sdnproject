'use strict';

//Model Definition File for AlarmListDTO.js

//var AlarmDTO = require('./AlarmDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Alarm listesinin bulunduğu veri yapısı.
*/
exports.AlarmListDTO =  {
    type:'class',
    name:'AlarmListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AlarmDTO', isRequired: true }
    }
}


//Mockup System for AlarmListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmListDTO';
var dto_name = 'AlarmListDTO';

function AlarmListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmListDTOData();
    }
}

function genAlarmListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmListDTODataInit;
exports.genData = genAlarmListDTOData;
exports.getData = getAlarmListDTOData;
exports.findData = findAlarmListDTOData;
exports.getListData = getAlarmListDTOListData;
exports.deleteData = deleteAlarmListDTOData;
exports.saveData = saveAlarmListDTOData;
exports.saveListData = saveAlarmListDTOListData;
exports.getAllData = getAllAlarmListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmListDTODataInit();
}

var overrideModule = '../overrides/AlarmListDTO';
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



