'use strict';

//Model Definition File for AAAServerDTO.js

//var AAA_PROTOCOL = require('./AAA_PROTOCOL');
//var AddressInfo = require('./AddressInfo');
//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* AAA sunucu detaylarının bulunduğu veri yapısı.
*/
exports.AAAServerDTO =  {
    type:'class',
    name:'AAAServerDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        userName : { name: 'userName', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String', isRequired: true }, 
        secretKey : { name: 'secretKey', type: 'String' }, 
        notes : { name: 'notes', type: 'String' }, 
        address : { name: 'address', type: 'AddressInfo', isRequired: true }, 
        port : { name: 'port', type: 'Integer', isRequired: true }, 
        protocol : { name: 'protocol', type: 'AAA_PROTOCOL', isRequired: true }, 
        deadTime : { name: 'deadTime', type: 'Long', isRequired: true }, 
        retransmission : { name: 'retransmission', type: 'Integer', isRequired: true }, 
        ldapUseSSL : { name: 'ldapUseSSL', type: 'Boolean' }, 
        usingDB : { name: 'usingDB', type: 'Boolean' }, 
        created : { name: 'created', type: 'Date' }, 
        modified : { name: 'modified', type: 'Date' }
    }
}


//Mockup System for AAAServerDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAAAServerDTO';
var dto_name = 'AAAServerDTO';

function AAAServerDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAAAServerDTOData();
    }
}

function genAAAServerDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAAAServerDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAAAServerDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findAAAServerDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAAAServerDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAAAServerDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveAAAServerDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAAAServerDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = AAAServerDTODataInit;
exports.genData = genAAAServerDTOData;
exports.getData = getAAAServerDTOData;
exports.findData = findAAAServerDTOData;
exports.getListData = getAAAServerDTOListData;
exports.deleteData = deleteAAAServerDTOData;
exports.saveData = saveAAAServerDTOData;
exports.saveListData = saveAAAServerDTOListData;
exports.getAllData = getAllAAAServerDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    AAAServerDTODataInit();
}

var overrideModule = '../overrides/AAAServerDTO';
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



