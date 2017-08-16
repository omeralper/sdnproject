'use strict';

//Model Definition File for ZoneInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var ZoneInfoDTO = require('./ZoneInfoDTO');

'use strict';
/**
* Zone bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
exports.ZoneInfoListDTO =  {
    type:'class',
    name:'ZoneInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ZoneInfoDTO', isRequired: true }
    }
}


//Mockup System for ZoneInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoListDTO';
var dto_name = 'ZoneInfoListDTO';

function ZoneInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoListDTOData();
    }
}

function genZoneInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoListDTODataInit;
exports.genData = genZoneInfoListDTOData;
exports.getData = getZoneInfoListDTOData;
exports.findData = findZoneInfoListDTOData;
exports.getListData = getZoneInfoListDTOListData;
exports.deleteData = deleteZoneInfoListDTOData;
exports.saveData = saveZoneInfoListDTOData;
exports.saveListData = saveZoneInfoListDTOListData;
exports.getAllData = getAllZoneInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoListDTODataInit();
}

var overrideModule = '../overrides/ZoneInfoListDTO';
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



