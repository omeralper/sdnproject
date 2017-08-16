'use strict';

//Model Definition File for ComputeHostResponse.js

//var ComputeHostGenericDTO = require('./ComputeHostGenericDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Node bilgilerini dönmek icin gerekli olan dönüs
*/
exports.ComputeHostResponse =  {
    type:'class',
    name:'ComputeHostResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ComputeHostGenericDTO', isRequired: true }
    }
}


//Mockup System for ComputeHostResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostResponse';
var dto_name = 'ComputeHostResponse';

function ComputeHostResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostResponseData();
    }
}

function genComputeHostResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostResponseDataInit;
exports.genData = genComputeHostResponseData;
exports.getData = getComputeHostResponseData;
exports.findData = findComputeHostResponseData;
exports.getListData = getComputeHostResponseListData;
exports.deleteData = deleteComputeHostResponseData;
exports.saveData = saveComputeHostResponseData;
exports.saveListData = saveComputeHostResponseListData;
exports.getAllData = getAllComputeHostResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostResponseDataInit();
}

var overrideModule = '../overrides/ComputeHostResponse';
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



