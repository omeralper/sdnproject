'use strict';

//Model Definition File for EmergencyPolicyListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var EmergencyPolicyDTO = require('./EmergencyPolicyDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Acil durum politikası listesinin bulunduğu veri yapısı.
*/
exports.EmergencyPolicyListDTO =  {
    type:'class',
    name:'EmergencyPolicyListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'EmergencyPolicyDTO', isRequired: true }
    }
}


//Mockup System for EmergencyPolicyListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEmergencyPolicyListDTO';
var dto_name = 'EmergencyPolicyListDTO';

function EmergencyPolicyListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEmergencyPolicyListDTOData();
    }
}

function genEmergencyPolicyListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEmergencyPolicyListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEmergencyPolicyListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEmergencyPolicyListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEmergencyPolicyListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEmergencyPolicyListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEmergencyPolicyListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEmergencyPolicyListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EmergencyPolicyListDTODataInit;
exports.genData = genEmergencyPolicyListDTOData;
exports.getData = getEmergencyPolicyListDTOData;
exports.findData = findEmergencyPolicyListDTOData;
exports.getListData = getEmergencyPolicyListDTOListData;
exports.deleteData = deleteEmergencyPolicyListDTOData;
exports.saveData = saveEmergencyPolicyListDTOData;
exports.saveListData = saveEmergencyPolicyListDTOListData;
exports.getAllData = getAllEmergencyPolicyListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EmergencyPolicyListDTODataInit();
}

var overrideModule = '../overrides/EmergencyPolicyListDTO';
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



