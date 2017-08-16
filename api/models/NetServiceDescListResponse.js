'use strict';

//Model Definition File for NetServiceDescListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetServiceDescListDTO = require('./NetServiceDescListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis tanımı listeleme işleminin cevap veri yapısı.
*/
exports.NetServiceDescListResponse =  {
    type:'class',
    name:'NetServiceDescListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetServiceDescListDTO', isRequired: true }
    }
}


//Mockup System for NetServiceDescListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescListResponse';
var dto_name = 'NetServiceDescListResponse';

function NetServiceDescListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescListResponseData();
    }
}

function genNetServiceDescListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescListResponseDataInit;
exports.genData = genNetServiceDescListResponseData;
exports.getData = getNetServiceDescListResponseData;
exports.findData = findNetServiceDescListResponseData;
exports.getListData = getNetServiceDescListResponseListData;
exports.deleteData = deleteNetServiceDescListResponseData;
exports.saveData = saveNetServiceDescListResponseData;
exports.saveListData = saveNetServiceDescListResponseListData;
exports.getAllData = getAllNetServiceDescListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescListResponseDataInit();
}

var overrideModule = '../overrides/NetServiceDescListResponse';
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



