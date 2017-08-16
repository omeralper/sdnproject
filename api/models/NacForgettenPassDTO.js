'use strict';

//Model Definition File for NacForgettenPassDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Son kullanıcı şifre unuttum DTOsu.
*/
exports.NacForgettenPassDTO =  {
    type:'class',
    name:'NacForgettenPassDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        mail : { name: 'mail', type: 'String' }, 
        phoneNumber : { name: 'phoneNumber', type: 'String' }
    }
}


//Mockup System for NacForgettenPassDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacForgettenPassDTO';
var dto_name = 'NacForgettenPassDTO';

function NacForgettenPassDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacForgettenPassDTOData();
    }
}

function genNacForgettenPassDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacForgettenPassDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacForgettenPassDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacForgettenPassDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacForgettenPassDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacForgettenPassDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacForgettenPassDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacForgettenPassDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacForgettenPassDTODataInit;
exports.genData = genNacForgettenPassDTOData;
exports.getData = getNacForgettenPassDTOData;
exports.findData = findNacForgettenPassDTOData;
exports.getListData = getNacForgettenPassDTOListData;
exports.deleteData = deleteNacForgettenPassDTOData;
exports.saveData = saveNacForgettenPassDTOData;
exports.saveListData = saveNacForgettenPassDTOListData;
exports.getAllData = getAllNacForgettenPassDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacForgettenPassDTODataInit();
}

var overrideModule = '../overrides/NacForgettenPassDTO';
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



