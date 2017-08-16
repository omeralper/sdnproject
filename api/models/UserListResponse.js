'use strict';

//Model Definition File for UserListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var UserListDTO = require('./UserListDTO');

'use strict';
/**
* Kullanıcı listeleme işleminin cevap veri yapısı.
*/
exports.UserListResponse =  {
    type:'class',
    name:'UserListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'UserListDTO', isRequired: true }
    }
}


//Mockup System for UserListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserListResponse';
var dto_name = 'UserListResponse';

function UserListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserListResponseData();
    }
}

function genUserListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = UserListResponseDataInit;
exports.genData = genUserListResponseData;
exports.getData = getUserListResponseData;
exports.findData = findUserListResponseData;
exports.getListData = getUserListResponseListData;
exports.deleteData = deleteUserListResponseData;
exports.saveData = saveUserListResponseData;
exports.saveListData = saveUserListResponseListData;
exports.getAllData = getAllUserListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserListResponseDataInit();
}

var overrideModule = '../overrides/UserListResponse';
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



