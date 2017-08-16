'use strict';

//Model Definition File for FixedIp.js


'use strict';
/**
* VNFR icin istenilen fixed ip bilgileri
*/
exports.FixedIp =  {
    type:'class',
    name:'FixedIp',
    fields: {
        ipAddress : { name: 'ipAddress', type: 'String' }, 
        subnetId : { name: 'subnetId', type: 'String' }
    }
}


//Mockup System for FixedIp.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFixedIp';
var dto_name = 'FixedIp';

function FixedIpDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFixedIpData();
    }
}

function genFixedIpData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFixedIpData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFixedIpListData(options) {
    return mockup.getListData(data_key, options);
}

function findFixedIpData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFixedIpData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFixedIpData(data) {
    return mockup.saveData(data_key, data);
}

function saveFixedIpListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFixedIpData() {
    return mockup.getAllData(data_key);
}

exports.init = FixedIpDataInit;
exports.genData = genFixedIpData;
exports.getData = getFixedIpData;
exports.findData = findFixedIpData;
exports.getListData = getFixedIpListData;
exports.deleteData = deleteFixedIpData;
exports.saveData = saveFixedIpData;
exports.saveListData = saveFixedIpListData;
exports.getAllData = getAllFixedIpData;

function autoInit(){
    mockup.initDatabase(data_key);
    FixedIpDataInit();
}

var overrideModule = '../overrides/FixedIp';
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



