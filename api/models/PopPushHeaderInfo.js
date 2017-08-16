'use strict';

//Model Definition File for PopPushHeaderInfo.js


'use strict';
/**
* Girilen aksiyona göre başlık bilgisinde ekleme ve/veya çıkarma yapmak için kullanılır
*/
exports.PopPushHeaderInfo =  {
    type:'class',
    name:'PopPushHeaderInfo',
    fields: {
        pushValue : { name: 'pushValue', type: 'String' }, 
        popValue : { name: 'popValue', type: 'String' }, 
        pushToPacket : { name: 'pushToPacket', type: 'Boolean' }
    }
}


//Mockup System for PopPushHeaderInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPopPushHeaderInfo';
var dto_name = 'PopPushHeaderInfo';

function PopPushHeaderInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPopPushHeaderInfoData();
    }
}

function genPopPushHeaderInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPopPushHeaderInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPopPushHeaderInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findPopPushHeaderInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePopPushHeaderInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function savePopPushHeaderInfoData(data) {
    return mockup.saveData(data_key, data);
}

function savePopPushHeaderInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPopPushHeaderInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = PopPushHeaderInfoDataInit;
exports.genData = genPopPushHeaderInfoData;
exports.getData = getPopPushHeaderInfoData;
exports.findData = findPopPushHeaderInfoData;
exports.getListData = getPopPushHeaderInfoListData;
exports.deleteData = deletePopPushHeaderInfoData;
exports.saveData = savePopPushHeaderInfoData;
exports.saveListData = savePopPushHeaderInfoListData;
exports.getAllData = getAllPopPushHeaderInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    PopPushHeaderInfoDataInit();
}

var overrideModule = '../overrides/PopPushHeaderInfo';
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



