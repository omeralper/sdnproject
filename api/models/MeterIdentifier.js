'use strict';

//Model Definition File for MeterIdentifier.js


'use strict';
/**
* OF meter kimliği
*/
exports.MeterIdentifier =  {
    type:'class',
    name:'MeterIdentifier',
    fields: {
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }, 
        meterId : { name: 'meterId', type: 'Long', isRequired: true }
    }
}


//Mockup System for MeterIdentifier.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterIdentifier';
var dto_name = 'MeterIdentifier';

function MeterIdentifierDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterIdentifierData();
    }
}

function genMeterIdentifierData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterIdentifierData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterIdentifierListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterIdentifierData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterIdentifierData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterIdentifierData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterIdentifierListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterIdentifierData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterIdentifierDataInit;
exports.genData = genMeterIdentifierData;
exports.getData = getMeterIdentifierData;
exports.findData = findMeterIdentifierData;
exports.getListData = getMeterIdentifierListData;
exports.deleteData = deleteMeterIdentifierData;
exports.saveData = saveMeterIdentifierData;
exports.saveListData = saveMeterIdentifierListData;
exports.getAllData = getAllMeterIdentifierData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterIdentifierDataInit();
}

var overrideModule = '../overrides/MeterIdentifier';
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



