'use strict';

//Model Definition File for EdrSearchCriteria.js

//var EDR_STATUS = require('./EDR_STATUS');

'use strict';
/**
* EDR araştırma kriterlerinin bulunduğu veri yapısıdır.
*/
exports.EdrSearchCriteria =  {
    type:'class',
    name:'EdrSearchCriteria',
    fields: {
        timeStart : { name: 'timeStart', type: 'String' }, 
        timeEnd : { name: 'timeEnd', type: 'String' }, 
        status : { name: 'status', type: 'EDR_STATUS' }, 
        username : { name: 'username', type: 'String' }, 
        sourceIP : { name: 'sourceIP', type: 'String' }, 
        destinationIP : { name: 'destinationIP', type: 'String' }, 
        sourceMAC : { name: 'sourceMAC', type: 'String' }, 
        destinationMAC : { name: 'destinationMAC', type: 'String' }, 
        sourcePort : { name: 'sourcePort', type: 'Integer' }, 
        destinationPort : { name: 'destinationPort', type: 'Integer' }, 
        protocol : { name: 'protocol', type: 'String' }, 
        xid : { name: 'xid', type: 'String' }, 
        module : { name: 'module', type: 'String' }, 
        limit : { name: 'limit', type: 'Integer' }, 
        data : { name: 'data', type: 'String' }
    }
}


//Mockup System for EdrSearchCriteria.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEdrSearchCriteria';
var dto_name = 'EdrSearchCriteria';

function EdrSearchCriteriaDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEdrSearchCriteriaData();
    }
}

function genEdrSearchCriteriaData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEdrSearchCriteriaData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEdrSearchCriteriaListData(options) {
    return mockup.getListData(data_key, options);
}

function findEdrSearchCriteriaData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEdrSearchCriteriaData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEdrSearchCriteriaData(data) {
    return mockup.saveData(data_key, data);
}

function saveEdrSearchCriteriaListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEdrSearchCriteriaData() {
    return mockup.getAllData(data_key);
}

exports.init = EdrSearchCriteriaDataInit;
exports.genData = genEdrSearchCriteriaData;
exports.getData = getEdrSearchCriteriaData;
exports.findData = findEdrSearchCriteriaData;
exports.getListData = getEdrSearchCriteriaListData;
exports.deleteData = deleteEdrSearchCriteriaData;
exports.saveData = saveEdrSearchCriteriaData;
exports.saveListData = saveEdrSearchCriteriaListData;
exports.getAllData = getAllEdrSearchCriteriaData;

function autoInit(){
    mockup.initDatabase(data_key);
    EdrSearchCriteriaDataInit();
}

var overrideModule = '../overrides/EdrSearchCriteria';
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



