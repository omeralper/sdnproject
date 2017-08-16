'use strict';

//Model Definition File for NacSessionCountResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacSessionCountDTO = require('./NacSessionCountDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Nac Session Count Response veri yapısı.
*/
exports.NacSessionCountResponse =  {
    type:'class',
    name:'NacSessionCountResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacSessionCountDTO', isRequired: true }
    }
}


//Mockup System for NacSessionCountResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacSessionCountResponse';
var dto_name = 'NacSessionCountResponse';

function NacSessionCountResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacSessionCountResponseData();
    }
}

function genNacSessionCountResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacSessionCountResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacSessionCountResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacSessionCountResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacSessionCountResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacSessionCountResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacSessionCountResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacSessionCountResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacSessionCountResponseDataInit;
exports.genData = genNacSessionCountResponseData;
exports.getData = getNacSessionCountResponseData;
exports.findData = findNacSessionCountResponseData;
exports.getListData = getNacSessionCountResponseListData;
exports.deleteData = deleteNacSessionCountResponseData;
exports.saveData = saveNacSessionCountResponseData;
exports.saveListData = saveNacSessionCountResponseListData;
exports.getAllData = getAllNacSessionCountResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacSessionCountResponseDataInit();
}

var overrideModule = '../overrides/NacSessionCountResponse';
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



