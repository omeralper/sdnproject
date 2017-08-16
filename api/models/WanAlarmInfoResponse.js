'use strict';

//Model Definition File for WanAlarmInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanAlarmInfoDTO = require('./WanAlarmInfoDTO');

'use strict';
/**
* Geniş alan alarm bilgilerinin istek işleminin cevap veri yapısı.
*/
exports.WanAlarmInfoResponse =  {
    type:'class',
    name:'WanAlarmInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanAlarmInfoDTO', isRequired: true }
    }
}


//Mockup System for WanAlarmInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoResponse';
var dto_name = 'WanAlarmInfoResponse';

function WanAlarmInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoResponseData();
    }
}

function genWanAlarmInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoResponseDataInit;
exports.genData = genWanAlarmInfoResponseData;
exports.getData = getWanAlarmInfoResponseData;
exports.findData = findWanAlarmInfoResponseData;
exports.getListData = getWanAlarmInfoResponseListData;
exports.deleteData = deleteWanAlarmInfoResponseData;
exports.saveData = saveWanAlarmInfoResponseData;
exports.saveListData = saveWanAlarmInfoResponseListData;
exports.getAllData = getAllWanAlarmInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoResponseDataInit();
}

var overrideModule = '../overrides/WanAlarmInfoResponse';
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



