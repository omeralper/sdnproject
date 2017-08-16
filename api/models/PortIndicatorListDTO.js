'use strict';

//Model Definition File for PortIndicatorListDTO.js


'use strict';
/**
* Port gösterge liste veri transfer modeli.
*/
exports.PortIndicatorListDTO =  {
    type:'class',
    name:'PortIndicatorListDTO',
    fields: {
        list : { name: 'list', type: 'Array', subType: 'integer', isRequired: true }
    }
}


//Mockup System for PortIndicatorListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortIndicatorListDTO';
var dto_name = 'PortIndicatorListDTO';

function PortIndicatorListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortIndicatorListDTOData();
    }
}

function genPortIndicatorListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortIndicatorListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortIndicatorListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortIndicatorListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortIndicatorListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortIndicatorListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function savePortIndicatorListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortIndicatorListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = PortIndicatorListDTODataInit;
exports.genData = genPortIndicatorListDTOData;
exports.getData = getPortIndicatorListDTOData;
exports.findData = findPortIndicatorListDTOData;
exports.getListData = getPortIndicatorListDTOListData;
exports.deleteData = deletePortIndicatorListDTOData;
exports.saveData = savePortIndicatorListDTOData;
exports.saveListData = savePortIndicatorListDTOListData;
exports.getAllData = getAllPortIndicatorListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortIndicatorListDTODataInit();
}

var overrideModule = '../overrides/PortIndicatorListDTO';
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



