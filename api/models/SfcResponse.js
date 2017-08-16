'use strict';

//Model Definition File for SfcResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SfcDTO = require('./SfcDTO');

'use strict';
/**
* Sfc olarak kullanılan veri yapısı.
*/
exports.SfcResponse =  {
    type:'class',
    name:'SfcResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SfcDTO', isRequired: true }
    }
}


//Mockup System for SfcResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSfcResponse';
var dto_name = 'SfcResponse';

function SfcResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSfcResponseData();
    }
}

function genSfcResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSfcResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSfcResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSfcResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSfcResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSfcResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSfcResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSfcResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SfcResponseDataInit;
exports.genData = genSfcResponseData;
exports.getData = getSfcResponseData;
exports.findData = findSfcResponseData;
exports.getListData = getSfcResponseListData;
exports.deleteData = deleteSfcResponseData;
exports.saveData = saveSfcResponseData;
exports.saveListData = saveSfcResponseListData;
exports.getAllData = getAllSfcResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SfcResponseDataInit();
}

var overrideModule = '../overrides/SfcResponse';
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



