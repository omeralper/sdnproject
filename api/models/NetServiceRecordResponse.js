'use strict';

//Model Definition File for NetServiceRecordResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetServiceRecordDTO = require('./NetServiceRecordDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis kayıtı detaylarının dönüldüğü veri yapısı.
*/
exports.NetServiceRecordResponse =  {
    type:'class',
    name:'NetServiceRecordResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetServiceRecordDTO' }
    }
}


//Mockup System for NetServiceRecordResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordResponse';
var dto_name = 'NetServiceRecordResponse';

function NetServiceRecordResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordResponseData();
    }
}

function genNetServiceRecordResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordResponseDataInit;
exports.genData = genNetServiceRecordResponseData;
exports.getData = getNetServiceRecordResponseData;
exports.findData = findNetServiceRecordResponseData;
exports.getListData = getNetServiceRecordResponseListData;
exports.deleteData = deleteNetServiceRecordResponseData;
exports.saveData = saveNetServiceRecordResponseData;
exports.saveListData = saveNetServiceRecordResponseListData;
exports.getAllData = getAllNetServiceRecordResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordResponseDataInit();
}

var overrideModule = '../overrides/NetServiceRecordResponse';
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



