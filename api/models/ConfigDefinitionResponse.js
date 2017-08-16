'use strict';

//Model Definition File for ConfigDefinitionResponse.js

//var ConfigDefinitionDTO = require('./ConfigDefinitionDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Konfigürasyon tanımları işleminin cevap veri yapısı.
*/
exports.ConfigDefinitionResponse =  {
    type:'class',
    name:'ConfigDefinitionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ConfigDefinitionDTO', isRequired: true }
    }
}


//Mockup System for ConfigDefinitionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDConfigDefinitionResponse';
var dto_name = 'ConfigDefinitionResponse';

function ConfigDefinitionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genConfigDefinitionResponseData();
    }
}

function genConfigDefinitionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getConfigDefinitionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getConfigDefinitionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findConfigDefinitionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteConfigDefinitionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveConfigDefinitionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveConfigDefinitionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllConfigDefinitionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ConfigDefinitionResponseDataInit;
exports.genData = genConfigDefinitionResponseData;
exports.getData = getConfigDefinitionResponseData;
exports.findData = findConfigDefinitionResponseData;
exports.getListData = getConfigDefinitionResponseListData;
exports.deleteData = deleteConfigDefinitionResponseData;
exports.saveData = saveConfigDefinitionResponseData;
exports.saveListData = saveConfigDefinitionResponseListData;
exports.getAllData = getAllConfigDefinitionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ConfigDefinitionResponseDataInit();
}

var overrideModule = '../overrides/ConfigDefinitionResponse';
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



