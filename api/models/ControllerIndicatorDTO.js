'use strict';

//Model Definition File for ControllerIndicatorDTO.js

//var SwitchIndicatorListDTO = require('./SwitchIndicatorListDTO');

'use strict';
/**
* Kontrolcü gösterge veri transfer modeli.
*/
exports.ControllerIndicatorDTO =  {
    type:'class',
    name:'ControllerIndicatorDTO',
    fields: {
        address : { name: 'address', type: 'String', isRequired: true }, 
        switchList : { name: 'switchList', type: 'SwitchIndicatorListDTO', isRequired: true }
    }
}


//Mockup System for ControllerIndicatorDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerIndicatorDTO';
var dto_name = 'ControllerIndicatorDTO';

function ControllerIndicatorDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerIndicatorDTOData();
    }
}

function genControllerIndicatorDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerIndicatorDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerIndicatorDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerIndicatorDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerIndicatorDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerIndicatorDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerIndicatorDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerIndicatorDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerIndicatorDTODataInit;
exports.genData = genControllerIndicatorDTOData;
exports.getData = getControllerIndicatorDTOData;
exports.findData = findControllerIndicatorDTOData;
exports.getListData = getControllerIndicatorDTOListData;
exports.deleteData = deleteControllerIndicatorDTOData;
exports.saveData = saveControllerIndicatorDTOData;
exports.saveListData = saveControllerIndicatorDTOListData;
exports.getAllData = getAllControllerIndicatorDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerIndicatorDTODataInit();
}

var overrideModule = '../overrides/ControllerIndicatorDTO';
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



