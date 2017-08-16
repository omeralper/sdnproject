'use strict';

//Model Definition File for NetworkCounter.js


'use strict';
/**
* Ağ istatistiklerinin tutan temel veri yapısı.
*/
exports.NetworkCounter =  {
    type:'class',
    name:'NetworkCounter',
    fields: {
        sent : { name: 'sent', type: 'Long', isRequired: true }, 
        received : { name: 'received', type: 'Long', isRequired: true }
    }
}


//Mockup System for NetworkCounter.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkCounter';
var dto_name = 'NetworkCounter';

function NetworkCounterDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkCounterData();
    }
}

function genNetworkCounterData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkCounterData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkCounterListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkCounterData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkCounterData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkCounterData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkCounterListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkCounterData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkCounterDataInit;
exports.genData = genNetworkCounterData;
exports.getData = getNetworkCounterData;
exports.findData = findNetworkCounterData;
exports.getListData = getNetworkCounterListData;
exports.deleteData = deleteNetworkCounterData;
exports.saveData = saveNetworkCounterData;
exports.saveListData = saveNetworkCounterListData;
exports.getAllData = getAllNetworkCounterData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkCounterDataInit();
}

var overrideModule = '../overrides/NetworkCounter';
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



