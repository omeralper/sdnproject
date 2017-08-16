'use strict';

//Model Definition File for AAAServerResponse.js

//var AAAServerDTO = require('./AAAServerDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* AAA sunucu detaylarının dönüldüğü veri yapısı.
*/
exports.AAAServerResponse =  {
    type:'class',
    name:'AAAServerResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'AAAServerDTO' }
    }
}


//Mockup System for AAAServerResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAAAServerResponse';
var dto_name = 'AAAServerResponse';

function AAAServerResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAAAServerResponseData();
    }
}

function genAAAServerResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAAAServerResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAAAServerResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findAAAServerResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAAAServerResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAAAServerResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveAAAServerResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAAAServerResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = AAAServerResponseDataInit;
exports.genData = genAAAServerResponseData;
exports.getData = getAAAServerResponseData;
exports.findData = findAAAServerResponseData;
exports.getListData = getAAAServerResponseListData;
exports.deleteData = deleteAAAServerResponseData;
exports.saveData = saveAAAServerResponseData;
exports.saveListData = saveAAAServerResponseListData;
exports.getAllData = getAllAAAServerResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    AAAServerResponseDataInit();
}

var overrideModule = '../overrides/AAAServerResponse';
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



