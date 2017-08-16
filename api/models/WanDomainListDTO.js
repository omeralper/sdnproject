'use strict';

//Model Definition File for WanDomainListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var WanDomainDTO = require('./WanDomainDTO');

'use strict';
/**
* Alan tanımı listesinin bulunduğu veri yapısı.
*/
exports.WanDomainListDTO =  {
    type:'class',
    name:'WanDomainListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'WanDomainDTO', isRequired: true }
    }
}


//Mockup System for WanDomainListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainListDTO';
var dto_name = 'WanDomainListDTO';

function WanDomainListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainListDTOData();
    }
}

function genWanDomainListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainListDTODataInit;
exports.genData = genWanDomainListDTOData;
exports.getData = getWanDomainListDTOData;
exports.findData = findWanDomainListDTOData;
exports.getListData = getWanDomainListDTOListData;
exports.deleteData = deleteWanDomainListDTOData;
exports.saveData = saveWanDomainListDTOData;
exports.saveListData = saveWanDomainListDTOListData;
exports.getAllData = getAllWanDomainListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainListDTODataInit();
}

var overrideModule = '../overrides/WanDomainListDTO';
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



