'use strict';

//Model Definition File for SdnipRouterDTO.js

//var BaseDTO = require('./BaseDTO');
//var ROUTER_TYPE = require('./ROUTER_TYPE');
//var SdnipRouterDTO = require('./SdnipRouterDTO');

'use strict';
/**
* BGP konuşabilme yeteneğine sahip rotalayıcı bilgileri tutar
*/
exports.SdnipRouterDTO =  {
    type:'class',
    name:'SdnipRouterDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        sdnipRouterId : { name: 'sdnipRouterId', type: 'Long' }, 
        asNumber : { name: 'asNumber', type: 'Integer', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        type : { name: 'type', type: 'ROUTER_TYPE', isRequired: true }, 
        ip : { name: 'ip', type: 'String', isRequired: true }, 
        mac : { name: 'mac', type: 'String' }, 
        vlanId : { name: 'vlanId', type: 'String' }, 
        bgpPort : { name: 'bgpPort', type: 'Integer' }, 
        bgpPassword : { name: 'bgpPassword', type: 'String' }, 
        controlPlaneIp : { name: 'controlPlaneIp', type: 'String' }, 
        deviceId : { name: 'deviceId', type: 'String' }, 
        port : { name: 'port', type: 'Integer' }, 
        neighbourList : { name: 'neighbourList', type: 'Array', subType: 'SdnipRouterDTO' }
    }
}


//Mockup System for SdnipRouterDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterDTO';
var dto_name = 'SdnipRouterDTO';

function SdnipRouterDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterDTOData();
    }
}

function genSdnipRouterDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterDTODataInit;
exports.genData = genSdnipRouterDTOData;
exports.getData = getSdnipRouterDTOData;
exports.findData = findSdnipRouterDTOData;
exports.getListData = getSdnipRouterDTOListData;
exports.deleteData = deleteSdnipRouterDTOData;
exports.saveData = saveSdnipRouterDTOData;
exports.saveListData = saveSdnipRouterDTOListData;
exports.getAllData = getAllSdnipRouterDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterDTODataInit();
}

var overrideModule = '../overrides/SdnipRouterDTO';
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



