'use strict';

//Model Definition File for MeterListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MeterDTO = require('./MeterDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sanal ağdaki  ya da fiziksel ağdaki meterları listeleme talebi listesinin bulunduğu veri yapısı.
*/
exports.MeterListDTO =  {
    type:'class',
    name:'MeterListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MeterDTO', isRequired: true }, 
        mvtnNetworkId : { name: 'mvtnNetworkId', type: 'String' }
    }
}


//Mockup System for MeterListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterListDTO';
var dto_name = 'MeterListDTO';

function MeterListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterListDTOData();
    }
}

function genMeterListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterListDTODataInit;
exports.genData = genMeterListDTOData;
exports.getData = getMeterListDTOData;
exports.findData = findMeterListDTOData;
exports.getListData = getMeterListDTOListData;
exports.deleteData = deleteMeterListDTOData;
exports.saveData = saveMeterListDTOData;
exports.saveListData = saveMeterListDTOListData;
exports.getAllData = getAllMeterListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterListDTODataInit();
}

var overrideModule = '../overrides/MeterListDTO';
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



