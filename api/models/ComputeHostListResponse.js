'use strict';

//Model Definition File for ComputeHostListResponse.js

//var ComputeHostListDTO = require('./ComputeHostListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Compute host listesini donmek icin kullanılacak istek tipi
*/
exports.ComputeHostListResponse =  {
    type:'class',
    name:'ComputeHostListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ComputeHostListDTO', isRequired: true }
    }
}


//Mockup System for ComputeHostListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostListResponse';
var dto_name = 'ComputeHostListResponse';

function ComputeHostListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostListResponseData();
    }
}

function genComputeHostListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostListResponseDataInit;
exports.genData = genComputeHostListResponseData;
exports.getData = getComputeHostListResponseData;
exports.findData = findComputeHostListResponseData;
exports.getListData = getComputeHostListResponseListData;
exports.deleteData = deleteComputeHostListResponseData;
exports.saveData = saveComputeHostListResponseData;
exports.saveListData = saveComputeHostListResponseListData;
exports.getAllData = getAllComputeHostListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostListResponseDataInit();
}

var overrideModule = '../overrides/ComputeHostListResponse';
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



