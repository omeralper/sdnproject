'use strict';

//Model Definition File for ComputeHostStatisticListResponse.js

//var ComputeHostStatisticListDTO = require('./ComputeHostStatisticListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* VIM uzerinde bulunan butun compute&#39;ların istatistiki bilgilerin tumu
*/
exports.ComputeHostStatisticListResponse =  {
    type:'class',
    name:'ComputeHostStatisticListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ComputeHostStatisticListDTO', isRequired: true }
    }
}


//Mockup System for ComputeHostStatisticListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticListResponse';
var dto_name = 'ComputeHostStatisticListResponse';

function ComputeHostStatisticListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticListResponseData();
    }
}

function genComputeHostStatisticListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticListResponseDataInit;
exports.genData = genComputeHostStatisticListResponseData;
exports.getData = getComputeHostStatisticListResponseData;
exports.findData = findComputeHostStatisticListResponseData;
exports.getListData = getComputeHostStatisticListResponseListData;
exports.deleteData = deleteComputeHostStatisticListResponseData;
exports.saveData = saveComputeHostStatisticListResponseData;
exports.saveListData = saveComputeHostStatisticListResponseListData;
exports.getAllData = getAllComputeHostStatisticListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticListResponseDataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticListResponse';
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



