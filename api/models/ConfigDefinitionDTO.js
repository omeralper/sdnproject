'use strict';

//Model Definition File for ConfigDefinitionDTO.js

//var BaseDTO = require('./BaseDTO');
//var CONFIG_VALUE_TYPE = require('./CONFIG_VALUE_TYPE');
//var NODE_TYPE = require('./NODE_TYPE');

'use strict';
/**
* Konfigürasyon tanımı veri modeli.
*/
exports.ConfigDefinitionDTO =  {
    type:'class',
    name:'ConfigDefinitionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        definitionId : { name: 'definitionId', type: 'Integer' }, 
        nodeType : { name: 'nodeType', type: 'NODE_TYPE', isRequired: true }, 
        componentName : { name: 'componentName', type: 'String', isRequired: true }, 
        configKey : { name: 'configKey', type: 'String', isRequired: true }, 
        valueType : { name: 'valueType', type: 'CONFIG_VALUE_TYPE', isRequired: true }, 
        defaultValue : { name: 'defaultValue', type: 'String' }, 
        description : { name: 'description', type: 'String' }
    }
}


//Mockup System for ConfigDefinitionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDConfigDefinitionDTO';
var dto_name = 'ConfigDefinitionDTO';

function ConfigDefinitionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genConfigDefinitionDTOData();
    }
}

function genConfigDefinitionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getConfigDefinitionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getConfigDefinitionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findConfigDefinitionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteConfigDefinitionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveConfigDefinitionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveConfigDefinitionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllConfigDefinitionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ConfigDefinitionDTODataInit;
exports.genData = genConfigDefinitionDTOData;
exports.getData = getConfigDefinitionDTOData;
exports.findData = findConfigDefinitionDTOData;
exports.getListData = getConfigDefinitionDTOListData;
exports.deleteData = deleteConfigDefinitionDTOData;
exports.saveData = saveConfigDefinitionDTOData;
exports.saveListData = saveConfigDefinitionDTOListData;
exports.getAllData = getAllConfigDefinitionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ConfigDefinitionDTODataInit();
}

var overrideModule = '../overrides/ConfigDefinitionDTO';
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



