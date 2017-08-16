'use strict';

//Model Definition File for VersionListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VersionInfo = require('./VersionInfo');

'use strict';
/**
* Uygulama versiyon bilgilerini tutar
*/
exports.VersionListDTO =  {
    type:'class',
    name:'VersionListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VersionInfo', isRequired: true }
    }
}


//Mockup System for VersionListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVersionListDTO';
var dto_name = 'VersionListDTO';

function VersionListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVersionListDTOData();
    }
}

function genVersionListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVersionListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVersionListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVersionListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVersionListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVersionListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVersionListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVersionListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VersionListDTODataInit;
exports.genData = genVersionListDTOData;
exports.getData = getVersionListDTOData;
exports.findData = findVersionListDTOData;
exports.getListData = getVersionListDTOListData;
exports.deleteData = deleteVersionListDTOData;
exports.saveData = saveVersionListDTOData;
exports.saveListData = saveVersionListDTOListData;
exports.getAllData = getAllVersionListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VersionListDTODataInit();
}

var overrideModule = '../overrides/VersionListDTO';
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



