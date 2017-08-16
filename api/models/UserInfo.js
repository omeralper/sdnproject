'use strict';

//Model Definition File for UserInfo.js


'use strict';
/**
* Kullanıcı verisinin bulunduğu veri yapısı
*/
exports.UserInfo =  {
    type:'class',
    name:'UserInfo',
    fields: {
        userName : { name: 'userName', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        surname : { name: 'surname', type: 'String', isRequired: true }
    }
}


//Mockup System for UserInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserInfo';
var dto_name = 'UserInfo';

function UserInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserInfoData();
    }
}

function genUserInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = UserInfoDataInit;
exports.genData = genUserInfoData;
exports.getData = getUserInfoData;
exports.findData = findUserInfoData;
exports.getListData = getUserInfoListData;
exports.deleteData = deleteUserInfoData;
exports.saveData = saveUserInfoData;
exports.saveListData = saveUserInfoListData;
exports.getAllData = getAllUserInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserInfoDataInit();
}

var overrideModule = '../overrides/UserInfo';
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



