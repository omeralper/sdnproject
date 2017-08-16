'use strict';

//Model Definition File for VnfdListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VnfdListDTO = require('./VnfdListDTO');

'use strict';
/**
* Vnfd listeleme olarak kullanılan veri yapısı.
*/
exports.VnfdListResponse =  {
    type:'class',
    name:'VnfdListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VnfdListDTO', isRequired: true }
    }
}


//Mockup System for VnfdListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdListResponse';
var dto_name = 'VnfdListResponse';

function VnfdListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdListResponseData();
    }
}

function genVnfdListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdListResponseDataInit;
exports.genData = genVnfdListResponseData;
exports.getData = getVnfdListResponseData;
exports.findData = findVnfdListResponseData;
exports.getListData = getVnfdListResponseListData;
exports.deleteData = deleteVnfdListResponseData;
exports.saveData = saveVnfdListResponseData;
exports.saveListData = saveVnfdListResponseListData;
exports.getAllData = getAllVnfdListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdListResponseDataInit();
}

var overrideModule = '../overrides/VnfdListResponse';
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



