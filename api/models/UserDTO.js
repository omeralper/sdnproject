'use strict';

//Model Definition File for UserDTO.js

//var AAA_STATUS = require('./AAA_STATUS');
//var BaseDTO = require('./BaseDTO');
//var PermDTO = require('./PermDTO');
//var RoleDTO = require('./RoleDTO');

'use strict';
/**
* Kullanıcı Detaylarının bulunduğu veri yapısı.
*/
exports.UserDTO =  {
    type:'class',
    name:'UserDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        surname : { name: 'surname', type: 'String' }, 
        email : { name: 'email', type: 'String' }, 
        notes : { name: 'notes', type: 'String' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        status : { name: 'status', type: 'AAA_STATUS', isRequired: true }, 
        image : { name: 'image', type: 'String' }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }, 
        lastAccess : { name: 'lastAccess', type: 'Date' }, 
        roleList : { name: 'roleList', type: 'Array', subType: 'RoleDTO' }, 
        permList : { name: 'permList', type: 'Array', subType: 'PermDTO' }, 
        appId : { name: 'appId', type: 'Long' }, 
        parentUserId : { name: 'parentUserId', type: 'Long' }, 
        type : { name: 'type', type: 'Integer' }
    }
}


//Mockup System for UserDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserDTO';
var dto_name = 'UserDTO';

function UserDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserDTOData();
    }
}

function genUserDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = UserDTODataInit;
exports.genData = genUserDTOData;
exports.getData = getUserDTOData;
exports.findData = findUserDTOData;
exports.getListData = getUserDTOListData;
exports.deleteData = deleteUserDTOData;
exports.saveData = saveUserDTOData;
exports.saveListData = saveUserDTOListData;
exports.getAllData = getAllUserDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserDTODataInit();
}

var overrideModule = '../overrides/UserDTO';
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



