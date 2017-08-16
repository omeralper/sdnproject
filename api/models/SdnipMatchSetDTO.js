'use strict';

//Model Definition File for SdnipMatchSetDTO.js

//var BaseDTO = require('./BaseDTO');
//var SDNIP_MATCH_TYPE = require('./SDNIP_MATCH_TYPE');
//var SdnipDefinedSetDTO = require('./SdnipDefinedSetDTO');

'use strict';
/**
* Eşleşme listesi için eşleşme tipini tutan modeldir.
*/
exports.SdnipMatchSetDTO =  {
    type:'class',
    name:'SdnipMatchSetDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        definedSet : { name: 'definedSet', type: 'SdnipDefinedSetDTO', isRequired: true }, 
        matchType : { name: 'matchType', type: 'SDNIP_MATCH_TYPE', isRequired: true }
    }
}


//Mockup System for SdnipMatchSetDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipMatchSetDTO';
var dto_name = 'SdnipMatchSetDTO';

function SdnipMatchSetDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipMatchSetDTOData();
    }
}

function genSdnipMatchSetDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipMatchSetDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipMatchSetDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipMatchSetDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipMatchSetDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipMatchSetDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipMatchSetDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipMatchSetDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipMatchSetDTODataInit;
exports.genData = genSdnipMatchSetDTOData;
exports.getData = getSdnipMatchSetDTOData;
exports.findData = findSdnipMatchSetDTOData;
exports.getListData = getSdnipMatchSetDTOListData;
exports.deleteData = deleteSdnipMatchSetDTOData;
exports.saveData = saveSdnipMatchSetDTOData;
exports.saveListData = saveSdnipMatchSetDTOListData;
exports.getAllData = getAllSdnipMatchSetDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipMatchSetDTODataInit();
}

var overrideModule = '../overrides/SdnipMatchSetDTO';
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



