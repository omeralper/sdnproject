'use strict';

//Model Definition File for SdnipDefinedSetResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SdnipDefinedSetDTO = require('./SdnipDefinedSetDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip liste tanımı bilgisini tutar.
*/
exports.SdnipDefinedSetResponse =  {
    type:'class',
    name:'SdnipDefinedSetResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SdnipDefinedSetDTO', isRequired: true }
    }
}


//Mockup System for SdnipDefinedSetResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipDefinedSetResponse';
var dto_name = 'SdnipDefinedSetResponse';

function SdnipDefinedSetResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipDefinedSetResponseData();
    }
}

function genSdnipDefinedSetResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipDefinedSetResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipDefinedSetResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipDefinedSetResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipDefinedSetResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipDefinedSetResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipDefinedSetResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipDefinedSetResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipDefinedSetResponseDataInit;
exports.genData = genSdnipDefinedSetResponseData;
exports.getData = getSdnipDefinedSetResponseData;
exports.findData = findSdnipDefinedSetResponseData;
exports.getListData = getSdnipDefinedSetResponseListData;
exports.deleteData = deleteSdnipDefinedSetResponseData;
exports.saveData = saveSdnipDefinedSetResponseData;
exports.saveListData = saveSdnipDefinedSetResponseListData;
exports.getAllData = getAllSdnipDefinedSetResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipDefinedSetResponseDataInit();
}

var overrideModule = '../overrides/SdnipDefinedSetResponse';
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



