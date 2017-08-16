'use strict';

//Model Definition File for VnfrListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VnfrListDTO = require('./VnfrListDTO');

'use strict';
/**
* Vnfr listeleme olarak kullanılan veri yapısı.
*/
exports.VnfrListResponse =  {
    type:'class',
    name:'VnfrListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VnfrListDTO', isRequired: true }
    }
}


//Mockup System for VnfrListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfrListResponse';
var dto_name = 'VnfrListResponse';

function VnfrListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfrListResponseData();
    }
}

function genVnfrListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfrListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfrListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfrListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfrListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfrListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfrListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfrListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfrListResponseDataInit;
exports.genData = genVnfrListResponseData;
exports.getData = getVnfrListResponseData;
exports.findData = findVnfrListResponseData;
exports.getListData = getVnfrListResponseListData;
exports.deleteData = deleteVnfrListResponseData;
exports.saveData = saveVnfrListResponseData;
exports.saveListData = saveVnfrListResponseListData;
exports.getAllData = getAllVnfrListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfrListResponseDataInit();
}

var overrideModule = '../overrides/VnfrListResponse';
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



