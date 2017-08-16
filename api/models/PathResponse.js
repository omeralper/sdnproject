'use strict';

//Model Definition File for PathResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var PathDTO = require('./PathDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Patika oluşturmak için dönülen cevap veri yapısı.
*/
exports.PathResponse =  {
    type:'class',
    name:'PathResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'PathDTO', isRequired: true }
    }
}


//Mockup System for PathResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathResponse';
var dto_name = 'PathResponse';

function PathResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathResponseData();
    }
}

function genPathResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathResponseData(data) {
    return mockup.saveData(data_key, data);
}

function savePathResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = PathResponseDataInit;
exports.genData = genPathResponseData;
exports.getData = getPathResponseData;
exports.findData = findPathResponseData;
exports.getListData = getPathResponseListData;
exports.deleteData = deletePathResponseData;
exports.saveData = savePathResponseData;
exports.saveListData = savePathResponseListData;
exports.getAllData = getAllPathResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathResponseDataInit();
}

var overrideModule = '../overrides/PathResponse';
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



