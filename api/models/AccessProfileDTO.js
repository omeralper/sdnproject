'use strict';

//Model Definition File for AccessProfileDTO.js

//var AccessPolicyDTO = require('./AccessPolicyDTO');
//var AllowedNacGroupsDTO = require('./AllowedNacGroupsDTO');
//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Erişim politikası bilgisinin bulunduğu veri yapısı.
*/
exports.AccessProfileDTO =  {
    type:'class',
    name:'AccessProfileDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        profileName : { name: 'profileName', type: 'String' }, 
        accessPolicies : { name: 'accessPolicies', type: 'Array', subType: 'AccessPolicyDTO' }, 
        profilePriority : { name: 'profilePriority', type: 'Integer' }, 
        allowedNacGroups : { name: 'allowedNacGroups', type: 'AllowedNacGroupsDTO' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }
    }
}


//Mockup System for AccessProfileDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileDTO';
var dto_name = 'AccessProfileDTO';

function AccessProfileDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileDTOData();
    }
}

function genAccessProfileDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileDTODataInit;
exports.genData = genAccessProfileDTOData;
exports.getData = getAccessProfileDTOData;
exports.findData = findAccessProfileDTOData;
exports.getListData = getAccessProfileDTOListData;
exports.deleteData = deleteAccessProfileDTOData;
exports.saveData = saveAccessProfileDTOData;
exports.saveListData = saveAccessProfileDTOListData;
exports.getAllData = getAllAccessProfileDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileDTODataInit();
}

var overrideModule = '../overrides/AccessProfileDTO';
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



