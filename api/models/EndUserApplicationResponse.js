'use strict';

//Model Definition File for EndUserApplicationResponse.js

//var EndUserApplicationDTO = require('./EndUserApplicationDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı uygulaması detaylarının dönüldüğü veri yapısı.
*/
exports.EndUserApplicationResponse =  {
    type:'class',
    name:'EndUserApplicationResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'EndUserApplicationDTO' }
    }
}


//Mockup System for EndUserApplicationResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEndUserApplicationResponse';
var dto_name = 'EndUserApplicationResponse';

function EndUserApplicationResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEndUserApplicationResponseData();
    }
}

function genEndUserApplicationResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEndUserApplicationResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEndUserApplicationResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findEndUserApplicationResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEndUserApplicationResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEndUserApplicationResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveEndUserApplicationResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEndUserApplicationResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = EndUserApplicationResponseDataInit;
exports.genData = genEndUserApplicationResponseData;
exports.getData = getEndUserApplicationResponseData;
exports.findData = findEndUserApplicationResponseData;
exports.getListData = getEndUserApplicationResponseListData;
exports.deleteData = deleteEndUserApplicationResponseData;
exports.saveData = saveEndUserApplicationResponseData;
exports.saveListData = saveEndUserApplicationResponseListData;
exports.getAllData = getAllEndUserApplicationResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    EndUserApplicationResponseDataInit();
}

var overrideModule = '../overrides/EndUserApplicationResponse';
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



