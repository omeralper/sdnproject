'use strict';

//Model Definition File for SendReceiveRates.js


'use strict';
/**
* Alma/gönderme trafik hızı temel veri yapısı.
*/
exports.SendReceiveRates =  {
    type:'class',
    name:'SendReceiveRates',
    fields: {
        sent : { name: 'sent', type: 'Long', isRequired: true }, 
        received : { name: 'received', type: 'Long', isRequired: true }
    }
}


//Mockup System for SendReceiveRates.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSendReceiveRates';
var dto_name = 'SendReceiveRates';

function SendReceiveRatesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSendReceiveRatesData();
    }
}

function genSendReceiveRatesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSendReceiveRatesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSendReceiveRatesListData(options) {
    return mockup.getListData(data_key, options);
}

function findSendReceiveRatesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSendReceiveRatesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSendReceiveRatesData(data) {
    return mockup.saveData(data_key, data);
}

function saveSendReceiveRatesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSendReceiveRatesData() {
    return mockup.getAllData(data_key);
}

exports.init = SendReceiveRatesDataInit;
exports.genData = genSendReceiveRatesData;
exports.getData = getSendReceiveRatesData;
exports.findData = findSendReceiveRatesData;
exports.getListData = getSendReceiveRatesListData;
exports.deleteData = deleteSendReceiveRatesData;
exports.saveData = saveSendReceiveRatesData;
exports.saveListData = saveSendReceiveRatesListData;
exports.getAllData = getAllSendReceiveRatesData;

function autoInit(){
    mockup.initDatabase(data_key);
    SendReceiveRatesDataInit();
}

var overrideModule = '../overrides/SendReceiveRates';
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



