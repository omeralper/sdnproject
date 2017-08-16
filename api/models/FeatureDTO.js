'use strict';

//Model Definition File for FeatureDTO.js

//var BaseDTO = require('./BaseDTO');
//var CURRENT_STATUS = require('./CURRENT_STATUS');
//var PROCESSING_STATUS = require('./PROCESSING_STATUS');

'use strict';
/**
* feature detaylarının bulunduğu veri yapısı.
*/
exports.FeatureDTO =  {
    type:'class',
    name:'FeatureDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        processingStatus : { name: 'processingStatus', type: 'PROCESSING_STATUS' }, 
        currentStatus : { name: 'currentStatus', type: 'CURRENT_STATUS' }, 
        description : { name: 'description', type: 'String' }, 
        featureVersion : { name: 'featureVersion', type: 'String' }, 
        startTime : { name: 'startTime', type: 'Date' }, 
        isRequired : { name: 'isRequired', type: 'Boolean' }
    }
}


//Mockup System for FeatureDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureDTO';
var dto_name = 'FeatureDTO';

function FeatureDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureDTOData();
    }
}

function genFeatureDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureDTODataInit;
exports.genData = genFeatureDTOData;
exports.getData = getFeatureDTOData;
exports.findData = findFeatureDTOData;
exports.getListData = getFeatureDTOListData;
exports.deleteData = deleteFeatureDTOData;
exports.saveData = saveFeatureDTOData;
exports.saveListData = saveFeatureDTOListData;
exports.getAllData = getAllFeatureDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureDTODataInit();
}

var overrideModule = '../overrides/FeatureDTO';
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



