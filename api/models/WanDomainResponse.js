'use strict';

//Model Definition File for WanDomainResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var WanDomainDTO = require('./WanDomainDTO');

'use strict';
/**
* Alan tanımı detaylarının dönüldüğü veri yapısı.
*/
exports.WanDomainResponse =  {
    type:'class',
    name:'WanDomainResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'WanDomainDTO' }
    }
}


//Mockup System for WanDomainResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainResponse';
var dto_name = 'WanDomainResponse';

function WanDomainResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainResponseData();
    }
}

function genWanDomainResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainResponseDataInit;
exports.genData = genWanDomainResponseData;
exports.getData = getWanDomainResponseData;
exports.findData = findWanDomainResponseData;
exports.getListData = getWanDomainResponseListData;
exports.deleteData = deleteWanDomainResponseData;
exports.saveData = saveWanDomainResponseData;
exports.saveListData = saveWanDomainResponseListData;
exports.getAllData = getAllWanDomainResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainResponseDataInit();
}

var overrideModule = '../overrides/WanDomainResponse';
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



