'use strict';

//Model Definition File for MeterRequestDTO.js

//var BaseDTO = require('./BaseDTO');
//var METER_TYPE = require('./METER_TYPE');

'use strict';
/**
* Sanal ağdaki  ya da fiziksel ağdaki meterları listeleme talebini tanımlayan veri modeli.
*/
exports.MeterRequestDTO =  {
    type:'class',
    name:'MeterRequestDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        meterType : { name: 'meterType', type: 'METER_TYPE' }
    }
}


//Mockup System for MeterRequestDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterRequestDTO';
var dto_name = 'MeterRequestDTO';

function MeterRequestDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterRequestDTOData();
    }
}

function genMeterRequestDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterRequestDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterRequestDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterRequestDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterRequestDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterRequestDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterRequestDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterRequestDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterRequestDTODataInit;
exports.genData = genMeterRequestDTOData;
exports.getData = getMeterRequestDTOData;
exports.findData = findMeterRequestDTOData;
exports.getListData = getMeterRequestDTOListData;
exports.deleteData = deleteMeterRequestDTOData;
exports.saveData = saveMeterRequestDTOData;
exports.saveListData = saveMeterRequestDTOListData;
exports.getAllData = getAllMeterRequestDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterRequestDTODataInit();
}

var overrideModule = '../overrides/MeterRequestDTO';
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



