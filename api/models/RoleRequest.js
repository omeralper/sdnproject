'use strict';

//Model Definition File for RoleRequest.js

//var GenericRequest = require('./GenericRequest');
//var RoleDTO = require('./RoleDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Rol verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.RoleRequest =  {
    type:'class',
    name:'RoleRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'RoleDTO', isRequired: true }
    }
}


//Mockup System for RoleRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoleRequest';
var dto_name = 'RoleRequest';

function RoleRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoleRequestData();
    }
}

function genRoleRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoleRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoleRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoleRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoleRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoleRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoleRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoleRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = RoleRequestDataInit;
exports.genData = genRoleRequestData;
exports.getData = getRoleRequestData;
exports.findData = findRoleRequestData;
exports.getListData = getRoleRequestListData;
exports.deleteData = deleteRoleRequestData;
exports.saveData = saveRoleRequestData;
exports.saveListData = saveRoleRequestListData;
exports.getAllData = getAllRoleRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoleRequestDataInit();
}

var overrideModule = '../overrides/RoleRequest';
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



