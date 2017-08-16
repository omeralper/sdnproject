'use strict';

//Model Definition File for SdnipDefinedSetDTO.js

//var BaseDTO = require('./BaseDTO');
//var SDNIP_DEFINED_SET_TYPE = require('./SDNIP_DEFINED_SET_TYPE');
//var SdnipPrefixListDTO = require('./SdnipPrefixListDTO');
//var SdnipSetItemListDTO = require('./SdnipSetItemListDTO');

'use strict';
/**
* Eşleşme listesinin bulunduğu veri yapısı.
*/
exports.SdnipDefinedSetDTO =  {
    type:'class',
    name:'SdnipDefinedSetDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        definedSetType : { name: 'definedSetType', type: 'SDNIP_DEFINED_SET_TYPE', isRequired: true }, 
        list : { name: 'list', type: 'SdnipSetItemListDTO' }, 
        prefixList : { name: 'prefixList', type: 'SdnipPrefixListDTO' }
    }
}


//Mockup System for SdnipDefinedSetDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipDefinedSetDTO';
var dto_name = 'SdnipDefinedSetDTO';

function SdnipDefinedSetDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipDefinedSetDTOData();
    }
}

function genSdnipDefinedSetDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipDefinedSetDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipDefinedSetDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipDefinedSetDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipDefinedSetDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipDefinedSetDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipDefinedSetDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipDefinedSetDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipDefinedSetDTODataInit;
exports.genData = genSdnipDefinedSetDTOData;
exports.getData = getSdnipDefinedSetDTOData;
exports.findData = findSdnipDefinedSetDTOData;
exports.getListData = getSdnipDefinedSetDTOListData;
exports.deleteData = deleteSdnipDefinedSetDTOData;
exports.saveData = saveSdnipDefinedSetDTOData;
exports.saveListData = saveSdnipDefinedSetDTOListData;
exports.getAllData = getAllSdnipDefinedSetDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipDefinedSetDTODataInit();
}

var overrideModule = '../overrides/SdnipDefinedSetDTO';
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



