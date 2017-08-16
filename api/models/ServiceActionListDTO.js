'use strict';

//Model Definition File for ServiceActionListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ServiceActionDTO = require('./ServiceActionDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Hizmet aksiyonu listesinin bulunduğu veri yapısı.
*/
exports.ServiceActionListDTO =  {
    type:'class',
    name:'ServiceActionListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ServiceActionDTO', isRequired: true }
    }
}


//Mockup System for ServiceActionListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServiceActionListDTO';
var dto_name = 'ServiceActionListDTO';

function ServiceActionListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServiceActionListDTOData();
    }
}

function genServiceActionListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServiceActionListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServiceActionListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findServiceActionListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServiceActionListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServiceActionListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveServiceActionListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServiceActionListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ServiceActionListDTODataInit;
exports.genData = genServiceActionListDTOData;
exports.getData = getServiceActionListDTOData;
exports.findData = findServiceActionListDTOData;
exports.getListData = getServiceActionListDTOListData;
exports.deleteData = deleteServiceActionListDTOData;
exports.saveData = saveServiceActionListDTOData;
exports.saveListData = saveServiceActionListDTOListData;
exports.getAllData = getAllServiceActionListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServiceActionListDTODataInit();
}

var overrideModule = '../overrides/ServiceActionListDTO';
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



