'use strict';

//Model Definition File for AllowedNacGroupsDTO.js

//var BaseDTO = require('./BaseDTO');
//var NacGroupDTO = require('./NacGroupDTO');

'use strict';
/**
* Erişim politikası için izinli NAC Grupları.
*/
exports.AllowedNacGroupsDTO =  {
    type:'class',
    name:'AllowedNacGroupsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        allowedNacGroups : { name: 'allowedNacGroups', type: 'Array', subType: 'NacGroupDTO' }, 
        allowAll : { name: 'allowAll', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for AllowedNacGroupsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAllowedNacGroupsDTO';
var dto_name = 'AllowedNacGroupsDTO';

function AllowedNacGroupsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAllowedNacGroupsDTOData();
    }
}

function genAllowedNacGroupsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAllowedNacGroupsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAllowedNacGroupsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAllowedNacGroupsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAllowedNacGroupsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAllowedNacGroupsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAllowedNacGroupsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAllowedNacGroupsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AllowedNacGroupsDTODataInit;
exports.genData = genAllowedNacGroupsDTOData;
exports.getData = getAllowedNacGroupsDTOData;
exports.findData = findAllowedNacGroupsDTOData;
exports.getListData = getAllowedNacGroupsDTOListData;
exports.deleteData = deleteAllowedNacGroupsDTOData;
exports.saveData = saveAllowedNacGroupsDTOData;
exports.saveListData = saveAllowedNacGroupsDTOListData;
exports.getAllData = getAllAllowedNacGroupsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AllowedNacGroupsDTODataInit();
}

var overrideModule = '../overrides/AllowedNacGroupsDTO';
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



