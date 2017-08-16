'use strict';

//Model Definition File for EndUserApplicationListResponse.js

//var EndUserApplicationListDTO = require('./EndUserApplicationListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı uygulaması listesinin dönüldüğü veri yapısı.
*/
exports.EndUserApplicationListResponse =  {
    type:'class',
    name:'EndUserApplicationListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'EndUserApplicationListDTO' }
    }
}


//Mockup System for EndUserApplicationListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEndUserApplicationListResponse';
var dto_name = 'EndUserApplicationListResponse';

function EndUserApplicationListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEndUserApplicationListResponseData();
    }
}

function genEndUserApplicationListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEndUserApplicationListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEndUserApplicationListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findEndUserApplicationListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEndUserApplicationListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEndUserApplicationListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveEndUserApplicationListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEndUserApplicationListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = EndUserApplicationListResponseDataInit;
exports.genData = genEndUserApplicationListResponseData;
exports.getData = getEndUserApplicationListResponseData;
exports.findData = findEndUserApplicationListResponseData;
exports.getListData = getEndUserApplicationListResponseListData;
exports.deleteData = deleteEndUserApplicationListResponseData;
exports.saveData = saveEndUserApplicationListResponseData;
exports.saveListData = saveEndUserApplicationListResponseListData;
exports.getAllData = getAllEndUserApplicationListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    EndUserApplicationListResponseDataInit();
}

var overrideModule = '../overrides/EndUserApplicationListResponse';
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



