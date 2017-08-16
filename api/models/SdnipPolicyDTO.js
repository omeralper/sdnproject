'use strict';

//Model Definition File for SdnipPolicyDTO.js

//var BaseDTO = require('./BaseDTO');
//var SdnipStatementListDTO = require('./SdnipStatementListDTO');

'use strict';
/**
* Eşleşme politikaları belirten modeldir.
*/
exports.SdnipPolicyDTO =  {
    type:'class',
    name:'SdnipPolicyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        statementList : { name: 'statementList', type: 'SdnipStatementListDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyDTO';
var dto_name = 'SdnipPolicyDTO';

function SdnipPolicyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyDTOData();
    }
}

function genSdnipPolicyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyDTODataInit;
exports.genData = genSdnipPolicyDTOData;
exports.getData = getSdnipPolicyDTOData;
exports.findData = findSdnipPolicyDTOData;
exports.getListData = getSdnipPolicyDTOListData;
exports.deleteData = deleteSdnipPolicyDTOData;
exports.saveData = saveSdnipPolicyDTOData;
exports.saveListData = saveSdnipPolicyDTOListData;
exports.getAllData = getAllSdnipPolicyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyDTODataInit();
}

var overrideModule = '../overrides/SdnipPolicyDTO';
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



