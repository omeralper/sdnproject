'use strict';

//Model Definition File for AccessPolicyDTO.js

//var ACCESS_ACTION_TYPE = require('./ACCESS_ACTION_TYPE');
//var BaseDTO = require('./BaseDTO');
//var CommonHeaderCriteriaInfo = require('./CommonHeaderCriteriaInfo');
//var PacketHeaderCriteriaInfo = require('./PacketHeaderCriteriaInfo');
//var ScheduleCriteriaInfo = require('./ScheduleCriteriaInfo');
//var ServiceActionDTO = require('./ServiceActionDTO');

'use strict';
/**
* Erişim politikası bilgilerinin bulundugu veri modeli.
*/
exports.AccessPolicyDTO =  {
    type:'class',
    name:'AccessPolicyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        policyName : { name: 'policyName', type: 'String' }, 
        priority : { name: 'priority', type: 'Integer' }, 
        criteriaCount : { name: 'criteriaCount', type: 'Integer' }, 
        creationTime : { name: 'creationTime', type: 'Date' }, 
        updateTime : { name: 'updateTime', type: 'Date' }, 
        packetHeaderCriteria : { name: 'packetHeaderCriteria', type: 'PacketHeaderCriteriaInfo' }, 
        schedulerCriteria : { name: 'schedulerCriteria', type: 'ScheduleCriteriaInfo' }, 
        serviceAction : { name: 'serviceAction', type: 'ServiceActionDTO' }, 
        accessPolicyAction : { name: 'accessPolicyAction', type: 'ACCESS_ACTION_TYPE' }, 
        conflictedPolicyIds : { name: 'conflictedPolicyIds', type: 'Array', subType: 'string' }, 
        userIds : { name: 'userIds', type: 'CommonHeaderCriteriaInfo' }
    }
}


//Mockup System for AccessPolicyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyDTO';
var dto_name = 'AccessPolicyDTO';

function AccessPolicyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyDTOData();
    }
}

function genAccessPolicyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyDTODataInit;
exports.genData = genAccessPolicyDTOData;
exports.getData = getAccessPolicyDTOData;
exports.findData = findAccessPolicyDTOData;
exports.getListData = getAccessPolicyDTOListData;
exports.deleteData = deleteAccessPolicyDTOData;
exports.saveData = saveAccessPolicyDTOData;
exports.saveListData = saveAccessPolicyDTOListData;
exports.getAllData = getAllAccessPolicyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyDTODataInit();
}

var overrideModule = '../overrides/AccessPolicyDTO';
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



