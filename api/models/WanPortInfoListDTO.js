'use strict';

//Model Definition File for WanPortInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var WanPortInfoDTO = require('./WanPortInfoDTO');

'use strict';
/**
* Geniş alan ağlarının gerişlerinin bilgi profillerinin bulundugu veri modeli.
*/
exports.WanPortInfoListDTO =  {
    type:'class',
    name:'WanPortInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'WanPortInfoDTO' }
    }
}


//Mockup System for WanPortInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoListDTO';
var dto_name = 'WanPortInfoListDTO';

function WanPortInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoListDTOData();
    }
}

function genWanPortInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoListDTODataInit;
exports.genData = genWanPortInfoListDTOData;
exports.getData = getWanPortInfoListDTOData;
exports.findData = findWanPortInfoListDTOData;
exports.getListData = getWanPortInfoListDTOListData;
exports.deleteData = deleteWanPortInfoListDTOData;
exports.saveData = saveWanPortInfoListDTOData;
exports.saveListData = saveWanPortInfoListDTOListData;
exports.getAllData = getAllWanPortInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoListDTODataInit();
}

var overrideModule = '../overrides/WanPortInfoListDTO';
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



