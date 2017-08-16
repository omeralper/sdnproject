'use strict';

//Model Definition File for NacSetUserPwdRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcıların şifresi değiştirmek için kullanılan veri yapısı.
*/
exports.NacSetUserPwdRequest =  {
    type:'class',
    name:'NacSetUserPwdRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }, 
        newPassword : { name: 'newPassword', type: 'String', isRequired: true }
    }
}


//Mockup System for NacSetUserPwdRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacSetUserPwdRequest';
var dto_name = 'NacSetUserPwdRequest';

function NacSetUserPwdRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacSetUserPwdRequestData();
    }
}

function genNacSetUserPwdRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacSetUserPwdRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacSetUserPwdRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacSetUserPwdRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacSetUserPwdRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacSetUserPwdRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacSetUserPwdRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacSetUserPwdRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacSetUserPwdRequestDataInit;
exports.genData = genNacSetUserPwdRequestData;
exports.getData = getNacSetUserPwdRequestData;
exports.findData = findNacSetUserPwdRequestData;
exports.getListData = getNacSetUserPwdRequestListData;
exports.deleteData = deleteNacSetUserPwdRequestData;
exports.saveData = saveNacSetUserPwdRequestData;
exports.saveListData = saveNacSetUserPwdRequestListData;
exports.getAllData = getAllNacSetUserPwdRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacSetUserPwdRequestDataInit();
}

var overrideModule = '../overrides/NacSetUserPwdRequest';
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



