'use strict';

//Model Definition File for ComputeHostListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Compute host listesini almak icin kullanılacak istek tipi
*/
exports.ComputeHostListRequest =  {
    type:'class',
    name:'ComputeHostListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }
    }
}


//Mockup System for ComputeHostListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostListRequest';
var dto_name = 'ComputeHostListRequest';

function ComputeHostListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostListRequestData();
    }
}

function genComputeHostListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostListRequestDataInit;
exports.genData = genComputeHostListRequestData;
exports.getData = getComputeHostListRequestData;
exports.findData = findComputeHostListRequestData;
exports.getListData = getComputeHostListRequestListData;
exports.deleteData = deleteComputeHostListRequestData;
exports.saveData = saveComputeHostListRequestData;
exports.saveListData = saveComputeHostListRequestListData;
exports.getAllData = getAllComputeHostListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostListRequestDataInit();
}

var overrideModule = '../overrides/ComputeHostListRequest';
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



