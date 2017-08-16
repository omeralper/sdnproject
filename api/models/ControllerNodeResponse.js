'use strict';

//Model Definition File for ControllerNodeResponse.js

//var ControllerNodeDTO = require('./ControllerNodeDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelendiği işleminin cevap veri yapısı.
*/
exports.ControllerNodeResponse =  {
    type:'class',
    name:'ControllerNodeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ControllerNodeDTO', isRequired: true }
    }
}


//Mockup System for ControllerNodeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerNodeResponse';
var dto_name = 'ControllerNodeResponse';

function ControllerNodeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerNodeResponseData();
    }
}

function genControllerNodeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerNodeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerNodeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerNodeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerNodeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerNodeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerNodeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerNodeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerNodeResponseDataInit;
exports.genData = genControllerNodeResponseData;
exports.getData = getControllerNodeResponseData;
exports.findData = findControllerNodeResponseData;
exports.getListData = getControllerNodeResponseListData;
exports.deleteData = deleteControllerNodeResponseData;
exports.saveData = saveControllerNodeResponseData;
exports.saveListData = saveControllerNodeResponseListData;
exports.getAllData = getAllControllerNodeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerNodeResponseDataInit();
}

var overrideModule = '../overrides/ControllerNodeResponse';
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



