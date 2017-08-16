'use strict';

//Model Definition File for ComputeHostListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ComputeHostInfoDTO = require('./ComputeHostInfoDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Alt Zone bilgilerini tutan dizi
*/
exports.ComputeHostListDTO =  {
    type:'class',
    name:'ComputeHostListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        computeHostList : { name: 'computeHostList', type: 'Array', subType: 'ComputeHostInfoDTO' }
    }
}


//Mockup System for ComputeHostListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostListDTO';
var dto_name = 'ComputeHostListDTO';

function ComputeHostListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostListDTOData();
    }
}

function genComputeHostListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostListDTODataInit;
exports.genData = genComputeHostListDTOData;
exports.getData = getComputeHostListDTOData;
exports.findData = findComputeHostListDTOData;
exports.getListData = getComputeHostListDTOListData;
exports.deleteData = deleteComputeHostListDTOData;
exports.saveData = saveComputeHostListDTOData;
exports.saveListData = saveComputeHostListDTOListData;
exports.getAllData = getAllComputeHostListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostListDTODataInit();
}

var overrideModule = '../overrides/ComputeHostListDTO';
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



