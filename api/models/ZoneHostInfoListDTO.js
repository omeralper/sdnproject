'use strict';

//Model Definition File for ZoneHostInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var ZoneHostInfoDTO = require('./ZoneHostInfoDTO');

'use strict';
/**
* Alt Zone bilgilerini tutan dizi
*/
exports.ZoneHostInfoListDTO =  {
    type:'class',
    name:'ZoneHostInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ZoneHostInfoDTO', isRequired: true }
    }
}


//Mockup System for ZoneHostInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneHostInfoListDTO';
var dto_name = 'ZoneHostInfoListDTO';

function ZoneHostInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneHostInfoListDTOData();
    }
}

function genZoneHostInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneHostInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneHostInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneHostInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneHostInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneHostInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneHostInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneHostInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneHostInfoListDTODataInit;
exports.genData = genZoneHostInfoListDTOData;
exports.getData = getZoneHostInfoListDTOData;
exports.findData = findZoneHostInfoListDTOData;
exports.getListData = getZoneHostInfoListDTOListData;
exports.deleteData = deleteZoneHostInfoListDTOData;
exports.saveData = saveZoneHostInfoListDTOData;
exports.saveListData = saveZoneHostInfoListDTOListData;
exports.getAllData = getAllZoneHostInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneHostInfoListDTODataInit();
}

var overrideModule = '../overrides/ZoneHostInfoListDTO';
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



