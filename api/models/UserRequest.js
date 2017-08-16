'use strict';

//Model Definition File for UserRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var UserDTO = require('./UserDTO');

'use strict';
/**
* Kullanıcı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.UserRequest =  {
    type:'class',
    name:'UserRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'UserDTO', isRequired: true }
    }
}


//Mockup System for UserRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserRequest';
var dto_name = 'UserRequest';

function UserRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserRequestData();
    }
}

function genUserRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = UserRequestDataInit;
exports.genData = genUserRequestData;
exports.getData = getUserRequestData;
exports.findData = findUserRequestData;
exports.getListData = getUserRequestListData;
exports.deleteData = deleteUserRequestData;
exports.saveData = saveUserRequestData;
exports.saveListData = saveUserRequestListData;
exports.getAllData = getAllUserRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserRequestDataInit();
}

var overrideModule = '../overrides/UserRequest';
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



