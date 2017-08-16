'use strict';

//Model Definition File for MeterStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MeterStatsDTO = require('./MeterStatsDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OF meter istatistik verilerini dönen cevap veri yapısı.
*/
exports.MeterStatsListResponse =  {
    type:'class',
    name:'MeterStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'MeterStatsDTO', isRequired: true }
    }
}


//Mockup System for MeterStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMeterStatsListResponse';
var dto_name = 'MeterStatsListResponse';

function MeterStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMeterStatsListResponseData();
    }
}

function genMeterStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMeterStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMeterStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMeterStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMeterStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMeterStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMeterStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMeterStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MeterStatsListResponseDataInit;
exports.genData = genMeterStatsListResponseData;
exports.getData = getMeterStatsListResponseData;
exports.findData = findMeterStatsListResponseData;
exports.getListData = getMeterStatsListResponseListData;
exports.deleteData = deleteMeterStatsListResponseData;
exports.saveData = saveMeterStatsListResponseData;
exports.saveListData = saveMeterStatsListResponseListData;
exports.getAllData = getAllMeterStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MeterStatsListResponseDataInit();
}

var overrideModule = '../overrides/MeterStatsListResponse';
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



