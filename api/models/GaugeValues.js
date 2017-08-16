'use strict';

//Model Definition File for GaugeValues.js


'use strict';
/**
* id numarası ile belirtilen gösterge ölçer ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
exports.GaugeValues =  {
    type:'class',
    name:'GaugeValues',
    fields: {
        value : { name: 'value', type: 'Double' }, 
        inAlarm : { name: 'inAlarm', type: 'Boolean' }
    }
}


//Mockup System for GaugeValues.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGaugeValues';
var dto_name = 'GaugeValues';

function GaugeValuesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGaugeValuesData();
    }
}

function genGaugeValuesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGaugeValuesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGaugeValuesListData(options) {
    return mockup.getListData(data_key, options);
}

function findGaugeValuesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGaugeValuesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGaugeValuesData(data) {
    return mockup.saveData(data_key, data);
}

function saveGaugeValuesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGaugeValuesData() {
    return mockup.getAllData(data_key);
}

exports.init = GaugeValuesDataInit;
exports.genData = genGaugeValuesData;
exports.getData = getGaugeValuesData;
exports.findData = findGaugeValuesData;
exports.getListData = getGaugeValuesListData;
exports.deleteData = deleteGaugeValuesData;
exports.saveData = saveGaugeValuesData;
exports.saveListData = saveGaugeValuesListData;
exports.getAllData = getAllGaugeValuesData;

function autoInit(){
    mockup.initDatabase(data_key);
    GaugeValuesDataInit();
}

var overrideModule = '../overrides/GaugeValues';
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



