'use strict';

//Model Definition File for WanDomainListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanDomainListDTO = require('./WanDomainListDTO');

'use strict';
/**
* Alan tanımı detaylarının dönüldüğü veri yapısı.
*/
exports.WanDomainListResponse =  {
    type:'class',
    name:'WanDomainListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanDomainListDTO' }
    }
}


//Mockup System for WanDomainListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainListResponse';
var dto_name = 'WanDomainListResponse';

function WanDomainListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainListResponseData();
    }
}

function genWanDomainListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainListResponseDataInit;
exports.genData = genWanDomainListResponseData;
exports.getData = getWanDomainListResponseData;
exports.findData = findWanDomainListResponseData;
exports.getListData = getWanDomainListResponseListData;
exports.deleteData = deleteWanDomainListResponseData;
exports.saveData = saveWanDomainListResponseData;
exports.saveListData = saveWanDomainListResponseListData;
exports.getAllData = getAllWanDomainListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainListResponseDataInit();
}

var overrideModule = '../overrides/WanDomainListResponse';
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



