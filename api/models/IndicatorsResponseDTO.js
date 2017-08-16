'use strict';

//Model Definition File for IndicatorsResponseDTO.js

//var ControllerIndicatorListDTO = require('./ControllerIndicatorListDTO');
//var SummaryIndicatorNumbersDTO = require('./SummaryIndicatorNumbersDTO');

'use strict';
/**
* Göstergeler yanıt veri transfer modeli.
*/
exports.IndicatorsResponseDTO =  {
    type:'class',
    name:'IndicatorsResponseDTO',
    fields: {
        summary : { name: 'summary', type: 'SummaryIndicatorNumbersDTO', isRequired: true }, 
        controllerList : { name: 'controllerList', type: 'ControllerIndicatorListDTO', isRequired: true }
    }
}


//Mockup System for IndicatorsResponseDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIndicatorsResponseDTO';
var dto_name = 'IndicatorsResponseDTO';

function IndicatorsResponseDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIndicatorsResponseDTOData();
    }
}

function genIndicatorsResponseDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIndicatorsResponseDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIndicatorsResponseDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findIndicatorsResponseDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIndicatorsResponseDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIndicatorsResponseDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveIndicatorsResponseDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIndicatorsResponseDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = IndicatorsResponseDTODataInit;
exports.genData = genIndicatorsResponseDTOData;
exports.getData = getIndicatorsResponseDTOData;
exports.findData = findIndicatorsResponseDTOData;
exports.getListData = getIndicatorsResponseDTOListData;
exports.deleteData = deleteIndicatorsResponseDTOData;
exports.saveData = saveIndicatorsResponseDTOData;
exports.saveListData = saveIndicatorsResponseDTOListData;
exports.getAllData = getAllIndicatorsResponseDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    IndicatorsResponseDTODataInit();
}

var overrideModule = '../overrides/IndicatorsResponseDTO';
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



