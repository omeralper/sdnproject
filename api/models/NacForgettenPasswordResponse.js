'use strict';

//Model Definition File for NacForgettenPasswordResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacForgettenPassDTO = require('./NacForgettenPassDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı detaylarının dönüldüğü veri yapısı.
*/
exports.NacForgettenPasswordResponse =  {
    type:'class',
    name:'NacForgettenPasswordResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacForgettenPassDTO' }
    }
}


//Mockup System for NacForgettenPasswordResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacForgettenPasswordResponse';
var dto_name = 'NacForgettenPasswordResponse';

function NacForgettenPasswordResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacForgettenPasswordResponseData();
    }
}

function genNacForgettenPasswordResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacForgettenPasswordResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacForgettenPasswordResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacForgettenPasswordResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacForgettenPasswordResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacForgettenPasswordResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacForgettenPasswordResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacForgettenPasswordResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacForgettenPasswordResponseDataInit;
exports.genData = genNacForgettenPasswordResponseData;
exports.getData = getNacForgettenPasswordResponseData;
exports.findData = findNacForgettenPasswordResponseData;
exports.getListData = getNacForgettenPasswordResponseListData;
exports.deleteData = deleteNacForgettenPasswordResponseData;
exports.saveData = saveNacForgettenPasswordResponseData;
exports.saveListData = saveNacForgettenPasswordResponseListData;
exports.getAllData = getAllNacForgettenPasswordResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacForgettenPasswordResponseDataInit();
}

var overrideModule = '../overrides/NacForgettenPasswordResponse';
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



