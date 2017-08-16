'use strict';

//Model Definition File for SupportInfo.js


'use strict';
/**
* Cihazlar tarafından desteklenen protokollerin belirtildiği veri yapısı.
*/
exports.SupportInfo =  {
    type:'class',
    name:'SupportInfo',
    fields: {
        openFlow : { name: 'openFlow', type: 'String' }, 
        netFlow : { name: 'netFlow', type: 'String' }, 
        sFlow : { name: 'sFlow', type: 'String' }, 
        jFlow : { name: 'jFlow', type: 'String' }, 
        netStream : { name: 'netStream', type: 'String' }, 
        rFlow : { name: 'rFlow', type: 'String' }, 
        cFlow : { name: 'cFlow', type: 'String' }
    }
}


//Mockup System for SupportInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSupportInfo';
var dto_name = 'SupportInfo';

function SupportInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSupportInfoData();
    }
}

function genSupportInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSupportInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSupportInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findSupportInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSupportInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSupportInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveSupportInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSupportInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = SupportInfoDataInit;
exports.genData = genSupportInfoData;
exports.getData = getSupportInfoData;
exports.findData = findSupportInfoData;
exports.getListData = getSupportInfoListData;
exports.deleteData = deleteSupportInfoData;
exports.saveData = saveSupportInfoData;
exports.saveListData = saveSupportInfoListData;
exports.getAllData = getAllSupportInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    SupportInfoDataInit();
}

var overrideModule = '../overrides/SupportInfo';
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



