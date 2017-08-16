'use strict';

//Model Definition File for SdnipRouteDTO.js

//var BaseDTO = require('./BaseDTO');
//var IP_VERSION_TYPE = require('./IP_VERSION_TYPE');
//var SdnipRouterDTO = require('./SdnipRouterDTO');

'use strict';
/**
* BGP ile öğrenilmiş rota bilgilerini tutar
*/
exports.SdnipRouteDTO =  {
    type:'class',
    name:'SdnipRouteDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        peer : { name: 'peer', type: 'SdnipRouterDTO', isRequired: true }, 
        ipVersion : { name: 'ipVersion', type: 'IP_VERSION_TYPE', isRequired: true }, 
        prefix : { name: 'prefix', type: 'String', isRequired: true }, 
        nextHop : { name: 'nextHop', type: 'String', isRequired: true }, 
        bgpId : { name: 'bgpId', type: 'String', isRequired: true }, 
        origin : { name: 'origin', type: 'String', isRequired: true }, 
        asPath : { name: 'asPath', type: 'Array', subType: 'integer' }, 
        localPref : { name: 'localPref', type: 'Long', isRequired: true }, 
        multiExitDisc : { name: 'multiExitDisc', type: 'Long', isRequired: true }, 
        annonced : { name: 'annonced', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for SdnipRouteDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouteDTO';
var dto_name = 'SdnipRouteDTO';

function SdnipRouteDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouteDTOData();
    }
}

function genSdnipRouteDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouteDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouteDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouteDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouteDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouteDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouteDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouteDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouteDTODataInit;
exports.genData = genSdnipRouteDTOData;
exports.getData = getSdnipRouteDTOData;
exports.findData = findSdnipRouteDTOData;
exports.getListData = getSdnipRouteDTOListData;
exports.deleteData = deleteSdnipRouteDTOData;
exports.saveData = saveSdnipRouteDTOData;
exports.saveListData = saveSdnipRouteDTOListData;
exports.getAllData = getAllSdnipRouteDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouteDTODataInit();
}

var overrideModule = '../overrides/SdnipRouteDTO';
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



