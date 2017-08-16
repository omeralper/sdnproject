'use strict';

//Model Definition File for NetServiceRecordListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NetServiceRecordDTO = require('./NetServiceRecordDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Çalışan ağ servislerinin tümünü listelemek için kullanılan veri yapısı.
*/
exports.NetServiceRecordListDTO =  {
    type:'class',
    name:'NetServiceRecordListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NetServiceRecordDTO', isRequired: true }
    }
}


//Mockup System for NetServiceRecordListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordListDTO';
var dto_name = 'NetServiceRecordListDTO';

function NetServiceRecordListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordListDTOData();
    }
}

function genNetServiceRecordListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordListDTODataInit;
exports.genData = genNetServiceRecordListDTOData;
exports.getData = getNetServiceRecordListDTOData;
exports.findData = findNetServiceRecordListDTOData;
exports.getListData = getNetServiceRecordListDTOListData;
exports.deleteData = deleteNetServiceRecordListDTOData;
exports.saveData = saveNetServiceRecordListDTOData;
exports.saveListData = saveNetServiceRecordListDTOListData;
exports.getAllData = getAllNetServiceRecordListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordListDTODataInit();
}

var overrideModule = '../overrides/NetServiceRecordListDTO';
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



