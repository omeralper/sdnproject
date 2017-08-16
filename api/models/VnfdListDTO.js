'use strict';

//Model Definition File for VnfdListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VnfdDTO = require('./VnfdDTO');

'use strict';
/**
* Vnfd tip listesinin bulunduğu veri yapısı.
*/
exports.VnfdListDTO =  {
    type:'class',
    name:'VnfdListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VnfdDTO', isRequired: true }
    }
}


//Mockup System for VnfdListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdListDTO';
var dto_name = 'VnfdListDTO';

function VnfdListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdListDTOData();
    }
}

function genVnfdListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdListDTODataInit;
exports.genData = genVnfdListDTOData;
exports.getData = getVnfdListDTOData;
exports.findData = findVnfdListDTOData;
exports.getListData = getVnfdListDTOListData;
exports.deleteData = deleteVnfdListDTOData;
exports.saveData = saveVnfdListDTOData;
exports.saveListData = saveVnfdListDTOListData;
exports.getAllData = getAllVnfdListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdListDTODataInit();
}

var overrideModule = '../overrides/VnfdListDTO';
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



