'use strict';

//Model Definition File for PortStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var PortStatsDTO = require('./PortStatsDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Anahtarlayıcıların portlarına ait istatistik verilerini dönen cevap veri yapısı.
*/
exports.PortStatsListResponse =  {
    type:'class',
    name:'PortStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'PortStatsDTO', isRequired: true }
    }
}


//Mockup System for PortStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortStatsListResponse';
var dto_name = 'PortStatsListResponse';

function PortStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortStatsListResponseData();
    }
}

function genPortStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePortStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PortStatsListResponseDataInit;
exports.genData = genPortStatsListResponseData;
exports.getData = getPortStatsListResponseData;
exports.findData = findPortStatsListResponseData;
exports.getListData = getPortStatsListResponseListData;
exports.deleteData = deletePortStatsListResponseData;
exports.saveData = savePortStatsListResponseData;
exports.saveListData = savePortStatsListResponseListData;
exports.getAllData = getAllPortStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortStatsListResponseDataInit();
}

var overrideModule = '../overrides/PortStatsListResponse';
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



