'use strict';

//Model Definition File for SfcTypeDTO.js

//var BaseDTO = require('./BaseDTO');
//var VnfdDTO = require('./VnfdDTO');

'use strict';
/**
* Sfc tipini tanımlayan veri modeli.
*/
exports.SfcTypeDTO =  {
    type:'class',
    name:'SfcTypeDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        sfcTypeId : { name: 'sfcTypeId', type: 'Integer' }, 
        sfcTypeName : { name: 'sfcTypeName', type: 'String' }, 
        vnfdList : { name: 'vnfdList', type: 'Array', subType: 'VnfdDTO' }
    }
}


//Mockup System for SfcTypeDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcTypeDTO';
var dto_name = 'SfcTypeDTO';

function SfcTypeDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcTypeDTOData();
    }
}

function genSfcTypeDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcTypeDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcTypeDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcTypeDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcTypeDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcTypeDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcTypeDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcTypeDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcTypeDTODataInit;
exports.genData = genSfcTypeDTOData;
exports.getData = getSfcTypeDTOData;
exports.findData = findSfcTypeDTOData;
exports.getListData = getSfcTypeDTOListData;
exports.deleteData = deleteSfcTypeDTOData;
exports.saveData = saveSfcTypeDTOData;
exports.saveListData = saveSfcTypeDTOListData;
exports.getAllData = getAllSfcTypeDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcTypeDTODataInit();
}

var overrideModule = '../overrides/SfcTypeDTO';
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



