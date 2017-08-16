'use strict';

//Model Definition File for IpLocationListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var IpLocationDTO = require('./IpLocationDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Lokasyon tabanlı IP bilgilerini tutar
*/
exports.IpLocationListDTO =  {
    type:'class',
    name:'IpLocationListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'IpLocationDTO', isRequired: true }
    }
}


//Mockup System for IpLocationListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIpLocationListDTO';
var dto_name = 'IpLocationListDTO';

function IpLocationListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIpLocationListDTOData();
    }
}

function genIpLocationListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIpLocationListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIpLocationListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findIpLocationListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIpLocationListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIpLocationListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveIpLocationListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIpLocationListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = IpLocationListDTODataInit;
exports.genData = genIpLocationListDTOData;
exports.getData = getIpLocationListDTOData;
exports.findData = findIpLocationListDTOData;
exports.getListData = getIpLocationListDTOListData;
exports.deleteData = deleteIpLocationListDTOData;
exports.saveData = saveIpLocationListDTOData;
exports.saveListData = saveIpLocationListDTOListData;
exports.getAllData = getAllIpLocationListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    IpLocationListDTODataInit();
}

var overrideModule = '../overrides/IpLocationListDTO';
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



