'use strict';

//Model Definition File for SdnipRouteListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipRouteDTO = require('./SdnipRouteDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sdnip rotalayıcılarla öğrenilmiş rota listesinin bulunduğu veri yapısı.
*/
exports.SdnipRouteListDTO =  {
    type:'class',
    name:'SdnipRouteListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipRouteDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouteListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouteListDTO';
var dto_name = 'SdnipRouteListDTO';

function SdnipRouteListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouteListDTOData();
    }
}

function genSdnipRouteListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouteListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouteListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouteListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouteListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouteListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouteListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouteListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouteListDTODataInit;
exports.genData = genSdnipRouteListDTOData;
exports.getData = getSdnipRouteListDTOData;
exports.findData = findSdnipRouteListDTOData;
exports.getListData = getSdnipRouteListDTOListData;
exports.deleteData = deleteSdnipRouteListDTOData;
exports.saveData = saveSdnipRouteListDTOData;
exports.saveListData = saveSdnipRouteListDTOListData;
exports.getAllData = getAllSdnipRouteListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouteListDTODataInit();
}

var overrideModule = '../overrides/SdnipRouteListDTO';
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



