'use strict';

//Model Definition File for WanAlarmInfoDTO.js

//var BaseDTO = require('./BaseDTO');
//var map = require('./map');

'use strict';
/**
* Local topolojilerin alarm bilgilerinin saklandığı veri modeli.
*/
exports.WanAlarmInfoDTO =  {
    type:'class',
    name:'WanAlarmInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        domainId : { name: 'domainId', type: 'Integer' }, 
        time : { name: 'time', type: 'Date' }, 
        maxSeverity : { name: 'maxSeverity', type: 'String' }, 
        alarmCounts : { name: 'alarmCounts', type: 'Integer' }, 
        activeAlarmCountMap : { name: 'activeAlarmCountMap', type: 'Map', subType: 'integer' }, 
        activeEventCountMap : { name: 'activeEventCountMap', type: 'Map', subType: 'integer' }
    }
}


//Mockup System for WanAlarmInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoDTO';
var dto_name = 'WanAlarmInfoDTO';

function WanAlarmInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoDTOData();
    }
}

function genWanAlarmInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoDTODataInit;
exports.genData = genWanAlarmInfoDTOData;
exports.getData = getWanAlarmInfoDTOData;
exports.findData = findWanAlarmInfoDTOData;
exports.getListData = getWanAlarmInfoDTOListData;
exports.deleteData = deleteWanAlarmInfoDTOData;
exports.saveData = saveWanAlarmInfoDTOData;
exports.saveListData = saveWanAlarmInfoDTOListData;
exports.getAllData = getAllWanAlarmInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoDTODataInit();
}

var overrideModule = '../overrides/WanAlarmInfoDTO';
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



