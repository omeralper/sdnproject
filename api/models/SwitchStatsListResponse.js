'use strict';

//Model Definition File for SwitchStatsListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SwitchStatsDTO = require('./SwitchStatsDTO');

'use strict';
/**
* Anahtarlayıcılara ait istatistik verilerini dönen cevap veri yapısı.
*/
exports.SwitchStatsListResponse =  {
    type:'class',
    name:'SwitchStatsListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'SwitchStatsDTO', isRequired: true }
    }
}


//Mockup System for SwitchStatsListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchStatsListResponse';
var dto_name = 'SwitchStatsListResponse';

function SwitchStatsListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchStatsListResponseData();
    }
}

function genSwitchStatsListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchStatsListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchStatsListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchStatsListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchStatsListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchStatsListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchStatsListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchStatsListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchStatsListResponseDataInit;
exports.genData = genSwitchStatsListResponseData;
exports.getData = getSwitchStatsListResponseData;
exports.findData = findSwitchStatsListResponseData;
exports.getListData = getSwitchStatsListResponseListData;
exports.deleteData = deleteSwitchStatsListResponseData;
exports.saveData = saveSwitchStatsListResponseData;
exports.saveListData = saveSwitchStatsListResponseListData;
exports.getAllData = getAllSwitchStatsListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchStatsListResponseDataInit();
}

var overrideModule = '../overrides/SwitchStatsListResponse';
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



