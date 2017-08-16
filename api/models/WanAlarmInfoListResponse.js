'use strict';

//Model Definition File for WanAlarmInfoListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanAlarmInfoListDTO = require('./WanAlarmInfoListDTO');

'use strict';
/**
* Geniş alan ağlarının alarm listesini cevaplayan veri yapısı.
*/
exports.WanAlarmInfoListResponse =  {
    type:'class',
    name:'WanAlarmInfoListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanAlarmInfoListDTO', isRequired: true }
    }
}


//Mockup System for WanAlarmInfoListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoListResponse';
var dto_name = 'WanAlarmInfoListResponse';

function WanAlarmInfoListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoListResponseData();
    }
}

function genWanAlarmInfoListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoListResponseDataInit;
exports.genData = genWanAlarmInfoListResponseData;
exports.getData = getWanAlarmInfoListResponseData;
exports.findData = findWanAlarmInfoListResponseData;
exports.getListData = getWanAlarmInfoListResponseListData;
exports.deleteData = deleteWanAlarmInfoListResponseData;
exports.saveData = saveWanAlarmInfoListResponseData;
exports.saveListData = saveWanAlarmInfoListResponseListData;
exports.getAllData = getAllWanAlarmInfoListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoListResponseDataInit();
}

var overrideModule = '../overrides/WanAlarmInfoListResponse';
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



