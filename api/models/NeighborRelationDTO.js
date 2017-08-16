'use strict';

//Model Definition File for NeighborRelationDTO.js

//var BaseDTO = require('./BaseDTO');
//var SdnipRouterDTO = require('./SdnipRouterDTO');

'use strict';
/**
* BGP komsuluk ilişkisini tutar
*/
exports.NeighborRelationDTO =  {
    type:'class',
    name:'NeighborRelationDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        speaker : { name: 'speaker', type: 'SdnipRouterDTO', isRequired: true }, 
        peerList : { name: 'peerList', type: 'Array', subType: 'SdnipRouterDTO', isRequired: true }, 
        connectRetry : { name: 'connectRetry', type: 'Long' }, 
        holdTime : { name: 'holdTime', type: 'Long' }, 
        keepaliveInterval : { name: 'keepaliveInterval', type: 'Long' }, 
        minimumAdvertisementInterval : { name: 'minimumAdvertisementInterval', type: 'Long' }
    }
}


//Mockup System for NeighborRelationDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationDTO';
var dto_name = 'NeighborRelationDTO';

function NeighborRelationDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationDTOData();
    }
}

function genNeighborRelationDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationDTODataInit;
exports.genData = genNeighborRelationDTOData;
exports.getData = getNeighborRelationDTOData;
exports.findData = findNeighborRelationDTOData;
exports.getListData = getNeighborRelationDTOListData;
exports.deleteData = deleteNeighborRelationDTOData;
exports.saveData = saveNeighborRelationDTOData;
exports.saveListData = saveNeighborRelationDTOListData;
exports.getAllData = getAllNeighborRelationDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationDTODataInit();
}

var overrideModule = '../overrides/NeighborRelationDTO';
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



