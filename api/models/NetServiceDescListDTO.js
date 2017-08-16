'use strict';

//Model Definition File for NetServiceDescListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NetServiceDescDTO = require('./NetServiceDescDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Ağ servis tanımı listesinin bulunduğu veri yapısı.
*/
exports.NetServiceDescListDTO =  {
    type:'class',
    name:'NetServiceDescListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NetServiceDescDTO', isRequired: true }
    }
}


//Mockup System for NetServiceDescListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescListDTO';
var dto_name = 'NetServiceDescListDTO';

function NetServiceDescListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescListDTOData();
    }
}

function genNetServiceDescListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescListDTODataInit;
exports.genData = genNetServiceDescListDTOData;
exports.getData = getNetServiceDescListDTOData;
exports.findData = findNetServiceDescListDTOData;
exports.getListData = getNetServiceDescListDTOListData;
exports.deleteData = deleteNetServiceDescListDTOData;
exports.saveData = saveNetServiceDescListDTOData;
exports.saveListData = saveNetServiceDescListDTOListData;
exports.getAllData = getAllNetServiceDescListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescListDTODataInit();
}

var overrideModule = '../overrides/NetServiceDescListDTO';
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



