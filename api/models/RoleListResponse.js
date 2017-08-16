'use strict';

//Model Definition File for RoleListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var RoleListDTO = require('./RoleListDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Rol listeleme işleminin cevap veri yapısı.
*/
exports.RoleListResponse =  {
    type:'class',
    name:'RoleListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'RoleListDTO', isRequired: true }
    }
}


//Mockup System for RoleListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoleListResponse';
var dto_name = 'RoleListResponse';

function RoleListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoleListResponseData();
    }
}

function genRoleListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoleListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoleListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoleListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoleListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoleListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoleListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoleListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = RoleListResponseDataInit;
exports.genData = genRoleListResponseData;
exports.getData = getRoleListResponseData;
exports.findData = findRoleListResponseData;
exports.getListData = getRoleListResponseListData;
exports.deleteData = deleteRoleListResponseData;
exports.saveData = saveRoleListResponseData;
exports.saveListData = saveRoleListResponseListData;
exports.getAllData = getAllRoleListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoleListResponseDataInit();
}

var overrideModule = '../overrides/RoleListResponse';
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



