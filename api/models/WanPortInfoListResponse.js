'use strict';

//Model Definition File for WanPortInfoListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanPortInfoListDTO = require('./WanPortInfoListDTO');

'use strict';
/**
* Geniş alan ağlarının gerişlerinin bilgi işleminin cevap veri yapısı.
*/
exports.WanPortInfoListResponse =  {
    type:'class',
    name:'WanPortInfoListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanPortInfoListDTO', isRequired: true }
    }
}


//Mockup System for WanPortInfoListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoListResponse';
var dto_name = 'WanPortInfoListResponse';

function WanPortInfoListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoListResponseData();
    }
}

function genWanPortInfoListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoListResponseDataInit;
exports.genData = genWanPortInfoListResponseData;
exports.getData = getWanPortInfoListResponseData;
exports.findData = findWanPortInfoListResponseData;
exports.getListData = getWanPortInfoListResponseListData;
exports.deleteData = deleteWanPortInfoListResponseData;
exports.saveData = saveWanPortInfoListResponseData;
exports.saveListData = saveWanPortInfoListResponseListData;
exports.getAllData = getAllWanPortInfoListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoListResponseDataInit();
}

var overrideModule = '../overrides/WanPortInfoListResponse';
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



