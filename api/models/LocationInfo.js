'use strict';

//Model Definition File for LocationInfo.js


'use strict';
/**
* Lokasyon bilgilerinin tutulduğu veri yapısı.
*/
exports.LocationInfo =  {
    type:'class',
    name:'LocationInfo',
    fields: {
        x : { name: 'x', type: 'String', isRequired: true }, 
        y : { name: 'y', type: 'String', isRequired: true }
    }
}


//Mockup System for LocationInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLocationInfo';
var dto_name = 'LocationInfo';

function LocationInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLocationInfoData();
    }
}

function genLocationInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLocationInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLocationInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findLocationInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLocationInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLocationInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveLocationInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLocationInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = LocationInfoDataInit;
exports.genData = genLocationInfoData;
exports.getData = getLocationInfoData;
exports.findData = findLocationInfoData;
exports.getListData = getLocationInfoListData;
exports.deleteData = deleteLocationInfoData;
exports.saveData = saveLocationInfoData;
exports.saveListData = saveLocationInfoListData;
exports.getAllData = getAllLocationInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    LocationInfoDataInit();
}

var overrideModule = '../overrides/LocationInfo';
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



