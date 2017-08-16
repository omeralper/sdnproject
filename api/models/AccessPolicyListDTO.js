'use strict';

//Model Definition File for AccessPolicyListDTO.js

//var AccessPolicyDTO = require('./AccessPolicyDTO');
//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Erişim politikası listesinin bulunduğu veri yapısı.
*/
exports.AccessPolicyListDTO =  {
    type:'class',
    name:'AccessPolicyListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'AccessPolicyDTO', isRequired: true }
    }
}


//Mockup System for AccessPolicyListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyListDTO';
var dto_name = 'AccessPolicyListDTO';

function AccessPolicyListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyListDTOData();
    }
}

function genAccessPolicyListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyListDTODataInit;
exports.genData = genAccessPolicyListDTOData;
exports.getData = getAccessPolicyListDTOData;
exports.findData = findAccessPolicyListDTOData;
exports.getListData = getAccessPolicyListDTOListData;
exports.deleteData = deleteAccessPolicyListDTOData;
exports.saveData = saveAccessPolicyListDTOData;
exports.saveListData = saveAccessPolicyListDTOListData;
exports.getAllData = getAllAccessPolicyListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyListDTODataInit();
}

var overrideModule = '../overrides/AccessPolicyListDTO';
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



