'use strict';

//Model Definition File for NeighborRelationStatusDTO.js

//var BaseDTO = require('./BaseDTO');
//var PEER_STATUS_TYPE = require('./PEER_STATUS_TYPE');
//var SdnipRouterDTO = require('./SdnipRouterDTO');

'use strict';
/**
* BGP komsuluk ilişkisini tutar
*/
exports.NeighborRelationStatusDTO =  {
    type:'class',
    name:'NeighborRelationStatusDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        peer : { name: 'peer', type: 'SdnipRouterDTO', isRequired: true }, 
        peerStatus : { name: 'peerStatus', type: 'PEER_STATUS_TYPE', isRequired: true }, 
        description : { name: 'description', type: 'String' }
    }
}


//Mockup System for NeighborRelationStatusDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationStatusDTO';
var dto_name = 'NeighborRelationStatusDTO';

function NeighborRelationStatusDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationStatusDTOData();
    }
}

function genNeighborRelationStatusDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationStatusDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationStatusDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationStatusDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationStatusDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationStatusDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationStatusDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationStatusDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationStatusDTODataInit;
exports.genData = genNeighborRelationStatusDTOData;
exports.getData = getNeighborRelationStatusDTOData;
exports.findData = findNeighborRelationStatusDTOData;
exports.getListData = getNeighborRelationStatusDTOListData;
exports.deleteData = deleteNeighborRelationStatusDTOData;
exports.saveData = saveNeighborRelationStatusDTOData;
exports.saveListData = saveNeighborRelationStatusDTOListData;
exports.getAllData = getAllNeighborRelationStatusDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationStatusDTODataInit();
}

var overrideModule = '../overrides/NeighborRelationStatusDTO';
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



