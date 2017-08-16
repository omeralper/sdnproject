'use strict';

//Model Definition File for SdnipStatementDTO.js

//var BaseDTO = require('./BaseDTO');
//var SdnipActionDTO = require('./SdnipActionDTO');
//var SdnipConditionDTO = require('./SdnipConditionDTO');

'use strict';
/**
* Durum ve durum için uygulanacak aksiyonu belirten modeldir.
*/
exports.SdnipStatementDTO =  {
    type:'class',
    name:'SdnipStatementDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        action : { name: 'action', type: 'SdnipActionDTO', isRequired: true }, 
        condition : { name: 'condition', type: 'SdnipConditionDTO', isRequired: true }
    }
}


//Mockup System for SdnipStatementDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipStatementDTO';
var dto_name = 'SdnipStatementDTO';

function SdnipStatementDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipStatementDTOData();
    }
}

function genSdnipStatementDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipStatementDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipStatementDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipStatementDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipStatementDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipStatementDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipStatementDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipStatementDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipStatementDTODataInit;
exports.genData = genSdnipStatementDTOData;
exports.getData = getSdnipStatementDTOData;
exports.findData = findSdnipStatementDTOData;
exports.getListData = getSdnipStatementDTOListData;
exports.deleteData = deleteSdnipStatementDTOData;
exports.saveData = saveSdnipStatementDTOData;
exports.saveListData = saveSdnipStatementDTOListData;
exports.getAllData = getAllSdnipStatementDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipStatementDTODataInit();
}

var overrideModule = '../overrides/SdnipStatementDTO';
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



