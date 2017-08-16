'use strict';

//Model Definition File for ComputeHostStatisticRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Zone bilgilerini olustrmak icin istenilen istek
*/
exports.ComputeHostStatisticRequest =  {
    type:'class',
    name:'ComputeHostStatisticRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String' }, 
        computeHostId : { name: 'computeHostId', type: 'String' }
    }
}


//Mockup System for ComputeHostStatisticRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticRequest';
var dto_name = 'ComputeHostStatisticRequest';

function ComputeHostStatisticRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticRequestData();
    }
}

function genComputeHostStatisticRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticRequestDataInit;
exports.genData = genComputeHostStatisticRequestData;
exports.getData = getComputeHostStatisticRequestData;
exports.findData = findComputeHostStatisticRequestData;
exports.getListData = getComputeHostStatisticRequestListData;
exports.deleteData = deleteComputeHostStatisticRequestData;
exports.saveData = saveComputeHostStatisticRequestData;
exports.saveListData = saveComputeHostStatisticRequestListData;
exports.getAllData = getAllComputeHostStatisticRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticRequestDataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticRequest';
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



