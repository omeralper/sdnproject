'use strict';

//Model Definition File for UserResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var UserDTO = require('./UserDTO');

'use strict';
/**
* Kullanıcı detaylarının dönüldüğü veri yapısı.
*/
exports.UserResponse =  {
    type:'class',
    name:'UserResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'UserDTO' }
    }
}


//Mockup System for UserResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserResponse';
var dto_name = 'UserResponse';

function UserResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserResponseData();
    }
}

function genUserResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = UserResponseDataInit;
exports.genData = genUserResponseData;
exports.getData = getUserResponseData;
exports.findData = findUserResponseData;
exports.getListData = getUserResponseListData;
exports.deleteData = deleteUserResponseData;
exports.saveData = saveUserResponseData;
exports.saveListData = saveUserResponseListData;
exports.getAllData = getAllUserResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserResponseDataInit();
}

var overrideModule = '../overrides/UserResponse';
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



