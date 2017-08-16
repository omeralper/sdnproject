'use strict';

//Model Definition File for FeatureResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var FeatureDTO = require('./FeatureDTO');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Özellik listelendiği işleminin cevap veri yapısı.
*/
exports.FeatureResponse =  {
    type:'class',
    name:'FeatureResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'FeatureDTO', isRequired: true }
    }
}


//Mockup System for FeatureResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFeatureResponse';
var dto_name = 'FeatureResponse';

function FeatureResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFeatureResponseData();
    }
}

function genFeatureResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFeatureResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFeatureResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findFeatureResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFeatureResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFeatureResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveFeatureResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFeatureResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = FeatureResponseDataInit;
exports.genData = genFeatureResponseData;
exports.getData = getFeatureResponseData;
exports.findData = findFeatureResponseData;
exports.getListData = getFeatureResponseListData;
exports.deleteData = deleteFeatureResponseData;
exports.saveData = saveFeatureResponseData;
exports.saveListData = saveFeatureResponseListData;
exports.getAllData = getAllFeatureResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    FeatureResponseDataInit();
}

var overrideModule = '../overrides/FeatureResponse';
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



