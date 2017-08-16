'use strict';

//Model Definition File for WanPortInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanPortInfoDTO = require('./WanPortInfoDTO');

'use strict';
/**
* Geniş alan ağlarının bilgilerinin istek işleminin cevap veri yapısı.
*/
exports.WanPortInfoResponse =  {
    type:'class',
    name:'WanPortInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanPortInfoDTO', isRequired: true }
    }
}


//Mockup System for WanPortInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoResponse';
var dto_name = 'WanPortInfoResponse';

function WanPortInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoResponseData();
    }
}

function genWanPortInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoResponseDataInit;
exports.genData = genWanPortInfoResponseData;
exports.getData = getWanPortInfoResponseData;
exports.findData = findWanPortInfoResponseData;
exports.getListData = getWanPortInfoResponseListData;
exports.deleteData = deleteWanPortInfoResponseData;
exports.saveData = saveWanPortInfoResponseData;
exports.saveListData = saveWanPortInfoResponseListData;
exports.getAllData = getAllWanPortInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoResponseDataInit();
}

var overrideModule = '../overrides/WanPortInfoResponse';
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



