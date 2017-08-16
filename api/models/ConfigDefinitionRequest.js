'use strict';

//Model Definition File for ConfigDefinitionRequest.js

//var ConfigDefinitionDTO = require('./ConfigDefinitionDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Konfigürasyon tanımları işlemi istek veri yapısı.
*/
exports.ConfigDefinitionRequest =  {
    type:'class',
    name:'ConfigDefinitionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ConfigDefinitionDTO', isRequired: true }
    }
}


//Mockup System for ConfigDefinitionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDConfigDefinitionRequest';
var dto_name = 'ConfigDefinitionRequest';

function ConfigDefinitionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genConfigDefinitionRequestData();
    }
}

function genConfigDefinitionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getConfigDefinitionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getConfigDefinitionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findConfigDefinitionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteConfigDefinitionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveConfigDefinitionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveConfigDefinitionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllConfigDefinitionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ConfigDefinitionRequestDataInit;
exports.genData = genConfigDefinitionRequestData;
exports.getData = getConfigDefinitionRequestData;
exports.findData = findConfigDefinitionRequestData;
exports.getListData = getConfigDefinitionRequestListData;
exports.deleteData = deleteConfigDefinitionRequestData;
exports.saveData = saveConfigDefinitionRequestData;
exports.saveListData = saveConfigDefinitionRequestListData;
exports.getAllData = getAllConfigDefinitionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ConfigDefinitionRequestDataInit();
}

var overrideModule = '../overrides/ConfigDefinitionRequest';
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



