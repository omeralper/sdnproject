'use strict';

//Model Definition File for EmergencyPolicyDTO.js

//var BaseDTO = require('./BaseDTO');
//var VnfdDTO = require('./VnfdDTO');

'use strict';
/**
* Acil durum politikası bilgisinin bulunduğu veri yapısı.\&quot;
*/
exports.EmergencyPolicyDTO =  {
    type:'class',
    name:'EmergencyPolicyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        deviceLossRatio : { name: 'deviceLossRatio', type: 'Double' }, 
        trafficThreshold : { name: 'trafficThreshold', type: 'Double' }, 
        disableDomain : { name: 'disableDomain', type: 'Boolean' }, 
        emergencyPolicyId : { name: 'emergencyPolicyId', type: 'Long' }, 
        vnfToStart : { name: 'vnfToStart', type: 'Array', subType: 'VnfdDTO' }, 
        vnfToShutdown : { name: 'vnfToShutdown', type: 'Array', subType: 'VnfdDTO' }
    }
}


//Mockup System for EmergencyPolicyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEmergencyPolicyDTO';
var dto_name = 'EmergencyPolicyDTO';

function EmergencyPolicyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEmergencyPolicyDTOData();
    }
}

function genEmergencyPolicyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEmergencyPolicyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEmergencyPolicyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEmergencyPolicyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEmergencyPolicyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEmergencyPolicyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEmergencyPolicyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEmergencyPolicyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EmergencyPolicyDTODataInit;
exports.genData = genEmergencyPolicyDTOData;
exports.getData = getEmergencyPolicyDTOData;
exports.findData = findEmergencyPolicyDTOData;
exports.getListData = getEmergencyPolicyDTOListData;
exports.deleteData = deleteEmergencyPolicyDTOData;
exports.saveData = saveEmergencyPolicyDTOData;
exports.saveListData = saveEmergencyPolicyDTOListData;
exports.getAllData = getAllEmergencyPolicyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EmergencyPolicyDTODataInit();
}

var overrideModule = '../overrides/EmergencyPolicyDTO';
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



