'use strict';

//Model Definition File for WanMvtnInfoListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanMvtnInfoListDTO = require('./WanMvtnInfoListDTO');

'use strict';
/**
* Geniş alan ağlarının gerişlerinin bilgi işleminin cevap veri yapısı.
*/
exports.WanMvtnInfoListResponse =  {
    type:'class',
    name:'WanMvtnInfoListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanMvtnInfoListDTO', isRequired: true }
    }
}


//Mockup System for WanMvtnInfoListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanMvtnInfoListResponse';
var dto_name = 'WanMvtnInfoListResponse';

function WanMvtnInfoListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanMvtnInfoListResponseData();
    }
}

function genWanMvtnInfoListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanMvtnInfoListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanMvtnInfoListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanMvtnInfoListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanMvtnInfoListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanMvtnInfoListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanMvtnInfoListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanMvtnInfoListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanMvtnInfoListResponseDataInit;
exports.genData = genWanMvtnInfoListResponseData;
exports.getData = getWanMvtnInfoListResponseData;
exports.findData = findWanMvtnInfoListResponseData;
exports.getListData = getWanMvtnInfoListResponseListData;
exports.deleteData = deleteWanMvtnInfoListResponseData;
exports.saveData = saveWanMvtnInfoListResponseData;
exports.saveListData = saveWanMvtnInfoListResponseListData;
exports.getAllData = getAllWanMvtnInfoListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanMvtnInfoListResponseDataInit();
}

var overrideModule = '../overrides/WanMvtnInfoListResponse';
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



