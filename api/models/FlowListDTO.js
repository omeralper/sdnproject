'use strict';

//Model Definition File for FlowListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var FlowDTO = require('./FlowDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Akış listesinin bulunduğu veri yapısı.
*/
exports.FlowListDTO =  {
    type:'class',
    name:'FlowListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'FlowDTO', isRequired: true }
    }
}


//Mockup System for FlowListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowListDTO';
var dto_name = 'FlowListDTO';

function FlowListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowListDTOData();
    }
}

function genFlowListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowListDTODataInit;
exports.genData = genFlowListDTOData;
exports.getData = getFlowListDTOData;
exports.findData = findFlowListDTOData;
exports.getListData = getFlowListDTOListData;
exports.deleteData = deleteFlowListDTOData;
exports.saveData = saveFlowListDTOData;
exports.saveListData = saveFlowListDTOListData;
exports.getAllData = getAllFlowListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowListDTODataInit();
}

var overrideModule = '../overrides/FlowListDTO';
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



