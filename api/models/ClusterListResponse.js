'use strict';

//Model Definition File for ClusterListResponse.js

//var ClusterListDTO = require('./ClusterListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Küme işleminin cevap veri yapısı.
*/
exports.ClusterListResponse =  {
    type:'class',
    name:'ClusterListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ClusterListDTO', isRequired: true }
    }
}


//Mockup System for ClusterListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDClusterListResponse';
var dto_name = 'ClusterListResponse';

function ClusterListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genClusterListResponseData();
    }
}

function genClusterListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getClusterListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getClusterListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findClusterListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteClusterListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveClusterListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveClusterListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllClusterListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ClusterListResponseDataInit;
exports.genData = genClusterListResponseData;
exports.getData = getClusterListResponseData;
exports.findData = findClusterListResponseData;
exports.getListData = getClusterListResponseListData;
exports.deleteData = deleteClusterListResponseData;
exports.saveData = saveClusterListResponseData;
exports.saveListData = saveClusterListResponseListData;
exports.getAllData = getAllClusterListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ClusterListResponseDataInit();
}

var overrideModule = '../overrides/ClusterListResponse';
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



