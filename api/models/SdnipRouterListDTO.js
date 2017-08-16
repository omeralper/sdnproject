'use strict';

//Model Definition File for SdnipRouterListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipRouterDTO = require('./SdnipRouterDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sdnip rotalayıcıların listesinin bulunduğu veri yapısı.
*/
exports.SdnipRouterListDTO =  {
    type:'class',
    name:'SdnipRouterListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipRouterDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouterListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterListDTO';
var dto_name = 'SdnipRouterListDTO';

function SdnipRouterListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterListDTOData();
    }
}

function genSdnipRouterListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterListDTODataInit;
exports.genData = genSdnipRouterListDTOData;
exports.getData = getSdnipRouterListDTOData;
exports.findData = findSdnipRouterListDTOData;
exports.getListData = getSdnipRouterListDTOListData;
exports.deleteData = deleteSdnipRouterListDTOData;
exports.saveData = saveSdnipRouterListDTOData;
exports.saveListData = saveSdnipRouterListDTOListData;
exports.getAllData = getAllSdnipRouterListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterListDTODataInit();
}

var overrideModule = '../overrides/SdnipRouterListDTO';
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



