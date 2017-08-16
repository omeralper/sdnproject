'use strict';

//Model Definition File for CounterProperties.js


'use strict';
/**
* id numarası ile belirtilen gösterge sayaç ise özellik belirten verilerine (metadata) ait alanları içerir.
*/
exports.CounterProperties =  {
    type:'class',
    name:'CounterProperties',
    fields: {
        speedEnabled : { name: 'speedEnabled', type: 'Boolean' }, 
        accerelationEnabled : { name: 'accerelationEnabled', type: 'Boolean' }
    }
}


//Mockup System for CounterProperties.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCounterProperties';
var dto_name = 'CounterProperties';

function CounterPropertiesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCounterPropertiesData();
    }
}

function genCounterPropertiesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCounterPropertiesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCounterPropertiesListData(options) {
    return mockup.getListData(data_key, options);
}

function findCounterPropertiesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCounterPropertiesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCounterPropertiesData(data) {
    return mockup.saveData(data_key, data);
}

function saveCounterPropertiesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCounterPropertiesData() {
    return mockup.getAllData(data_key);
}

exports.init = CounterPropertiesDataInit;
exports.genData = genCounterPropertiesData;
exports.getData = getCounterPropertiesData;
exports.findData = findCounterPropertiesData;
exports.getListData = getCounterPropertiesListData;
exports.deleteData = deleteCounterPropertiesData;
exports.saveData = saveCounterPropertiesData;
exports.saveListData = saveCounterPropertiesListData;
exports.getAllData = getAllCounterPropertiesData;

function autoInit(){
    mockup.initDatabase(data_key);
    CounterPropertiesDataInit();
}

var overrideModule = '../overrides/CounterProperties';
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



