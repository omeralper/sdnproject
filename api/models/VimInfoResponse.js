'use strict';

//Model Definition File for VimInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VimInfoDTO = require('./VimInfoDTO');

'use strict';
/**
* 
*/
exports.VimInfoResponse =  {
    type:'class',
    name:'VimInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VimInfoDTO' }
    }
}


//Mockup System for VimInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoResponse';
var dto_name = 'VimInfoResponse';

function VimInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoResponseData();
    }
}

function genVimInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoResponseDataInit;
exports.genData = genVimInfoResponseData;
exports.getData = getVimInfoResponseData;
exports.findData = findVimInfoResponseData;
exports.getListData = getVimInfoResponseListData;
exports.deleteData = deleteVimInfoResponseData;
exports.saveData = saveVimInfoResponseData;
exports.saveListData = saveVimInfoResponseListData;
exports.getAllData = getAllVimInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoResponseDataInit();
}

var overrideModule = '../overrides/VimInfoResponse';
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



