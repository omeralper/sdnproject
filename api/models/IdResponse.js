'use strict';

//Model Definition File for IdResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* ID değeri dönülen işlemlerin cevap veri yapısı.
*/
exports.IdResponse =  {
    type:'class',
    name:'IdResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for IdResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIdResponse';
var dto_name = 'IdResponse';

function IdResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIdResponseData();
    }
}

function genIdResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIdResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIdResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findIdResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIdResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIdResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveIdResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIdResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = IdResponseDataInit;
exports.genData = genIdResponseData;
exports.getData = getIdResponseData;
exports.findData = findIdResponseData;
exports.getListData = getIdResponseListData;
exports.deleteData = deleteIdResponseData;
exports.saveData = saveIdResponseData;
exports.saveListData = saveIdResponseListData;
exports.getAllData = getAllIdResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    IdResponseDataInit();
}

var overrideModule = '../overrides/IdResponse';
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



