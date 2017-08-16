'use strict';

//Model Definition File for SwitchIndicatorListDTO.js

//var SwitchIndicatorDTO = require('./SwitchIndicatorDTO');

'use strict';
/**
* Anahtarlayıcı gösterge listesi veri transfer modeli.
*/
exports.SwitchIndicatorListDTO =  {
    type:'class',
    name:'SwitchIndicatorListDTO',
    fields: {
        list : { name: 'list', type: 'Array', subType: 'SwitchIndicatorDTO', isRequired: true }
    }
}


//Mockup System for SwitchIndicatorListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchIndicatorListDTO';
var dto_name = 'SwitchIndicatorListDTO';

function SwitchIndicatorListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchIndicatorListDTOData();
    }
}

function genSwitchIndicatorListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchIndicatorListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchIndicatorListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchIndicatorListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchIndicatorListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchIndicatorListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchIndicatorListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchIndicatorListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchIndicatorListDTODataInit;
exports.genData = genSwitchIndicatorListDTOData;
exports.getData = getSwitchIndicatorListDTOData;
exports.findData = findSwitchIndicatorListDTOData;
exports.getListData = getSwitchIndicatorListDTOListData;
exports.deleteData = deleteSwitchIndicatorListDTOData;
exports.saveData = saveSwitchIndicatorListDTOData;
exports.saveListData = saveSwitchIndicatorListDTOListData;
exports.getAllData = getAllSwitchIndicatorListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchIndicatorListDTODataInit();
}

var overrideModule = '../overrides/SwitchIndicatorListDTO';
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



