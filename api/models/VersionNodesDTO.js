'use strict';

//Model Definition File for VersionNodesDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Modül versiyonu başına node listesi.
*/
exports.VersionNodesDTO =  {
    type:'class',
    name:'VersionNodesDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        nodeVersion : { name: 'nodeVersion', type: 'String', isRequired: true }, 
        nodes : { name: 'nodes', type: 'Array', subType: 'string' }
    }
}


//Mockup System for VersionNodesDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVersionNodesDTO';
var dto_name = 'VersionNodesDTO';

function VersionNodesDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVersionNodesDTOData();
    }
}

function genVersionNodesDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVersionNodesDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVersionNodesDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVersionNodesDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVersionNodesDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVersionNodesDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVersionNodesDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVersionNodesDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VersionNodesDTODataInit;
exports.genData = genVersionNodesDTOData;
exports.getData = getVersionNodesDTOData;
exports.findData = findVersionNodesDTOData;
exports.getListData = getVersionNodesDTOListData;
exports.deleteData = deleteVersionNodesDTOData;
exports.saveData = saveVersionNodesDTOData;
exports.saveListData = saveVersionNodesDTOListData;
exports.getAllData = getAllVersionNodesDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VersionNodesDTODataInit();
}

var overrideModule = '../overrides/VersionNodesDTO';
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



