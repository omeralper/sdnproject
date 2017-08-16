'use strict';

//Model Definition File for VirtualCPEListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var VirtualCPEDTO = require('./VirtualCPEDTO');

'use strict';
/**
* Sanal CPE listesinin bulunduğu veri yapısı.
*/
exports.VirtualCPEListDTO =  {
    type:'class',
    name:'VirtualCPEListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'VirtualCPEDTO', isRequired: true }
    }
}


//Mockup System for VirtualCPEListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEListDTO';
var dto_name = 'VirtualCPEListDTO';

function VirtualCPEListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEListDTOData();
    }
}

function genVirtualCPEListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEListDTODataInit;
exports.genData = genVirtualCPEListDTOData;
exports.getData = getVirtualCPEListDTOData;
exports.findData = findVirtualCPEListDTOData;
exports.getListData = getVirtualCPEListDTOListData;
exports.deleteData = deleteVirtualCPEListDTOData;
exports.saveData = saveVirtualCPEListDTOData;
exports.saveListData = saveVirtualCPEListDTOListData;
exports.getAllData = getAllVirtualCPEListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEListDTODataInit();
}

var overrideModule = '../overrides/VirtualCPEListDTO';
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



