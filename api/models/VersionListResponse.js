'use strict';

//Model Definition File for VersionListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VersionListDTO = require('./VersionListDTO');

'use strict';
/**
* Prognet kontrolcü versiyon, build_date ve startUpDate bilgilerini tutar
*/
exports.VersionListResponse =  {
    type:'class',
    name:'VersionListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VersionListDTO', isRequired: true }
    }
}


//Mockup System for VersionListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVersionListResponse';
var dto_name = 'VersionListResponse';

function VersionListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVersionListResponseData();
    }
}

function genVersionListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVersionListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVersionListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVersionListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVersionListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVersionListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVersionListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVersionListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VersionListResponseDataInit;
exports.genData = genVersionListResponseData;
exports.getData = getVersionListResponseData;
exports.findData = findVersionListResponseData;
exports.getListData = getVersionListResponseListData;
exports.deleteData = deleteVersionListResponseData;
exports.saveData = saveVersionListResponseData;
exports.saveListData = saveVersionListResponseListData;
exports.getAllData = getAllVersionListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VersionListResponseDataInit();
}

var overrideModule = '../overrides/VersionListResponse';
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



