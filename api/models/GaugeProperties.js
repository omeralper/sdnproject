'use strict';

//Model Definition File for GaugeProperties.js

//var METHOD_TYPE = require('./METHOD_TYPE');

'use strict';
/**
* id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
exports.GaugeProperties =  {
    type:'class',
    name:'GaugeProperties',
    fields: {
        methodType : { name: 'methodType', type: 'METHOD_TYPE' }, 
        loLimit : { name: 'loLimit', type: 'Double' }, 
        hiLimit : { name: 'hiLimit', type: 'Double' }, 
        loAlarm : { name: 'loAlarm', type: 'Double' }, 
        hiAlarm : { name: 'hiAlarm', type: 'Double' }, 
        lowIsBad : { name: 'lowIsBad', type: 'Boolean' }
    }
}


//Mockup System for GaugeProperties.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGaugeProperties';
var dto_name = 'GaugeProperties';

function GaugePropertiesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGaugePropertiesData();
    }
}

function genGaugePropertiesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGaugePropertiesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGaugePropertiesListData(options) {
    return mockup.getListData(data_key, options);
}

function findGaugePropertiesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGaugePropertiesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGaugePropertiesData(data) {
    return mockup.saveData(data_key, data);
}

function saveGaugePropertiesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGaugePropertiesData() {
    return mockup.getAllData(data_key);
}

exports.init = GaugePropertiesDataInit;
exports.genData = genGaugePropertiesData;
exports.getData = getGaugePropertiesData;
exports.findData = findGaugePropertiesData;
exports.getListData = getGaugePropertiesListData;
exports.deleteData = deleteGaugePropertiesData;
exports.saveData = saveGaugePropertiesData;
exports.saveListData = saveGaugePropertiesListData;
exports.getAllData = getAllGaugePropertiesData;

function autoInit(){
    mockup.initDatabase(data_key);
    GaugePropertiesDataInit();
}

var overrideModule = '../overrides/GaugeProperties';
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



