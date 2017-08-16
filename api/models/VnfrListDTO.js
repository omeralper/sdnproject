'use strict';

//Model Definition File for VnfrListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VnfrDTO = require('./VnfrDTO');

'use strict';
/**
* Vnfr tip listesinin bulunduğu veri yapısı.
*/
exports.VnfrListDTO =  {
    type:'class',
    name:'VnfrListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VnfrDTO', isRequired: true }
    }
}


//Mockup System for VnfrListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfrListDTO';
var dto_name = 'VnfrListDTO';

function VnfrListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfrListDTOData();
    }
}

function genVnfrListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfrListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfrListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfrListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfrListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfrListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfrListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfrListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfrListDTODataInit;
exports.genData = genVnfrListDTOData;
exports.getData = getVnfrListDTOData;
exports.findData = findVnfrListDTOData;
exports.getListData = getVnfrListDTOListData;
exports.deleteData = deleteVnfrListDTOData;
exports.saveData = saveVnfrListDTOData;
exports.saveListData = saveVnfrListDTOListData;
exports.getAllData = getAllVnfrListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfrListDTODataInit();
}

var overrideModule = '../overrides/VnfrListDTO';
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



