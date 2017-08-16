'use strict';

//Model Definition File for VimNetworkSubnetListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VimNetworkSubnetDTO = require('./VimNetworkSubnetDTO');

'use strict';
/**
* VIM bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
exports.VimNetworkSubnetListDTO =  {
    type:'class',
    name:'VimNetworkSubnetListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VimNetworkSubnetDTO', isRequired: true }
    }
}


//Mockup System for VimNetworkSubnetListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimNetworkSubnetListDTO';
var dto_name = 'VimNetworkSubnetListDTO';

function VimNetworkSubnetListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimNetworkSubnetListDTOData();
    }
}

function genVimNetworkSubnetListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimNetworkSubnetListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimNetworkSubnetListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimNetworkSubnetListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimNetworkSubnetListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimNetworkSubnetListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimNetworkSubnetListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimNetworkSubnetListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimNetworkSubnetListDTODataInit;
exports.genData = genVimNetworkSubnetListDTOData;
exports.getData = getVimNetworkSubnetListDTOData;
exports.findData = findVimNetworkSubnetListDTOData;
exports.getListData = getVimNetworkSubnetListDTOListData;
exports.deleteData = deleteVimNetworkSubnetListDTOData;
exports.saveData = saveVimNetworkSubnetListDTOData;
exports.saveListData = saveVimNetworkSubnetListDTOListData;
exports.getAllData = getAllVimNetworkSubnetListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimNetworkSubnetListDTODataInit();
}

var overrideModule = '../overrides/VimNetworkSubnetListDTO';
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



