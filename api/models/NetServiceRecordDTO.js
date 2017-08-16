'use strict';

//Model Definition File for NetServiceRecordDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Ağ servis kayıtı bilgisinin bulunduğu veri yapısı.
*/
exports.NetServiceRecordDTO =  {
    type:'class',
    name:'NetServiceRecordDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        task : { name: 'task', type: 'String' }, 
        state : { name: 'state', type: 'String' }, 
        nsrVersion : { name: 'nsrVersion', type: 'String' }, 
        rawData : { name: 'rawData', type: 'String' }
    }
}


//Mockup System for NetServiceRecordDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordDTO';
var dto_name = 'NetServiceRecordDTO';

function NetServiceRecordDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordDTOData();
    }
}

function genNetServiceRecordDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordDTODataInit;
exports.genData = genNetServiceRecordDTOData;
exports.getData = getNetServiceRecordDTOData;
exports.findData = findNetServiceRecordDTOData;
exports.getListData = getNetServiceRecordDTOListData;
exports.deleteData = deleteNetServiceRecordDTOData;
exports.saveData = saveNetServiceRecordDTOData;
exports.saveListData = saveNetServiceRecordDTOListData;
exports.getAllData = getAllNetServiceRecordDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordDTODataInit();
}

var overrideModule = '../overrides/NetServiceRecordDTO';
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


