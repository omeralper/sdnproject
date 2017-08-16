'use strict';

//Model Definition File for WanMvtnInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var LanMvtnInfoDTO = require('./LanMvtnInfoDTO');
//var SortOptions = require('./SortOptions');
//var WanMvtnInfoDTO = require('./WanMvtnInfoDTO');

'use strict';
/**
* Geniş alan sanal ağlarının bilgilerinin bulundugu veri modeli.
*/
exports.WanMvtnInfoListDTO =  {
    type:'class',
    name:'WanMvtnInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'WanMvtnInfoDTO' }, 
        lanMvtnInfos : { name: 'lanMvtnInfos', type: 'Array', subType: 'LanMvtnInfoDTO' }
    }
}


//Mockup System for WanMvtnInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanMvtnInfoListDTO';
var dto_name = 'WanMvtnInfoListDTO';

function WanMvtnInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanMvtnInfoListDTOData();
    }
}

function genWanMvtnInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanMvtnInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanMvtnInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanMvtnInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanMvtnInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanMvtnInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanMvtnInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanMvtnInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanMvtnInfoListDTODataInit;
exports.genData = genWanMvtnInfoListDTOData;
exports.getData = getWanMvtnInfoListDTOData;
exports.findData = findWanMvtnInfoListDTOData;
exports.getListData = getWanMvtnInfoListDTOListData;
exports.deleteData = deleteWanMvtnInfoListDTOData;
exports.saveData = saveWanMvtnInfoListDTOData;
exports.saveListData = saveWanMvtnInfoListDTOListData;
exports.getAllData = getAllWanMvtnInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanMvtnInfoListDTODataInit();
}

var overrideModule = '../overrides/WanMvtnInfoListDTO';
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



