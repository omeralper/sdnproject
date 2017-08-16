'use strict';

//Model Definition File for SetPwdRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kullanıcıların şifresi değiştirmek için kullanılan veri yapısı.
*/
exports.SetPwdRequest =  {
    type:'class',
    name:'SetPwdRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }, 
        newPassword : { name: 'newPassword', type: 'String', isRequired: true }
    }
}


//Mockup System for SetPwdRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSetPwdRequest';
var dto_name = 'SetPwdRequest';

function SetPwdRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSetPwdRequestData();
    }
}

function genSetPwdRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSetPwdRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSetPwdRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSetPwdRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSetPwdRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSetPwdRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSetPwdRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSetPwdRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SetPwdRequestDataInit;
exports.genData = genSetPwdRequestData;
exports.getData = getSetPwdRequestData;
exports.findData = findSetPwdRequestData;
exports.getListData = getSetPwdRequestListData;
exports.deleteData = deleteSetPwdRequestData;
exports.saveData = saveSetPwdRequestData;
exports.saveListData = saveSetPwdRequestListData;
exports.getAllData = getAllSetPwdRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SetPwdRequestDataInit();
}

var overrideModule = '../overrides/SetPwdRequest';
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



