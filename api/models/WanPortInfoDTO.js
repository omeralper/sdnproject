'use strict';

//Model Definition File for WanPortInfoDTO.js

//var BW_UNIT = require('./BW_UNIT');
//var BaseDTO = require('./BaseDTO');
//var WAN_PORT_INFO_STATUS = require('./WAN_PORT_INFO_STATUS');
//var WAN_PORT_TYPE = require('./WAN_PORT_TYPE');

'use strict';
/**
* Geniş alan ağlarının gerişlerinin bilgi veri yapısı.
*/
exports.WanPortInfoDTO =  {
    type:'class',
    name:'WanPortInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        sourceSwitchId : { name: 'sourceSwitchId', type: 'String', isRequired: true }, 
        sourcePortNumber : { name: 'sourcePortNumber', type: 'Integer', isRequired: true }, 
        superPortNumber : { name: 'superPortNumber', type: 'Integer', isRequired: true }, 
        targetClusterName : { name: 'targetClusterName', type: 'String' }, 
        targetPortNumber : { name: 'targetPortNumber', type: 'Integer' }, 
        targetClusterId : { name: 'targetClusterId', type: 'Integer', isRequired: true }, 
        explanation : { name: 'explanation', type: 'String' }, 
        delay : { name: 'delay', type: 'String' }, 
        jitter : { name: 'jitter', type: 'String' }, 
        miss : { name: 'miss', type: 'String' }, 
        status : { name: 'status', type: 'WAN_PORT_INFO_STATUS' }, 
        linkSpeed : { name: 'linkSpeed', type: 'Integer', isRequired: true }, 
        linkType : { name: 'linkType', type: 'WAN_PORT_TYPE' }, 
        speedUnit : { name: 'speedUnit', type: 'BW_UNIT', isRequired: true }
    }
}


//Mockup System for WanPortInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoDTO';
var dto_name = 'WanPortInfoDTO';

function WanPortInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoDTOData();
    }
}

function genWanPortInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoDTODataInit;
exports.genData = genWanPortInfoDTOData;
exports.getData = getWanPortInfoDTOData;
exports.findData = findWanPortInfoDTOData;
exports.getListData = getWanPortInfoDTOListData;
exports.deleteData = deleteWanPortInfoDTOData;
exports.saveData = saveWanPortInfoDTOData;
exports.saveListData = saveWanPortInfoDTOListData;
exports.getAllData = getAllWanPortInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoDTODataInit();
}

var overrideModule = '../overrides/WanPortInfoDTO';
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



