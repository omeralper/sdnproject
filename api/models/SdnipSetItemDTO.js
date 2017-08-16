'use strict';

//Model Definition File for SdnipSetItemDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Eşleşecek eleman bilgilerini tutar
*/
exports.SdnipSetItemDTO =  {
    type:'class',
    name:'SdnipSetItemDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        item : { name: 'item', type: 'String', isRequired: true }
    }
}


//Mockup System for SdnipSetItemDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipSetItemDTO';
var dto_name = 'SdnipSetItemDTO';

function SdnipSetItemDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipSetItemDTOData();
    }
}

function genSdnipSetItemDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipSetItemDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipSetItemDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipSetItemDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipSetItemDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipSetItemDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipSetItemDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipSetItemDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipSetItemDTODataInit;
exports.genData = genSdnipSetItemDTOData;
exports.getData = getSdnipSetItemDTOData;
exports.findData = findSdnipSetItemDTOData;
exports.getListData = getSdnipSetItemDTOListData;
exports.deleteData = deleteSdnipSetItemDTOData;
exports.saveData = saveSdnipSetItemDTOData;
exports.saveListData = saveSdnipSetItemDTOListData;
exports.getAllData = getAllSdnipSetItemDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipSetItemDTODataInit();
}

var overrideModule = '../overrides/SdnipSetItemDTO';
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



