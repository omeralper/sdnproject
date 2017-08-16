'use strict';

//Model Definition File for VimInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VimInfoDTO = require('./VimInfoDTO');

'use strict';
/**
* VIM bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
exports.VimInfoListDTO =  {
    type:'class',
    name:'VimInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VimInfoDTO', isRequired: true }
    }
}


//Mockup System for VimInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoListDTO';
var dto_name = 'VimInfoListDTO';

function VimInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoListDTOData();
    }
}

function genVimInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoListDTODataInit;
exports.genData = genVimInfoListDTOData;
exports.getData = getVimInfoListDTOData;
exports.findData = findVimInfoListDTOData;
exports.getListData = getVimInfoListDTOListData;
exports.deleteData = deleteVimInfoListDTOData;
exports.saveData = saveVimInfoListDTOData;
exports.saveListData = saveVimInfoListDTOListData;
exports.getAllData = getAllVimInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoListDTODataInit();
}

var overrideModule = '../overrides/VimInfoListDTO';
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



