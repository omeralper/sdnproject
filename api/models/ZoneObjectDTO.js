'use strict';

//Model Definition File for ZoneObjectDTO.js

//var ZoneInfoListDTO = require('./ZoneInfoListDTO');

'use strict';
/**
* Zone bilgilerinin tutuldugu yer
*/
exports.ZoneObjectDTO =  {
    type:'class',
    name:'ZoneObjectDTO',
    fields: {
        zoneInfoList : { name: 'zoneInfoList', type: 'ZoneInfoListDTO' }
    }
}


//Mockup System for ZoneObjectDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneObjectDTO';
var dto_name = 'ZoneObjectDTO';

function ZoneObjectDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneObjectDTOData();
    }
}

function genZoneObjectDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneObjectDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneObjectDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneObjectDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneObjectDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneObjectDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneObjectDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneObjectDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneObjectDTODataInit;
exports.genData = genZoneObjectDTOData;
exports.getData = getZoneObjectDTOData;
exports.findData = findZoneObjectDTOData;
exports.getListData = getZoneObjectDTOListData;
exports.deleteData = deleteZoneObjectDTOData;
exports.saveData = saveZoneObjectDTOData;
exports.saveListData = saveZoneObjectDTOListData;
exports.getAllData = getAllZoneObjectDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneObjectDTODataInit();
}

var overrideModule = '../overrides/ZoneObjectDTO';
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



