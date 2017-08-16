'use strict';

//Model Definition File for SdnipPolicyAssignmentDTO.js

//var BaseDTO = require('./BaseDTO');
//var SDNIP_POLICY_TYPE = require('./SDNIP_POLICY_TYPE');
//var SDNIP_RESOURCE_TYPE = require('./SDNIP_RESOURCE_TYPE');
//var SDNIP_ROUTE_ACTION = require('./SDNIP_ROUTE_ACTION');
//var SdnipPolicyListDTO = require('./SdnipPolicyListDTO');

'use strict';
/**
* Politika tipine göre uygulanacak eşleşme politikalarını belirten modeldir.
*/
exports.SdnipPolicyAssignmentDTO =  {
    type:'class',
    name:'SdnipPolicyAssignmentDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        resourceType : { name: 'resourceType', type: 'SDNIP_RESOURCE_TYPE', isRequired: true }, 
        policyType : { name: 'policyType', type: 'SDNIP_POLICY_TYPE', isRequired: true }, 
        policyList : { name: 'policyList', type: 'SdnipPolicyListDTO', isRequired: true }, 
        defaultRouteAction : { name: 'defaultRouteAction', type: 'SDNIP_ROUTE_ACTION', isRequired: true }
    }
}


//Mockup System for SdnipPolicyAssignmentDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyAssignmentDTO';
var dto_name = 'SdnipPolicyAssignmentDTO';

function SdnipPolicyAssignmentDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyAssignmentDTOData();
    }
}

function genSdnipPolicyAssignmentDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyAssignmentDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyAssignmentDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyAssignmentDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyAssignmentDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyAssignmentDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyAssignmentDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyAssignmentDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyAssignmentDTODataInit;
exports.genData = genSdnipPolicyAssignmentDTOData;
exports.getData = getSdnipPolicyAssignmentDTOData;
exports.findData = findSdnipPolicyAssignmentDTOData;
exports.getListData = getSdnipPolicyAssignmentDTOListData;
exports.deleteData = deleteSdnipPolicyAssignmentDTOData;
exports.saveData = saveSdnipPolicyAssignmentDTOData;
exports.saveListData = saveSdnipPolicyAssignmentDTOListData;
exports.getAllData = getAllSdnipPolicyAssignmentDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyAssignmentDTODataInit();
}

var overrideModule = '../overrides/SdnipPolicyAssignmentDTO';
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



