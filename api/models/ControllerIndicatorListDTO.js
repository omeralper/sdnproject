'use strict';

//Model Definition File for ControllerIndicatorListDTO.js

//var ControllerIndicatorDTO = require('./ControllerIndicatorDTO');

'use strict';
/**
* Kontrolcü gösterge listesi veri transfer modeli.
*/
exports.ControllerIndicatorListDTO =  {
    type:'class',
    name:'ControllerIndicatorListDTO',
    fields: {
        list : { name: 'list', type: 'Array', subType: 'ControllerIndicatorDTO', isRequired: true }
    }
}


//Mockup System for ControllerIndicatorListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerIndicatorListDTO';
var dto_name = 'ControllerIndicatorListDTO';

function ControllerIndicatorListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerIndicatorListDTOData();
    }
}

function genControllerIndicatorListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerIndicatorListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerIndicatorListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerIndicatorListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerIndicatorListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerIndicatorListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerIndicatorListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerIndicatorListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerIndicatorListDTODataInit;
exports.genData = genControllerIndicatorListDTOData;
exports.getData = getControllerIndicatorListDTOData;
exports.findData = findControllerIndicatorListDTOData;
exports.getListData = getControllerIndicatorListDTOListData;
exports.deleteData = deleteControllerIndicatorListDTOData;
exports.saveData = saveControllerIndicatorListDTOData;
exports.saveListData = saveControllerIndicatorListDTOListData;
exports.getAllData = getAllControllerIndicatorListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerIndicatorListDTODataInit();
}

var overrideModule = '../overrides/ControllerIndicatorListDTO';
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



