'use strict';

//Model Definition File for NacLoginRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacLoginOpts = require('./NacLoginOpts');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı giriş işlemi için kullanılan veri yapısı.
*/
exports.NacLoginRequest =  {
    type:'class',
    name:'NacLoginRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacLoginOpts', isRequired: true }
    }
}


//Mockup System for NacLoginRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacLoginRequest';
var dto_name = 'NacLoginRequest';

function NacLoginRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacLoginRequestData();
    }
}

function genNacLoginRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacLoginRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacLoginRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacLoginRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacLoginRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacLoginRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacLoginRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacLoginRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacLoginRequestDataInit;
exports.genData = genNacLoginRequestData;
exports.getData = getNacLoginRequestData;
exports.findData = findNacLoginRequestData;
exports.getListData = getNacLoginRequestListData;
exports.deleteData = deleteNacLoginRequestData;
exports.saveData = saveNacLoginRequestData;
exports.saveListData = saveNacLoginRequestListData;
exports.getAllData = getAllNacLoginRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacLoginRequestDataInit();
}

var overrideModule = '../overrides/NacLoginRequest';
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



