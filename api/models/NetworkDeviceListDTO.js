'use strict';

//Model Definition File for NetworkDeviceListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Ağ cihazı listesinin bulunduğu veri yapısı.
*/
exports.NetworkDeviceListDTO =  {
    type:'class',
    name:'NetworkDeviceListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'NetworkDeviceDTO', isRequired: true }
    }
}


//Mockup System for NetworkDeviceListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetworkDeviceListDTO';
var dto_name = 'NetworkDeviceListDTO';

function NetworkDeviceListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetworkDeviceListDTOData();
    }
}

function genNetworkDeviceListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetworkDeviceListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetworkDeviceListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetworkDeviceListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetworkDeviceListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetworkDeviceListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetworkDeviceListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetworkDeviceListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetworkDeviceListDTODataInit;
exports.genData = genNetworkDeviceListDTOData;
exports.getData = getNetworkDeviceListDTOData;
exports.findData = findNetworkDeviceListDTOData;
exports.getListData = getNetworkDeviceListDTOListData;
exports.deleteData = deleteNetworkDeviceListDTOData;
exports.saveData = saveNetworkDeviceListDTOData;
exports.saveListData = saveNetworkDeviceListDTOListData;
exports.getAllData = getAllNetworkDeviceListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetworkDeviceListDTODataInit();
}

var overrideModule = '../overrides/NetworkDeviceListDTO';
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



