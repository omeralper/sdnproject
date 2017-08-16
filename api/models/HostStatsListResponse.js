'use strict';

//Model Definition File for HostStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var HostStatsDTO = require('./HostStatsDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Uç Birime ait istatistik verilerini dönen cevap veri yapısı.
*/
exports.HostStatsListResponse =  {
    type:'class',
    name:'HostStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'HostStatsDTO', isRequired: true }
    }
}


//Mockup System for HostStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDHostStatsListResponse';
var dto_name = 'HostStatsListResponse';

function HostStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genHostStatsListResponseData();
    }
}

function genHostStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getHostStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getHostStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findHostStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteHostStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveHostStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveHostStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllHostStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = HostStatsListResponseDataInit;
exports.genData = genHostStatsListResponseData;
exports.getData = getHostStatsListResponseData;
exports.findData = findHostStatsListResponseData;
exports.getListData = getHostStatsListResponseListData;
exports.deleteData = deleteHostStatsListResponseData;
exports.saveData = saveHostStatsListResponseData;
exports.saveListData = saveHostStatsListResponseListData;
exports.getAllData = getAllHostStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    HostStatsListResponseDataInit();
}

var overrideModule = '../overrides/HostStatsListResponse';
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



