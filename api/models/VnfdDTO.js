'use strict';

//Model Definition File for VnfdDTO.js

//var BaseDTO = require('./BaseDTO');
//var VNFD_TYPE = require('./VNFD_TYPE');

'use strict';
/**
* Vnfd veri modeli.
*/
exports.VnfdDTO =  {
    type:'class',
    name:'VnfdDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vnfdId : { name: 'vnfdId', type: 'String' }, 
        vnfdName : { name: 'vnfdName', type: 'String' }, 
        vnfdType : { name: 'vnfdType', type: 'VNFD_TYPE' }, 
        metaData : { name: 'metaData', type: 'String' }
    }
}


//Mockup System for VnfdDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdDTO';
var dto_name = 'VnfdDTO';

function VnfdDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdDTOData();
    }
}

function genVnfdDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdDTODataInit;
exports.genData = genVnfdDTOData;
exports.getData = getVnfdDTOData;
exports.findData = findVnfdDTOData;
exports.getListData = getVnfdDTOListData;
exports.deleteData = deleteVnfdDTOData;
exports.saveData = saveVnfdDTOData;
exports.saveListData = saveVnfdDTOListData;
exports.getAllData = getAllVnfdDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdDTODataInit();
}

var overrideModule = '../overrides/VnfdDTO';
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



