'use strict';

//Model Definition File for SdnipPrefixDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Eşleşme rota bilgilerini tutar
*/
exports.SdnipPrefixDTO =  {
    type:'class',
    name:'SdnipPrefixDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        ipPrefix : { name: 'ipPrefix', type: 'String', isRequired: true }, 
        minMaskLength : { name: 'minMaskLength', type: 'Integer', isRequired: true }, 
        maxMaskLength : { name: 'maxMaskLength', type: 'Integer', isRequired: true }
    }
}


//Mockup System for SdnipPrefixDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPrefixDTO';
var dto_name = 'SdnipPrefixDTO';

function SdnipPrefixDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPrefixDTOData();
    }
}

function genSdnipPrefixDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPrefixDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPrefixDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPrefixDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPrefixDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPrefixDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPrefixDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPrefixDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPrefixDTODataInit;
exports.genData = genSdnipPrefixDTOData;
exports.getData = getSdnipPrefixDTOData;
exports.findData = findSdnipPrefixDTOData;
exports.getListData = getSdnipPrefixDTOListData;
exports.deleteData = deleteSdnipPrefixDTOData;
exports.saveData = saveSdnipPrefixDTOData;
exports.saveListData = saveSdnipPrefixDTOListData;
exports.getAllData = getAllSdnipPrefixDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPrefixDTODataInit();
}

var overrideModule = '../overrides/SdnipPrefixDTO';
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



