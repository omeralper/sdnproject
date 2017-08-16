'use strict';

//Model Definition File for IndicatorsResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var IndicatorsResponseDTO = require('./IndicatorsResponseDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Basit Kontrolcü listeleme işleminin cevap veri yapısı.
*/
exports.IndicatorsResponse =  {
    type:'class',
    name:'IndicatorsResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'IndicatorsResponseDTO', isRequired: true }
    }
}


//Mockup System for IndicatorsResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIndicatorsResponse';
var dto_name = 'IndicatorsResponse';

function IndicatorsResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIndicatorsResponseData();
    }
}

function genIndicatorsResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIndicatorsResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIndicatorsResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findIndicatorsResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIndicatorsResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIndicatorsResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveIndicatorsResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIndicatorsResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = IndicatorsResponseDataInit;
exports.genData = genIndicatorsResponseData;
exports.getData = getIndicatorsResponseData;
exports.findData = findIndicatorsResponseData;
exports.getListData = getIndicatorsResponseListData;
exports.deleteData = deleteIndicatorsResponseData;
exports.saveData = saveIndicatorsResponseData;
exports.saveListData = saveIndicatorsResponseListData;
exports.getAllData = getAllIndicatorsResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    IndicatorsResponseDataInit();
}

var overrideModule = '../overrides/IndicatorsResponse';
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



