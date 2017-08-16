'use strict';

//Model Definition File for ComputeHostStatisticListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Butun istatistiki bilgilerin istek objesi
*/
exports.ComputeHostStatisticListRequest =  {
    type:'class',
    name:'ComputeHostStatisticListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }
    }
}


//Mockup System for ComputeHostStatisticListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostStatisticListRequest';
var dto_name = 'ComputeHostStatisticListRequest';

function ComputeHostStatisticListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostStatisticListRequestData();
    }
}

function genComputeHostStatisticListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostStatisticListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostStatisticListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostStatisticListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostStatisticListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostStatisticListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostStatisticListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostStatisticListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostStatisticListRequestDataInit;
exports.genData = genComputeHostStatisticListRequestData;
exports.getData = getComputeHostStatisticListRequestData;
exports.findData = findComputeHostStatisticListRequestData;
exports.getListData = getComputeHostStatisticListRequestListData;
exports.deleteData = deleteComputeHostStatisticListRequestData;
exports.saveData = saveComputeHostStatisticListRequestData;
exports.saveListData = saveComputeHostStatisticListRequestListData;
exports.getAllData = getAllComputeHostStatisticListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostStatisticListRequestDataInit();
}

var overrideModule = '../overrides/ComputeHostStatisticListRequest';
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



