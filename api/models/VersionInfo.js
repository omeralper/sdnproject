'use strict';

//Model Definition File for VersionInfo.js


'use strict';
/**
* Versiyon bilgilerini tutar
*/
exports.VersionInfo =  {
    type:'class',
    name:'VersionInfo',
    fields: {
        name : { name: 'name', type: 'String', isRequired: true }, 
        version : { name: 'version', type: 'String', isRequired: true }, 
        buildDate : { name: 'buildDate', type: 'Date', isRequired: true }, 
        startUpDate : { name: 'startUpDate', type: 'Date', isRequired: true }
    }
}


//Mockup System for VersionInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVersionInfo';
var dto_name = 'VersionInfo';

function VersionInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVersionInfoData();
    }
}

function genVersionInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVersionInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVersionInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findVersionInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVersionInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVersionInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveVersionInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVersionInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = VersionInfoDataInit;
exports.genData = genVersionInfoData;
exports.getData = getVersionInfoData;
exports.findData = findVersionInfoData;
exports.getListData = getVersionInfoListData;
exports.deleteData = deleteVersionInfoData;
exports.saveData = saveVersionInfoData;
exports.saveListData = saveVersionInfoListData;
exports.getAllData = getAllVersionInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    VersionInfoDataInit();
}

var overrideModule = '../overrides/VersionInfo';
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



