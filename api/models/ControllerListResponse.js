'use strict';

//Model Definition File for ControllerListResponse.js

//var ControllerListDTO = require('./ControllerListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kontrolcü listeleme işleminin cevap veri yapısı.
*/
exports.ControllerListResponse =  {
    type:'class',
    name:'ControllerListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ControllerListDTO', isRequired: true }
    }
}


//Mockup System for ControllerListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerListResponse';
var dto_name = 'ControllerListResponse';

function ControllerListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerListResponseData();
    }
}

function genControllerListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerListResponseDataInit;
exports.genData = genControllerListResponseData;
exports.getData = getControllerListResponseData;
exports.findData = findControllerListResponseData;
exports.getListData = getControllerListResponseListData;
exports.deleteData = deleteControllerListResponseData;
exports.saveData = saveControllerListResponseData;
exports.saveListData = saveControllerListResponseListData;
exports.getAllData = getAllControllerListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerListResponseDataInit();
}

var overrideModule = '../overrides/ControllerListResponse';
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



