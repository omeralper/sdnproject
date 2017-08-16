'use strict';

//Model Definition File for AlarmNotificationListDTO.js

//var AlarmNotificationDTO = require('./AlarmNotificationDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Alarm bildirim konfigürasyon listesinin bulunduğu veri yapısı.
*/
exports.AlarmNotificationListDTO =  {
    type:'class',
    name:'AlarmNotificationListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AlarmNotificationDTO', isRequired: true }
    }
}


//Mockup System for AlarmNotificationListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAlarmNotificationListDTO';
var dto_name = 'AlarmNotificationListDTO';

function AlarmNotificationListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAlarmNotificationListDTOData();
    }
}

function genAlarmNotificationListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAlarmNotificationListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAlarmNotificationListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAlarmNotificationListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAlarmNotificationListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAlarmNotificationListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAlarmNotificationListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAlarmNotificationListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AlarmNotificationListDTODataInit;
exports.genData = genAlarmNotificationListDTOData;
exports.getData = getAlarmNotificationListDTOData;
exports.findData = findAlarmNotificationListDTOData;
exports.getListData = getAlarmNotificationListDTOListData;
exports.deleteData = deleteAlarmNotificationListDTOData;
exports.saveData = saveAlarmNotificationListDTOData;
exports.saveListData = saveAlarmNotificationListDTOListData;
exports.getAllData = getAllAlarmNotificationListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AlarmNotificationListDTODataInit();
}

var overrideModule = '../overrides/AlarmNotificationListDTO';
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



