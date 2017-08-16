'use strict';

//Model Definition File for MvtnRequestDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_REQUEST_STATUS = require('./MVTN_REQUEST_STATUS');
//var MVTN_TYPE = require('./MVTN_TYPE');
//var TopologyDTO = require('./TopologyDTO');

'use strict';
/**
* Sanal ağ talebi veri modelidir.
*/
exports.MvtnRequestDTO =  {
    type:'class',
    name:'MvtnRequestDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        status : { name: 'status', type: 'MVTN_REQUEST_STATUS' }, 
        topologyData : { name: 'topologyData', type: 'TopologyDTO' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }, 
        username : { name: 'username', type: 'String' }, 
        creationDate : { name: 'creationDate', type: 'Date' }, 
        lastUpdateDate : { name: 'lastUpdateDate', type: 'Date' }, 
        mvtnType : { name: 'mvtnType', type: 'MVTN_TYPE' }
    }
}


//Mockup System for MvtnRequestDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequestDTO';
var dto_name = 'MvtnRequestDTO';

function MvtnRequestDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestDTOData();
    }
}

function genMvtnRequestDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestDTODataInit;
exports.genData = genMvtnRequestDTOData;
exports.getData = getMvtnRequestDTOData;
exports.findData = findMvtnRequestDTOData;
exports.getListData = getMvtnRequestDTOListData;
exports.deleteData = deleteMvtnRequestDTOData;
exports.saveData = saveMvtnRequestDTOData;
exports.saveListData = saveMvtnRequestDTOListData;
exports.getAllData = getAllMvtnRequestDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestDTODataInit();
}

var overrideModule = '../overrides/MvtnRequestDTO';
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



