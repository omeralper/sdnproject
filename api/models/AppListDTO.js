'use strict';

//Model Definition File for AppListDTO.js

//var AppDTO = require('./AppDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Uygulama listesinin bulunduğu veri yapısı.
*/
exports.AppListDTO =  {
    type:'class',
    name:'AppListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AppDTO', isRequired: true }
    }
}


//Mockup System for AppListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAppListDTO';
var dto_name = 'AppListDTO';

function AppListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAppListDTOData();
    }
}

function genAppListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAppListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAppListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAppListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAppListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAppListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAppListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAppListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AppListDTODataInit;
exports.genData = genAppListDTOData;
exports.getData = getAppListDTOData;
exports.findData = findAppListDTOData;
exports.getListData = getAppListDTOListData;
exports.deleteData = deleteAppListDTOData;
exports.saveData = saveAppListDTOData;
exports.saveListData = saveAppListDTOListData;
exports.getAllData = getAllAppListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AppListDTODataInit();
}

var overrideModule = '../overrides/AppListDTO';
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



