'use strict';

//Model Definition File for ChangePwdRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kullanıcıların şifre değişikliği için kullanılan veri yapısı.
*/
exports.ChangePwdRequest =  {
    type:'class',
    name:'ChangePwdRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        oldPassword : { name: 'oldPassword', type: 'String', isRequired: true }, 
        newPassword : { name: 'newPassword', type: 'String', isRequired: true }
    }
}


//Mockup System for ChangePwdRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDChangePwdRequest';
var dto_name = 'ChangePwdRequest';

function ChangePwdRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genChangePwdRequestData();
    }
}

function genChangePwdRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getChangePwdRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getChangePwdRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findChangePwdRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteChangePwdRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveChangePwdRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveChangePwdRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllChangePwdRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ChangePwdRequestDataInit;
exports.genData = genChangePwdRequestData;
exports.getData = getChangePwdRequestData;
exports.findData = findChangePwdRequestData;
exports.getListData = getChangePwdRequestListData;
exports.deleteData = deleteChangePwdRequestData;
exports.saveData = saveChangePwdRequestData;
exports.saveListData = saveChangePwdRequestListData;
exports.getAllData = getAllChangePwdRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ChangePwdRequestDataInit();
}

var overrideModule = '../overrides/ChangePwdRequest';
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



