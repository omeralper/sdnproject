'use strict';

//Model Definition File for NetServiceRecordListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetServiceRecordListDTO = require('./NetServiceRecordListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Çalışan ağ servislerinin geri döünüşü için kullanılacak cevap yapısı
*/
exports.NetServiceRecordListResponse =  {
    type:'class',
    name:'NetServiceRecordListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetServiceRecordListDTO', isRequired: true }
    }
}


//Mockup System for NetServiceRecordListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordListResponse';
var dto_name = 'NetServiceRecordListResponse';

function NetServiceRecordListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordListResponseData();
    }
}

function genNetServiceRecordListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordListResponseDataInit;
exports.genData = genNetServiceRecordListResponseData;
exports.getData = getNetServiceRecordListResponseData;
exports.findData = findNetServiceRecordListResponseData;
exports.getListData = getNetServiceRecordListResponseListData;
exports.deleteData = deleteNetServiceRecordListResponseData;
exports.saveData = saveNetServiceRecordListResponseData;
exports.saveListData = saveNetServiceRecordListResponseListData;
exports.getAllData = getAllNetServiceRecordListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordListResponseDataInit();
}

var overrideModule = '../overrides/NetServiceRecordListResponse';
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



