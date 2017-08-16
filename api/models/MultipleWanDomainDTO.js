'use strict';

//Model Definition File for MultipleWanDomainDTO.js

//var BaseDTO = require('./BaseDTO');
//var WanDomainDTO = require('./WanDomainDTO');

'use strict';
/**
* Alan tanımı listesinin bulunduğu veri yapısı.
*/
exports.MultipleWanDomainDTO =  {
    type:'class',
    name:'MultipleWanDomainDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'WanDomainDTO', isRequired: true }
    }
}


//Mockup System for MultipleWanDomainDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMultipleWanDomainDTO';
var dto_name = 'MultipleWanDomainDTO';

function MultipleWanDomainDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMultipleWanDomainDTOData();
    }
}

function genMultipleWanDomainDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMultipleWanDomainDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMultipleWanDomainDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMultipleWanDomainDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMultipleWanDomainDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMultipleWanDomainDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMultipleWanDomainDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMultipleWanDomainDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MultipleWanDomainDTODataInit;
exports.genData = genMultipleWanDomainDTOData;
exports.getData = getMultipleWanDomainDTOData;
exports.findData = findMultipleWanDomainDTOData;
exports.getListData = getMultipleWanDomainDTOListData;
exports.deleteData = deleteMultipleWanDomainDTOData;
exports.saveData = saveMultipleWanDomainDTOData;
exports.saveListData = saveMultipleWanDomainDTOListData;
exports.getAllData = getAllMultipleWanDomainDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MultipleWanDomainDTODataInit();
}

var overrideModule = '../overrides/MultipleWanDomainDTO';
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



