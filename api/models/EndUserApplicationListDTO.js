'use strict';

//Model Definition File for EndUserApplicationListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var EndUserApplicationDTO = require('./EndUserApplicationDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Son kullanıcı uygulama listesi veri yapısı
*/
exports.EndUserApplicationListDTO =  {
    type:'class',
    name:'EndUserApplicationListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'EndUserApplicationDTO', isRequired: true }
    }
}


//Mockup System for EndUserApplicationListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEndUserApplicationListDTO';
var dto_name = 'EndUserApplicationListDTO';

function EndUserApplicationListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEndUserApplicationListDTOData();
    }
}

function genEndUserApplicationListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEndUserApplicationListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEndUserApplicationListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEndUserApplicationListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEndUserApplicationListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEndUserApplicationListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEndUserApplicationListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEndUserApplicationListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EndUserApplicationListDTODataInit;
exports.genData = genEndUserApplicationListDTOData;
exports.getData = getEndUserApplicationListDTOData;
exports.findData = findEndUserApplicationListDTOData;
exports.getListData = getEndUserApplicationListDTOListData;
exports.deleteData = deleteEndUserApplicationListDTOData;
exports.saveData = saveEndUserApplicationListDTOData;
exports.saveListData = saveEndUserApplicationListDTOListData;
exports.getAllData = getAllEndUserApplicationListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EndUserApplicationListDTODataInit();
}

var overrideModule = '../overrides/EndUserApplicationListDTO';
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



