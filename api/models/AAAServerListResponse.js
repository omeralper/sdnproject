'use strict';

//Model Definition File for AAAServerListResponse.js

//var AAAServerListDTO = require('./AAAServerListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* AAA sunucu listeleme işleminin cevap veri yapısı.
*/
exports.AAAServerListResponse =  {
    type:'class',
    name:'AAAServerListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AAAServerListDTO', isRequired: true }
    }
}


//Mockup System for AAAServerListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAAAServerListResponse';
var dto_name = 'AAAServerListResponse';

function AAAServerListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAAAServerListResponseData();
    }
}

function genAAAServerListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAAAServerListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAAAServerListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAAAServerListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAAAServerListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAAAServerListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAAAServerListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAAAServerListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AAAServerListResponseDataInit;
exports.genData = genAAAServerListResponseData;
exports.getData = getAAAServerListResponseData;
exports.findData = findAAAServerListResponseData;
exports.getListData = getAAAServerListResponseListData;
exports.deleteData = deleteAAAServerListResponseData;
exports.saveData = saveAAAServerListResponseData;
exports.saveListData = saveAAAServerListResponseListData;
exports.getAllData = getAllAAAServerListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AAAServerListResponseDataInit();
}

var overrideModule = '../overrides/AAAServerListResponse';
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



