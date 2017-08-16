'use strict';

//Model Definition File for ComputeHostRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Compute Node bilgilerini olustrmak icin istenilen istek
*/
exports.ComputeHostRequest =  {
    type:'class',
    name:'ComputeHostRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String' }, 
        ip : { name: 'ip', type: 'String' }
    }
}


//Mockup System for ComputeHostRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostRequest';
var dto_name = 'ComputeHostRequest';

function ComputeHostRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostRequestData();
    }
}

function genComputeHostRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostRequestDataInit;
exports.genData = genComputeHostRequestData;
exports.getData = getComputeHostRequestData;
exports.findData = findComputeHostRequestData;
exports.getListData = getComputeHostRequestListData;
exports.deleteData = deleteComputeHostRequestData;
exports.saveData = saveComputeHostRequestData;
exports.saveListData = saveComputeHostRequestListData;
exports.getAllData = getAllComputeHostRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostRequestDataInit();
}

var overrideModule = '../overrides/ComputeHostRequest';
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



