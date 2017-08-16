'use strict';

//Model Definition File for BandwidthInfo.js


'use strict';
/**
* Bant genişliği kullanım istatistiklerinin tutulduğu veri yapısı. Belli aralıklarla bu verilerin güncellendiği varsayılmaktadır.
*/
exports.BandwidthInfo =  {
    type:'class',
    name:'BandwidthInfo',
    fields: {
        current : { name: 'current', type: 'Integer', isRequired: true }, 
        min : { name: 'min', type: 'Integer', isRequired: true }, 
        max : { name: 'max', type: 'Integer', isRequired: true }
    }
}


//Mockup System for BandwidthInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDBandwidthInfo';
var dto_name = 'BandwidthInfo';

function BandwidthInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genBandwidthInfoData();
    }
}

function genBandwidthInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getBandwidthInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getBandwidthInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findBandwidthInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteBandwidthInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveBandwidthInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveBandwidthInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllBandwidthInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = BandwidthInfoDataInit;
exports.genData = genBandwidthInfoData;
exports.getData = getBandwidthInfoData;
exports.findData = findBandwidthInfoData;
exports.getListData = getBandwidthInfoListData;
exports.deleteData = deleteBandwidthInfoData;
exports.saveData = saveBandwidthInfoData;
exports.saveListData = saveBandwidthInfoListData;
exports.getAllData = getAllBandwidthInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    BandwidthInfoDataInit();
}

var overrideModule = '../overrides/BandwidthInfo';
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



