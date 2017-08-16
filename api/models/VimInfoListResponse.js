'use strict';

//Model Definition File for VimInfoListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VimInfoListDTO = require('./VimInfoListDTO');

'use strict';
/**
* VIM listesinin icinde donulecek cevap modeli
*/
exports.VimInfoListResponse =  {
    type:'class',
    name:'VimInfoListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VimInfoListDTO', isRequired: true }
    }
}


//Mockup System for VimInfoListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoListResponse';
var dto_name = 'VimInfoListResponse';

function VimInfoListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoListResponseData();
    }
}

function genVimInfoListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoListResponseDataInit;
exports.genData = genVimInfoListResponseData;
exports.getData = getVimInfoListResponseData;
exports.findData = findVimInfoListResponseData;
exports.getListData = getVimInfoListResponseListData;
exports.deleteData = deleteVimInfoListResponseData;
exports.saveData = saveVimInfoListResponseData;
exports.saveListData = saveVimInfoListResponseListData;
exports.getAllData = getAllVimInfoListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoListResponseDataInit();
}

var overrideModule = '../overrides/VimInfoListResponse';
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



