'use strict';

//Model Definition File for SummaryIndicatorNumbersDTO.js


'use strict';

exports.SummaryIndicatorNumbersDTO =  {
    type:'class',
    name:'SummaryIndicatorNumbersDTO',
    fields: {
        controllerNumber : { name: 'controllerNumber', type: 'Integer', isRequired: true }, 
        switchNumber : { name: 'switchNumber', type: 'Integer', isRequired: true }, 
        linkNumber : { name: 'linkNumber', type: 'Integer', isRequired: true }, 
        hostNumber : { name: 'hostNumber', type: 'Integer', isRequired: true }, 
        mvtnNumber : { name: 'mvtnNumber', type: 'Integer', isRequired: true }
    }
}


//Mockup System for SummaryIndicatorNumbersDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSummaryIndicatorNumbersDTO';
var dto_name = 'SummaryIndicatorNumbersDTO';

function SummaryIndicatorNumbersDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSummaryIndicatorNumbersDTOData();
    }
}

function genSummaryIndicatorNumbersDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSummaryIndicatorNumbersDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSummaryIndicatorNumbersDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSummaryIndicatorNumbersDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSummaryIndicatorNumbersDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSummaryIndicatorNumbersDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSummaryIndicatorNumbersDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSummaryIndicatorNumbersDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SummaryIndicatorNumbersDTODataInit;
exports.genData = genSummaryIndicatorNumbersDTOData;
exports.getData = getSummaryIndicatorNumbersDTOData;
exports.findData = findSummaryIndicatorNumbersDTOData;
exports.getListData = getSummaryIndicatorNumbersDTOListData;
exports.deleteData = deleteSummaryIndicatorNumbersDTOData;
exports.saveData = saveSummaryIndicatorNumbersDTOData;
exports.saveListData = saveSummaryIndicatorNumbersDTOListData;
exports.getAllData = getAllSummaryIndicatorNumbersDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SummaryIndicatorNumbersDTODataInit();
}

var overrideModule = '../overrides/SummaryIndicatorNumbersDTO';
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



