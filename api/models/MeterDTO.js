'use strict';

//Model Definition File for MeterDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Sanal ağdaki  ya da fiziksel ağdaki meterların bilgisini veren veri yapısı.
*/
exports.MeterDTO =  {
    type:'class',
    name:'MeterDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        deviceId : { name: 'deviceId', type: 'String' }, 
        portNumber : { name: 'portNumber', type: 'Long' }
    }
}


//Mockup System for MeterDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterDTO';
var dto_name = 'MeterDTO';

function MeterDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterDTOData();
    }
}

function genMeterDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterDTODataInit;
exports.genData = genMeterDTOData;
exports.getData = getMeterDTOData;
exports.findData = findMeterDTOData;
exports.getListData = getMeterDTOListData;
exports.deleteData = deleteMeterDTOData;
exports.saveData = saveMeterDTOData;
exports.saveListData = saveMeterDTOListData;
exports.getAllData = getAllMeterDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterDTODataInit();
}

var overrideModule = '../overrides/MeterDTO';
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



