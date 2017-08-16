'use strict';

//Model Definition File for ComputeHostStatisticResponse.js

//var ComputeStatisticsDTO = require('./ComputeStatisticsDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Zone bilgilerini dönmek icin gerekli olan dönüs
*/
exports.ComputeHostStatisticResponse =  {
    type:'class',
    name:'ComputeHostStatisticResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ComputeStatisticsDTO', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String' }
    }
}


//Mockup System for ComputeHostStatisticResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticResponse';
var dto_name = 'ComputeHostStatisticResponse';

function ComputeHostStatisticResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticResponseData();
    }
}

function genComputeHostStatisticResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticResponseDataInit;
exports.genData = genComputeHostStatisticResponseData;
exports.getData = getComputeHostStatisticResponseData;
exports.findData = findComputeHostStatisticResponseData;
exports.getListData = getComputeHostStatisticResponseListData;
exports.deleteData = deleteComputeHostStatisticResponseData;
exports.saveData = saveComputeHostStatisticResponseData;
exports.saveListData = saveComputeHostStatisticResponseListData;
exports.getAllData = getAllComputeHostStatisticResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticResponseDataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticResponse';
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



