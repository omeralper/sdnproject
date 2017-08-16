'use strict';

//Model Definition File for SdnipConditionDTO.js

//var BaseDTO = require('./BaseDTO');
//var SdnipMatchSetDTO = require('./SdnipMatchSetDTO');

'use strict';
/**
* Farklı eşleşme tipindeki listelerin bulunduğu modeldir.
*/
exports.SdnipConditionDTO =  {
    type:'class',
    name:'SdnipConditionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        prefixMatchSet : { name: 'prefixMatchSet', type: 'SdnipMatchSetDTO' }, 
        asPathMatchSet : { name: 'asPathMatchSet', type: 'SdnipMatchSetDTO' }, 
        neighborMatchSet : { name: 'neighborMatchSet', type: 'SdnipMatchSetDTO' }
    }
}


//Mockup System for SdnipConditionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipConditionDTO';
var dto_name = 'SdnipConditionDTO';

function SdnipConditionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipConditionDTOData();
    }
}

function genSdnipConditionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipConditionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipConditionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipConditionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipConditionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipConditionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipConditionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipConditionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipConditionDTODataInit;
exports.genData = genSdnipConditionDTOData;
exports.getData = getSdnipConditionDTOData;
exports.findData = findSdnipConditionDTOData;
exports.getListData = getSdnipConditionDTOListData;
exports.deleteData = deleteSdnipConditionDTOData;
exports.saveData = saveSdnipConditionDTOData;
exports.saveListData = saveSdnipConditionDTOListData;
exports.getAllData = getAllSdnipConditionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipConditionDTODataInit();
}

var overrideModule = '../overrides/SdnipConditionDTO';
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



