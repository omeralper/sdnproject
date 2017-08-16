'use strict';

//Model Definition File for NacChangeUserPwdRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcıların şifre değişikliği için kullanılan veri yapısı.
*/
exports.NacChangeUserPwdRequest =  {
    type:'class',
    name:'NacChangeUserPwdRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        oldPassword : { name: 'oldPassword', type: 'String', isRequired: true }, 
        newPassword : { name: 'newPassword', type: 'String', isRequired: true }
    }
}


//Mockup System for NacChangeUserPwdRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacChangeUserPwdRequest';
var dto_name = 'NacChangeUserPwdRequest';

function NacChangeUserPwdRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacChangeUserPwdRequestData();
    }
}

function genNacChangeUserPwdRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacChangeUserPwdRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacChangeUserPwdRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacChangeUserPwdRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacChangeUserPwdRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacChangeUserPwdRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacChangeUserPwdRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacChangeUserPwdRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacChangeUserPwdRequestDataInit;
exports.genData = genNacChangeUserPwdRequestData;
exports.getData = getNacChangeUserPwdRequestData;
exports.findData = findNacChangeUserPwdRequestData;
exports.getListData = getNacChangeUserPwdRequestListData;
exports.deleteData = deleteNacChangeUserPwdRequestData;
exports.saveData = saveNacChangeUserPwdRequestData;
exports.saveListData = saveNacChangeUserPwdRequestListData;
exports.getAllData = getAllNacChangeUserPwdRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacChangeUserPwdRequestDataInit();
}

var overrideModule = '../overrides/NacChangeUserPwdRequest';
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



