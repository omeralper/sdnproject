'use strict';

//Model Definition File for NacSessionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacSessionDTO = require('./NacSessionDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Nac Session Response veri yapısı.
*/
exports.NacSessionResponse =  {
    type:'class',
    name:'NacSessionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacSessionDTO', isRequired: true }
    }
}


//Mockup System for NacSessionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacSessionResponse';
var dto_name = 'NacSessionResponse';

function NacSessionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacSessionResponseData();
    }
}

function genNacSessionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacSessionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacSessionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacSessionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacSessionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacSessionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacSessionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacSessionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacSessionResponseDataInit;
exports.genData = genNacSessionResponseData;
exports.getData = getNacSessionResponseData;
exports.findData = findNacSessionResponseData;
exports.getListData = getNacSessionResponseListData;
exports.deleteData = deleteNacSessionResponseData;
exports.saveData = saveNacSessionResponseData;
exports.saveListData = saveNacSessionResponseListData;
exports.getAllData = getAllNacSessionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacSessionResponseDataInit();
}

var overrideModule = '../overrides/NacSessionResponse';
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



