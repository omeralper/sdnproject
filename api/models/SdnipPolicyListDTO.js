'use strict';

//Model Definition File for SdnipPolicyListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipPolicyDTO = require('./SdnipPolicyDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Eşleşme politikaları listesini tutan modeldir.
*/
exports.SdnipPolicyListDTO =  {
    type:'class',
    name:'SdnipPolicyListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipPolicyDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyListDTO';
var dto_name = 'SdnipPolicyListDTO';

function SdnipPolicyListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyListDTOData();
    }
}

function genSdnipPolicyListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyListDTODataInit;
exports.genData = genSdnipPolicyListDTOData;
exports.getData = getSdnipPolicyListDTOData;
exports.findData = findSdnipPolicyListDTOData;
exports.getListData = getSdnipPolicyListDTOListData;
exports.deleteData = deleteSdnipPolicyListDTOData;
exports.saveData = saveSdnipPolicyListDTOData;
exports.saveListData = saveSdnipPolicyListDTOListData;
exports.getAllData = getAllSdnipPolicyListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyListDTODataInit();
}

var overrideModule = '../overrides/SdnipPolicyListDTO';
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



