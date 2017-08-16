'use strict';

//Model Definition File for WanAlarmInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var WanAlarmInfoDTO = require('./WanAlarmInfoDTO');

'use strict';
/**
* Local topolojilerin alarm bilgilerinin saklandığı veri modeli.
*/
exports.WanAlarmInfoListDTO =  {
    type:'class',
    name:'WanAlarmInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'WanAlarmInfoDTO' }
    }
}


//Mockup System for WanAlarmInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoListDTO';
var dto_name = 'WanAlarmInfoListDTO';

function WanAlarmInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoListDTOData();
    }
}

function genWanAlarmInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoListDTODataInit;
exports.genData = genWanAlarmInfoListDTOData;
exports.getData = getWanAlarmInfoListDTOData;
exports.findData = findWanAlarmInfoListDTOData;
exports.getListData = getWanAlarmInfoListDTOListData;
exports.deleteData = deleteWanAlarmInfoListDTOData;
exports.saveData = saveWanAlarmInfoListDTOData;
exports.saveListData = saveWanAlarmInfoListDTOListData;
exports.getAllData = getAllWanAlarmInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoListDTODataInit();
}

var overrideModule = '../overrides/WanAlarmInfoListDTO';
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



