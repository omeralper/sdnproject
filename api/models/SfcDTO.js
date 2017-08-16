'use strict';

//Model Definition File for SfcDTO.js

//var BaseDTO = require('./BaseDTO');
//var SFC_STATUS = require('./SFC_STATUS');
//var VnfrDTO = require('./VnfrDTO');

'use strict';
/**
* Sfc veri modeli.
*/
exports.SfcDTO =  {
    type:'class',
    name:'SfcDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        sfcId : { name: 'sfcId', type: 'Long' }, 
        sfcName : { name: 'sfcName', type: 'String' }, 
        sfcTypeId : { name: 'sfcTypeId', type: 'Integer' }, 
        sfcTypeName : { name: 'sfcTypeName', type: 'String' }, 
        sfcStatus : { name: 'sfcStatus', type: 'SFC_STATUS' }, 
        vnfrList : { name: 'vnfrList', type: 'Array', subType: 'VnfrDTO' }
    }
}


//Mockup System for SfcDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcDTO';
var dto_name = 'SfcDTO';

function SfcDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcDTOData();
    }
}

function genSfcDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcDTODataInit;
exports.genData = genSfcDTOData;
exports.getData = getSfcDTOData;
exports.findData = findSfcDTOData;
exports.getListData = getSfcDTOListData;
exports.deleteData = deleteSfcDTOData;
exports.saveData = saveSfcDTOData;
exports.saveListData = saveSfcDTOListData;
exports.getAllData = getAllSfcDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcDTODataInit();
}

var overrideModule = '../overrides/SfcDTO';
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



