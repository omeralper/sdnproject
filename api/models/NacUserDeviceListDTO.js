'use strict';

//Model Definition File for NacUserDeviceListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NacUserDeviceDTO = require('./NacUserDeviceDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Son kullanıcı cihaz atama listesinin bulunduğu veri yapısı.
*/
exports.NacUserDeviceListDTO =  {
    type:'class',
    name:'NacUserDeviceListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NacUserDeviceDTO', isRequired: true }
    }
}


//Mockup System for NacUserDeviceListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceListDTO';
var dto_name = 'NacUserDeviceListDTO';

function NacUserDeviceListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceListDTOData();
    }
}

function genNacUserDeviceListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceListDTODataInit;
exports.genData = genNacUserDeviceListDTOData;
exports.getData = getNacUserDeviceListDTOData;
exports.findData = findNacUserDeviceListDTOData;
exports.getListData = getNacUserDeviceListDTOListData;
exports.deleteData = deleteNacUserDeviceListDTOData;
exports.saveData = saveNacUserDeviceListDTOData;
exports.saveListData = saveNacUserDeviceListDTOListData;
exports.getAllData = getAllNacUserDeviceListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceListDTODataInit();
}

var overrideModule = '../overrides/NacUserDeviceListDTO';
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



