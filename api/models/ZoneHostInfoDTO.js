'use strict';

//Model Definition File for ZoneHostInfoDTO.js


'use strict';
/**
* Her bir zone bilgisini tutan veri
*/
exports.ZoneHostInfoDTO =  {
    type:'class',
    name:'ZoneHostInfoDTO',
    fields: {
        hostName : { name: 'hostName', type: 'String' }, 
        ipAddress : { name: 'ipAddress', type: 'String' }, 
        available : { name: 'available', type: 'Boolean' }, 
        active : { name: 'active', type: 'Boolean' }, 
        updateAt : { name: 'updateAt', type: 'String' }, 
        zoneHostId : { name: 'zoneHostId', type: 'Integer' }
    }
}


//Mockup System for ZoneHostInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneHostInfoDTO';
var dto_name = 'ZoneHostInfoDTO';

function ZoneHostInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneHostInfoDTOData();
    }
}

function genZoneHostInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneHostInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneHostInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneHostInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneHostInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneHostInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneHostInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneHostInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneHostInfoDTODataInit;
exports.genData = genZoneHostInfoDTOData;
exports.getData = getZoneHostInfoDTOData;
exports.findData = findZoneHostInfoDTOData;
exports.getListData = getZoneHostInfoDTOListData;
exports.deleteData = deleteZoneHostInfoDTOData;
exports.saveData = saveZoneHostInfoDTOData;
exports.saveListData = saveZoneHostInfoDTOListData;
exports.getAllData = getAllZoneHostInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneHostInfoDTODataInit();
}

var overrideModule = '../overrides/ZoneHostInfoDTO';
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



