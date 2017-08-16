'use strict';

//Model Definition File for OvsdbPortNumberDTO.js


'use strict';
/**
* Port tanımını tutar
*/
exports.OvsdbPortNumberDTO =  {
    type:'class',
    name:'OvsdbPortNumberDTO',
    fields: {
        number : { name: 'number', type: 'Long', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        hasName : { name: 'hasName', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for OvsdbPortNumberDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbPortNumberDTO';
var dto_name = 'OvsdbPortNumberDTO';

function OvsdbPortNumberDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbPortNumberDTOData();
    }
}

function genOvsdbPortNumberDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbPortNumberDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbPortNumberDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbPortNumberDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbPortNumberDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbPortNumberDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbPortNumberDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbPortNumberDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbPortNumberDTODataInit;
exports.genData = genOvsdbPortNumberDTOData;
exports.getData = getOvsdbPortNumberDTOData;
exports.findData = findOvsdbPortNumberDTOData;
exports.getListData = getOvsdbPortNumberDTOListData;
exports.deleteData = deleteOvsdbPortNumberDTOData;
exports.saveData = saveOvsdbPortNumberDTOData;
exports.saveListData = saveOvsdbPortNumberDTOListData;
exports.getAllData = getAllOvsdbPortNumberDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbPortNumberDTODataInit();
}

var overrideModule = '../overrides/OvsdbPortNumberDTO';
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



