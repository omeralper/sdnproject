'use strict';

//Model Definition File for ClusterDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Küme veri yapısı.
*/
exports.ClusterDTO =  {
    type:'class',
    name:'ClusterDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }
    }
}


//Mockup System for ClusterDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDClusterDTO';
var dto_name = 'ClusterDTO';

function ClusterDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genClusterDTOData();
    }
}

function genClusterDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getClusterDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getClusterDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findClusterDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteClusterDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveClusterDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveClusterDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllClusterDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ClusterDTODataInit;
exports.genData = genClusterDTOData;
exports.getData = getClusterDTOData;
exports.findData = findClusterDTOData;
exports.getListData = getClusterDTOListData;
exports.deleteData = deleteClusterDTOData;
exports.saveData = saveClusterDTOData;
exports.saveListData = saveClusterDTOListData;
exports.getAllData = getAllClusterDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ClusterDTODataInit();
}

var overrideModule = '../overrides/ClusterDTO';
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



