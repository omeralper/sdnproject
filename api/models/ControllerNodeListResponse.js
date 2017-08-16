'use strict';

//Model Definition File for ControllerNodeListResponse.js

//var ControllerNodeListDTO = require('./ControllerNodeListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelendiği işleminin cevap veri yapısı.
*/
exports.ControllerNodeListResponse =  {
    type:'class',
    name:'ControllerNodeListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ControllerNodeListDTO', isRequired: true }
    }
}


//Mockup System for ControllerNodeListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeListResponse';
var dto_name = 'ControllerNodeListResponse';

function ControllerNodeListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeListResponseData();
    }
}

function genControllerNodeListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeListResponseDataInit;
exports.genData = genControllerNodeListResponseData;
exports.getData = getControllerNodeListResponseData;
exports.findData = findControllerNodeListResponseData;
exports.getListData = getControllerNodeListResponseListData;
exports.deleteData = deleteControllerNodeListResponseData;
exports.saveData = saveControllerNodeListResponseData;
exports.saveListData = saveControllerNodeListResponseListData;
exports.getAllData = getAllControllerNodeListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeListResponseDataInit();
}

var overrideModule = '../overrides/ControllerNodeListResponse';
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



