'use strict';

//Model Definition File for ServicePolicyClassListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ServicePolicyClassDTO = require('./ServicePolicyClassDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Trafik sınıfı listesinin bulunduğu veri yapısı.
*/
exports.ServicePolicyClassListDTO =  {
    type:'class',
    name:'ServicePolicyClassListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ServicePolicyClassDTO', isRequired: true }
    }
}


//Mockup System for ServicePolicyClassListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServicePolicyClassListDTO';
var dto_name = 'ServicePolicyClassListDTO';

function ServicePolicyClassListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServicePolicyClassListDTOData();
    }
}

function genServicePolicyClassListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServicePolicyClassListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServicePolicyClassListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findServicePolicyClassListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServicePolicyClassListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServicePolicyClassListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveServicePolicyClassListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServicePolicyClassListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ServicePolicyClassListDTODataInit;
exports.genData = genServicePolicyClassListDTOData;
exports.getData = getServicePolicyClassListDTOData;
exports.findData = findServicePolicyClassListDTOData;
exports.getListData = getServicePolicyClassListDTOListData;
exports.deleteData = deleteServicePolicyClassListDTOData;
exports.saveData = saveServicePolicyClassListDTOData;
exports.saveListData = saveServicePolicyClassListDTOListData;
exports.getAllData = getAllServicePolicyClassListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServicePolicyClassListDTODataInit();
}

var overrideModule = '../overrides/ServicePolicyClassListDTO';
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



