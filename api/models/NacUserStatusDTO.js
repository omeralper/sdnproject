'use strict';

//Model Definition File for NacUserStatusDTO.js

//var BaseDTO = require('./BaseDTO');
//var NAC_STATUS = require('./NAC_STATUS');

'use strict';
/**
* Son kullanıcı durum detaylarının bulunduğu veri yapısı.
*/
exports.NacUserStatusDTO =  {
    type:'class',
    name:'NacUserStatusDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'NAC_STATUS', isRequired: true }, 
        ipv4 : { name: 'ipv4', type: 'String' }
    }
}


//Mockup System for NacUserStatusDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserStatusDTO';
var dto_name = 'NacUserStatusDTO';

function NacUserStatusDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserStatusDTOData();
    }
}

function genNacUserStatusDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserStatusDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserStatusDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserStatusDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserStatusDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserStatusDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserStatusDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserStatusDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserStatusDTODataInit;
exports.genData = genNacUserStatusDTOData;
exports.getData = getNacUserStatusDTOData;
exports.findData = findNacUserStatusDTOData;
exports.getListData = getNacUserStatusDTOListData;
exports.deleteData = deleteNacUserStatusDTOData;
exports.saveData = saveNacUserStatusDTOData;
exports.saveListData = saveNacUserStatusDTOListData;
exports.getAllData = getAllNacUserStatusDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserStatusDTODataInit();
}

var overrideModule = '../overrides/NacUserStatusDTO';
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



