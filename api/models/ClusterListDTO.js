'use strict';

//Model Definition File for ClusterListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ClusterDTO = require('./ClusterDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Küme profillerinin bulundugu veri modeli.
*/
exports.ClusterListDTO =  {
    type:'class',
    name:'ClusterListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ClusterDTO' }
    }
}


//Mockup System for ClusterListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDClusterListDTO';
var dto_name = 'ClusterListDTO';

function ClusterListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genClusterListDTOData();
    }
}

function genClusterListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getClusterListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getClusterListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findClusterListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteClusterListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveClusterListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveClusterListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllClusterListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ClusterListDTODataInit;
exports.genData = genClusterListDTOData;
exports.getData = getClusterListDTOData;
exports.findData = findClusterListDTOData;
exports.getListData = getClusterListDTOListData;
exports.deleteData = deleteClusterListDTOData;
exports.saveData = saveClusterListDTOData;
exports.saveListData = saveClusterListDTOListData;
exports.getAllData = getAllClusterListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ClusterListDTODataInit();
}

var overrideModule = '../overrides/ClusterListDTO';
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



