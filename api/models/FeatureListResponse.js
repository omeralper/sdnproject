'use strict';

//Model Definition File for FeatureListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var FeatureListDTO = require('./FeatureListDTO');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelendiği işleminin cevap veri yapısı.
*/
exports.FeatureListResponse =  {
    type:'class',
    name:'FeatureListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'FeatureListDTO', isRequired: true }
    }
}


//Mockup System for FeatureListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureListResponse';
var dto_name = 'FeatureListResponse';

function FeatureListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureListResponseData();
    }
}

function genFeatureListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureListResponseDataInit;
exports.genData = genFeatureListResponseData;
exports.getData = getFeatureListResponseData;
exports.findData = findFeatureListResponseData;
exports.getListData = getFeatureListResponseListData;
exports.deleteData = deleteFeatureListResponseData;
exports.saveData = saveFeatureListResponseData;
exports.saveListData = saveFeatureListResponseListData;
exports.getAllData = getAllFeatureListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureListResponseDataInit();
}

var overrideModule = '../overrides/FeatureListResponse';
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



