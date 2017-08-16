'use strict';

//Model Definition File for SwitchListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı listesinin bulunduğu veri yapısı.
*/
exports.SwitchListDTO =  {
    type:'class',
    name:'SwitchListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SwitchDTO', isRequired: true }
    }
}


//Mockup System for SwitchListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchListDTO';
var dto_name = 'SwitchListDTO';

function SwitchListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchListDTOData();
    }
}

function genSwitchListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchListDTODataInit;
exports.genData = genSwitchListDTOData;
exports.getData = getSwitchListDTOData;
exports.findData = findSwitchListDTOData;
exports.getListData = getSwitchListDTOListData;
exports.deleteData = deleteSwitchListDTOData;
exports.saveData = saveSwitchListDTOData;
exports.saveListData = saveSwitchListDTOListData;
exports.getAllData = getAllSwitchListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchListDTODataInit();
}

var overrideModule = '../overrides/SwitchListDTO';
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



