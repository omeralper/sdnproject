'use strict';

//Model Definition File for NacUserListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NacUserDTO = require('./NacUserDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Son kullanıcı listesinin bulunduğu veri yapısı.
*/
exports.NacUserListDTO =  {
    type:'class',
    name:'NacUserListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NacUserDTO', isRequired: true }
    }
}


//Mockup System for NacUserListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserListDTO';
var dto_name = 'NacUserListDTO';

function NacUserListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserListDTOData();
    }
}

function genNacUserListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserListDTODataInit;
exports.genData = genNacUserListDTOData;
exports.getData = getNacUserListDTOData;
exports.findData = findNacUserListDTOData;
exports.getListData = getNacUserListDTOListData;
exports.deleteData = deleteNacUserListDTOData;
exports.saveData = saveNacUserListDTOData;
exports.saveListData = saveNacUserListDTOListData;
exports.getAllData = getAllNacUserListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserListDTODataInit();
}

var overrideModule = '../overrides/NacUserListDTO';
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



