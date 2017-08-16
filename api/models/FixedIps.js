'use strict';

//Model Definition File for FixedIps.js

//var FixedIp = require('./FixedIp');

'use strict';
/**
* FixedIps listesini tutan obje
*/
exports.FixedIps =  {
    type:'class',
    name:'FixedIps',
    fields: {
        fixedIp : { name: 'fixedIp', type: 'Array', subType: 'FixedIp' }
    }
}


//Mockup System for FixedIps.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFixedIps';
var dto_name = 'FixedIps';

function FixedIpsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFixedIpsData();
    }
}

function genFixedIpsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFixedIpsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFixedIpsListData(options) {
    return mockup.getListData(data_key, options);
}

function findFixedIpsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFixedIpsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFixedIpsData(data) {
    return mockup.saveData(data_key, data);
}

function saveFixedIpsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFixedIpsData() {
    return mockup.getAllData(data_key);
}

exports.init = FixedIpsDataInit;
exports.genData = genFixedIpsData;
exports.getData = getFixedIpsData;
exports.findData = findFixedIpsData;
exports.getListData = getFixedIpsListData;
exports.deleteData = deleteFixedIpsData;
exports.saveData = saveFixedIpsData;
exports.saveListData = saveFixedIpsListData;
exports.getAllData = getAllFixedIpsData;

function autoInit(){
    mockup.initDatabase(data_key);
    FixedIpsDataInit();
}

var overrideModule = '../overrides/FixedIps';
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



