'use strict';

//Model Definition File for WanMvtnInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanMvtnInfoDTO = require('./WanMvtnInfoDTO');

'use strict';
/**
* Geniş alan sanal ağlarının bilgilerinin istek işleminin cevap veri yapısı.
*/
exports.WanMvtnInfoResponse =  {
    type:'class',
    name:'WanMvtnInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanMvtnInfoDTO', isRequired: true }
    }
}


//Mockup System for WanMvtnInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanMvtnInfoResponse';
var dto_name = 'WanMvtnInfoResponse';

function WanMvtnInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanMvtnInfoResponseData();
    }
}

function genWanMvtnInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanMvtnInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanMvtnInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanMvtnInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanMvtnInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanMvtnInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanMvtnInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanMvtnInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanMvtnInfoResponseDataInit;
exports.genData = genWanMvtnInfoResponseData;
exports.getData = getWanMvtnInfoResponseData;
exports.findData = findWanMvtnInfoResponseData;
exports.getListData = getWanMvtnInfoResponseListData;
exports.deleteData = deleteWanMvtnInfoResponseData;
exports.saveData = saveWanMvtnInfoResponseData;
exports.saveListData = saveWanMvtnInfoResponseListData;
exports.getAllData = getAllWanMvtnInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanMvtnInfoResponseDataInit();
}

var overrideModule = '../overrides/WanMvtnInfoResponse';
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



