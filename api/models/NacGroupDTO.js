'use strict';

//Model Definition File for NacGroupDTO.js

//var AAAServerDTO = require('./AAAServerDTO');
//var AccessProfileDTO = require('./AccessProfileDTO');
//var BaseDTO = require('./BaseDTO');
//var MvtnDTO = require('./MvtnDTO');
//var NAC_ENTITY_TYPE = require('./NAC_ENTITY_TYPE');
//var NAC_STATUS = require('./NAC_STATUS');

'use strict';
/**
* Nac Grup detaylarının bulunduğu veri yapısı.
*/
exports.NacGroupDTO =  {
    type:'class',
    name:'NacGroupDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        notes : { name: 'notes', type: 'String' }, 
        groupType : { name: 'groupType', type: 'NAC_ENTITY_TYPE', isRequired: true }, 
        status : { name: 'status', type: 'NAC_STATUS', isRequired: true }, 
        accessPolicy : { name: 'accessPolicy', type: 'AccessProfileDTO', isRequired: true }, 
        aaaServer : { name: 'aaaServer', type: 'AAAServerDTO' }, 
        allowAutoBYOD : { name: 'allowAutoBYOD', type: 'Boolean' }, 
        userNumber : { name: 'userNumber', type: 'Integer' }, 
        onlineUserNumber : { name: 'onlineUserNumber', type: 'Integer' }, 
        virtualNetwork : { name: 'virtualNetwork', type: 'MvtnDTO' }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }, 
        priority : { name: 'priority', type: 'Integer' }
    }
}


//Mockup System for NacGroupDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacGroupDTO';
var dto_name = 'NacGroupDTO';

function NacGroupDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacGroupDTOData();
    }
}

function genNacGroupDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacGroupDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacGroupDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacGroupDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacGroupDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacGroupDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacGroupDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacGroupDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacGroupDTODataInit;
exports.genData = genNacGroupDTOData;
exports.getData = getNacGroupDTOData;
exports.findData = findNacGroupDTOData;
exports.getListData = getNacGroupDTOListData;
exports.deleteData = deleteNacGroupDTOData;
exports.saveData = saveNacGroupDTOData;
exports.saveListData = saveNacGroupDTOListData;
exports.getAllData = getAllNacGroupDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacGroupDTODataInit();
}

var overrideModule = '../overrides/NacGroupDTO';
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



