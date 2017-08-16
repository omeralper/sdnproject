'use strict';

//Model Definition File for SwitchIndicatorDTO.js

//var PortIndicatorListDTO = require('./PortIndicatorListDTO');

'use strict';
/**
* Anahtarlayıcı gösterge veri transfer modeli.
*/
exports.SwitchIndicatorDTO =  {
    type:'class',
    name:'SwitchIndicatorDTO',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        portList : { name: 'portList', type: 'PortIndicatorListDTO', isRequired: true }
    }
}


//Mockup System for SwitchIndicatorDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchIndicatorDTO';
var dto_name = 'SwitchIndicatorDTO';

function SwitchIndicatorDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchIndicatorDTOData();
    }
}

function genSwitchIndicatorDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchIndicatorDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchIndicatorDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchIndicatorDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchIndicatorDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchIndicatorDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchIndicatorDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchIndicatorDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchIndicatorDTODataInit;
exports.genData = genSwitchIndicatorDTOData;
exports.getData = getSwitchIndicatorDTOData;
exports.findData = findSwitchIndicatorDTOData;
exports.getListData = getSwitchIndicatorDTOListData;
exports.deleteData = deleteSwitchIndicatorDTOData;
exports.saveData = saveSwitchIndicatorDTOData;
exports.saveListData = saveSwitchIndicatorDTOListData;
exports.getAllData = getAllSwitchIndicatorDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchIndicatorDTODataInit();
}

var overrideModule = '../overrides/SwitchIndicatorDTO';
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



