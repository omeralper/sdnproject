'use strict';

//Model Definition File for RoleResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var RoleDTO = require('./RoleDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Role detaylarının dönüldüğü veri yapısı.
*/
exports.RoleResponse =  {
    type:'class',
    name:'RoleResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'RoleDTO' }
    }
}


//Mockup System for RoleResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoleResponse';
var dto_name = 'RoleResponse';

function RoleResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoleResponseData();
    }
}

function genRoleResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoleResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoleResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoleResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoleResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoleResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoleResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoleResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = RoleResponseDataInit;
exports.genData = genRoleResponseData;
exports.getData = getRoleResponseData;
exports.findData = findRoleResponseData;
exports.getListData = getRoleResponseListData;
exports.deleteData = deleteRoleResponseData;
exports.saveData = saveRoleResponseData;
exports.saveListData = saveRoleResponseListData;
exports.getAllData = getAllRoleResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoleResponseDataInit();
}

var overrideModule = '../overrides/RoleResponse';
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



