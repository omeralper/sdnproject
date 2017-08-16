'use strict';

//Model Definition File for ZoneInfoDTO.js

//var ZoneHostInfoDTO = require('./ZoneHostInfoDTO');

'use strict';
/**
* 
*/
exports.ZoneInfoDTO =  {
    type:'class',
    name:'ZoneInfoDTO',
    fields: {
        zoneName : { name: 'zoneName', type: 'String' }, 
        zoneHostList : { name: 'zoneHostList', type: 'Array', subType: 'ZoneHostInfoDTO' }
    }
}


//Mockup System for ZoneInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoDTO';
var dto_name = 'ZoneInfoDTO';

function ZoneInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoDTOData();
    }
}

function genZoneInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoDTODataInit;
exports.genData = genZoneInfoDTOData;
exports.getData = getZoneInfoDTOData;
exports.findData = findZoneInfoDTOData;
exports.getListData = getZoneInfoDTOListData;
exports.deleteData = deleteZoneInfoDTOData;
exports.saveData = saveZoneInfoDTOData;
exports.saveListData = saveZoneInfoDTOListData;
exports.getAllData = getAllZoneInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoDTODataInit();
}

var overrideModule = '../overrides/ZoneInfoDTO';
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



