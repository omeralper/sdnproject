'use strict';

//Model Definition File for CounterValues.js


'use strict';
/**
* id numarası ile belirtilen gösterge sayaç ise değer içeren verilerine ait alanları içerir.
*/
exports.CounterValues =  {
    type:'class',
    name:'CounterValues',
    fields: {
        value : { name: 'value', type: 'Long' }, 
        speed : { name: 'speed', type: 'Double' }, 
        accerelation : { name: 'accerelation', type: 'Double' }
    }
}


//Mockup System for CounterValues.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCounterValues';
var dto_name = 'CounterValues';

function CounterValuesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCounterValuesData();
    }
}

function genCounterValuesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCounterValuesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCounterValuesListData(options) {
    return mockup.getListData(data_key, options);
}

function findCounterValuesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCounterValuesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCounterValuesData(data) {
    return mockup.saveData(data_key, data);
}

function saveCounterValuesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCounterValuesData() {
    return mockup.getAllData(data_key);
}

exports.init = CounterValuesDataInit;
exports.genData = genCounterValuesData;
exports.getData = getCounterValuesData;
exports.findData = findCounterValuesData;
exports.getListData = getCounterValuesListData;
exports.deleteData = deleteCounterValuesData;
exports.saveData = saveCounterValuesData;
exports.saveListData = saveCounterValuesListData;
exports.getAllData = getAllCounterValuesData;

function autoInit(){
    mockup.initDatabase(data_key);
    CounterValuesDataInit();
}

var overrideModule = '../overrides/CounterValues';
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



