'use strict';

//Model Definition File for SdnipPolicyAssignmentListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SdnipPolicyAssignmentDTO = require('./SdnipPolicyAssignmentDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Politika tipine göre politika listesini tutan modeldir.
*/
exports.SdnipPolicyAssignmentListDTO =  {
    type:'class',
    name:'SdnipPolicyAssignmentListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'SdnipPolicyAssignmentDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyAssignmentListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyAssignmentListDTO';
var dto_name = 'SdnipPolicyAssignmentListDTO';

function SdnipPolicyAssignmentListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyAssignmentListDTOData();
    }
}

function genSdnipPolicyAssignmentListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyAssignmentListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyAssignmentListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyAssignmentListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyAssignmentListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyAssignmentListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyAssignmentListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyAssignmentListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyAssignmentListDTODataInit;
exports.genData = genSdnipPolicyAssignmentListDTOData;
exports.getData = getSdnipPolicyAssignmentListDTOData;
exports.findData = findSdnipPolicyAssignmentListDTOData;
exports.getListData = getSdnipPolicyAssignmentListDTOListData;
exports.deleteData = deleteSdnipPolicyAssignmentListDTOData;
exports.saveData = saveSdnipPolicyAssignmentListDTOData;
exports.saveListData = saveSdnipPolicyAssignmentListDTOListData;
exports.getAllData = getAllSdnipPolicyAssignmentListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyAssignmentListDTODataInit();
}

var overrideModule = '../overrides/SdnipPolicyAssignmentListDTO';
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



