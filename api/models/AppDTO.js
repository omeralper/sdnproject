'use strict';

//Model Definition File for AppDTO.js

//var AAA_STATUS = require('./AAA_STATUS');
//var BaseDTO = require('./BaseDTO');
//var RoleDTO = require('./RoleDTO');
//var UserDTO = require('./UserDTO');

'use strict';
/**
* Uygulama detaylarının bulunduğu veri yapısı.
*/
exports.AppDTO =  {
    type:'class',
    name:'AppDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        roleList : { name: 'roleList', type: 'Array', subType: 'RoleDTO', isRequired: true }, 
        userList : { name: 'userList', type: 'Array', subType: 'UserDTO', isRequired: true }, 
        maxUserCount : { name: 'maxUserCount', type: 'Integer', isRequired: true }, 
        status : { name: 'status', type: 'AAA_STATUS', isRequired: true }, 
        type : { name: 'type', type: 'Integer', isRequired: true }, 
        callCount : { name: 'callCount', type: 'Integer' }, 
        maxCallCount : { name: 'maxCallCount', type: 'Integer' }, 
        userCount : { name: 'userCount', type: 'Integer', isRequired: true }, 
        maxPolicyPriority : { name: 'maxPolicyPriority', type: 'Integer', isRequired: true }
    }
}


//Mockup System for AppDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAppDTO';
var dto_name = 'AppDTO';

function AppDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAppDTOData();
    }
}

function genAppDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAppDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAppDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAppDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAppDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAppDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAppDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAppDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AppDTODataInit;
exports.genData = genAppDTOData;
exports.getData = getAppDTOData;
exports.findData = findAppDTOData;
exports.getListData = getAppDTOListData;
exports.deleteData = deleteAppDTOData;
exports.saveData = saveAppDTOData;
exports.saveListData = saveAppDTOListData;
exports.getAllData = getAllAppDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AppDTODataInit();
}

var overrideModule = '../overrides/AppDTO';
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



