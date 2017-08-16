'use strict';

//Model Definition File for EndUserApplicationDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Son kullanıcı uygulama yönetiminin veri yapısı
*/
exports.EndUserApplicationDTO =  {
    type:'class',
    name:'EndUserApplicationDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        addresses : { name: 'addresses', type: 'Array', subType: 'string' }, 
        priority : { name: 'priority', type: 'Integer' }
    }
}


//Mockup System for EndUserApplicationDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEndUserApplicationDTO';
var dto_name = 'EndUserApplicationDTO';

function EndUserApplicationDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEndUserApplicationDTOData();
    }
}

function genEndUserApplicationDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEndUserApplicationDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEndUserApplicationDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findEndUserApplicationDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEndUserApplicationDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEndUserApplicationDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveEndUserApplicationDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEndUserApplicationDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = EndUserApplicationDTODataInit;
exports.genData = genEndUserApplicationDTOData;
exports.getData = getEndUserApplicationDTOData;
exports.findData = findEndUserApplicationDTOData;
exports.getListData = getEndUserApplicationDTOListData;
exports.deleteData = deleteEndUserApplicationDTOData;
exports.saveData = saveEndUserApplicationDTOData;
exports.saveListData = saveEndUserApplicationDTOListData;
exports.getAllData = getAllEndUserApplicationDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    EndUserApplicationDTODataInit();
}

var overrideModule = '../overrides/EndUserApplicationDTO';
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



