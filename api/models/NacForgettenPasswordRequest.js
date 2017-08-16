'use strict';

//Model Definition File for NacForgettenPasswordRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacForgettenPassDTO = require('./NacForgettenPassDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı şifremi unuttum isteği.
*/
exports.NacForgettenPasswordRequest =  {
    type:'class',
    name:'NacForgettenPasswordRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacForgettenPassDTO' }
    }
}


//Mockup System for NacForgettenPasswordRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacForgettenPasswordRequest';
var dto_name = 'NacForgettenPasswordRequest';

function NacForgettenPasswordRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacForgettenPasswordRequestData();
    }
}

function genNacForgettenPasswordRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacForgettenPasswordRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacForgettenPasswordRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacForgettenPasswordRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacForgettenPasswordRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacForgettenPasswordRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacForgettenPasswordRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacForgettenPasswordRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacForgettenPasswordRequestDataInit;
exports.genData = genNacForgettenPasswordRequestData;
exports.getData = getNacForgettenPasswordRequestData;
exports.findData = findNacForgettenPasswordRequestData;
exports.getListData = getNacForgettenPasswordRequestListData;
exports.deleteData = deleteNacForgettenPasswordRequestData;
exports.saveData = saveNacForgettenPasswordRequestData;
exports.saveListData = saveNacForgettenPasswordRequestListData;
exports.getAllData = getAllNacForgettenPasswordRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacForgettenPasswordRequestDataInit();
}

var overrideModule = '../overrides/NacForgettenPasswordRequest';
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



