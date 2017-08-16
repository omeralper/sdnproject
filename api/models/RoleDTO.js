'use strict';

//Model Definition File for RoleDTO.js

//var AAA_STATUS = require('./AAA_STATUS');
//var BaseDTO = require('./BaseDTO');
//var PermDTO = require('./PermDTO');

'use strict';
/**
* Rol Detaylarının bulunduğu veri yapısı.
*/
exports.RoleDTO =  {
    type:'class',
    name:'RoleDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        notes : { name: 'notes', type: 'String' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        status : { name: 'status', type: 'AAA_STATUS', isRequired: true }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }, 
        permList : { name: 'permList', type: 'Array', subType: 'PermDTO' }, 
        appId : { name: 'appId', type: 'Long' }
    }
}


//Mockup System for RoleDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoleDTO';
var dto_name = 'RoleDTO';

function RoleDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoleDTOData();
    }
}

function genRoleDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoleDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoleDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoleDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoleDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoleDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoleDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoleDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = RoleDTODataInit;
exports.genData = genRoleDTOData;
exports.getData = getRoleDTOData;
exports.findData = findRoleDTOData;
exports.getListData = getRoleDTOListData;
exports.deleteData = deleteRoleDTOData;
exports.saveData = saveRoleDTOData;
exports.saveListData = saveRoleDTOListData;
exports.getAllData = getAllRoleDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoleDTODataInit();
}

var overrideModule = '../overrides/RoleDTO';
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



