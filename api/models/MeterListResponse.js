'use strict';

//Model Definition File for MeterListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MeterListDTO = require('./MeterListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağdaki ya da fiziksel ağdaki meterları listeleme talebinin cevabı olarak kullanılan veri yapısı
*/
exports.MeterListResponse =  {
    type:'class',
    name:'MeterListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MeterListDTO', isRequired: true }
    }
}


//Mockup System for MeterListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterListResponse';
var dto_name = 'MeterListResponse';

function MeterListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterListResponseData();
    }
}

function genMeterListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterListResponseDataInit;
exports.genData = genMeterListResponseData;
exports.getData = getMeterListResponseData;
exports.findData = findMeterListResponseData;
exports.getListData = getMeterListResponseListData;
exports.deleteData = deleteMeterListResponseData;
exports.saveData = saveMeterListResponseData;
exports.saveListData = saveMeterListResponseListData;
exports.getAllData = getAllMeterListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterListResponseDataInit();
}

var overrideModule = '../overrides/MeterListResponse';
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



