'use strict';

//Model Definition File for NacUserDTO.js

//var BaseDTO = require('./BaseDTO');
//var NAC_ENTITY_TYPE = require('./NAC_ENTITY_TYPE');
//var NAC_STATUS = require('./NAC_STATUS');
//var NacGroupDTO = require('./NacGroupDTO');

'use strict';
/**
* Son kullanıcı detaylarının bulunduğu veri yapısı.
*/
exports.NacUserDTO =  {
    type:'class',
    name:'NacUserDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        surname : { name: 'surname', type: 'String' }, 
        email : { name: 'email', type: 'String' }, 
        tcno : { name: 'tcno', type: 'String' }, 
        notes : { name: 'notes', type: 'String' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        userType : { name: 'userType', type: 'NAC_ENTITY_TYPE', isRequired: true }, 
        status : { name: 'status', type: 'NAC_STATUS', isRequired: true }, 
        image : { name: 'image', type: 'String' }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }, 
        lastAccess : { name: 'lastAccess', type: 'Date' }, 
        nacGroup : { name: 'nacGroup', type: 'NacGroupDTO' }, 
        byodNacGroup : { name: 'byodNacGroup', type: 'NacGroupDTO' }, 
        accessTimeStart : { name: 'accessTimeStart', type: 'Date' }, 
        accessTimeEnd : { name: 'accessTimeEnd', type: 'Date' }, 
        mvtnId : { name: 'mvtnId', type: 'Integer' }, 
        phoneNumber : { name: 'phoneNumber', type: 'String' }, 
        verifyKey : { name: 'verifyKey', type: 'String' }, 
        mvtnName : { name: 'mvtnName', type: 'String' }
    }
}


//Mockup System for NacUserDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDTO';
var dto_name = 'NacUserDTO';

function NacUserDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDTOData();
    }
}

function genNacUserDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDTODataInit;
exports.genData = genNacUserDTOData;
exports.getData = getNacUserDTOData;
exports.findData = findNacUserDTOData;
exports.getListData = getNacUserDTOListData;
exports.deleteData = deleteNacUserDTOData;
exports.saveData = saveNacUserDTOData;
exports.saveListData = saveNacUserDTOListData;
exports.getAllData = getAllNacUserDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDTODataInit();
}

var overrideModule = '../overrides/NacUserDTO';
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



