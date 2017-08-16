'use strict';

//Model Definition File for SdnipActionDTO.js

//var BaseDTO = require('./BaseDTO');
//var SDNIP_ROUTE_ACTION = require('./SDNIP_ROUTE_ACTION');

'use strict';
/**
* Eşleşme gerçekleşmesi durumunda yapılacak işlemleri tanımlar.
*/
exports.SdnipActionDTO =  {
    type:'class',
    name:'SdnipActionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        routeAction : { name: 'routeAction', type: 'SDNIP_ROUTE_ACTION', isRequired: true }
    }
}


//Mockup System for SdnipActionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipActionDTO';
var dto_name = 'SdnipActionDTO';

function SdnipActionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipActionDTOData();
    }
}

function genSdnipActionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipActionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipActionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipActionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipActionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipActionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipActionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipActionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipActionDTODataInit;
exports.genData = genSdnipActionDTOData;
exports.getData = getSdnipActionDTOData;
exports.findData = findSdnipActionDTOData;
exports.getListData = getSdnipActionDTOListData;
exports.deleteData = deleteSdnipActionDTOData;
exports.saveData = saveSdnipActionDTOData;
exports.saveListData = saveSdnipActionDTOListData;
exports.getAllData = getAllSdnipActionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipActionDTODataInit();
}

var overrideModule = '../overrides/SdnipActionDTO';
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



