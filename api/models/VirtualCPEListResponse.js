'use strict';

//Model Definition File for VirtualCPEListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VirtualCPEListDTO = require('./VirtualCPEListDTO');

'use strict';
/**
* Sanal CPE listeleme işleminin cevap veri yapısı.
*/
exports.VirtualCPEListResponse =  {
    type:'class',
    name:'VirtualCPEListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VirtualCPEListDTO', isRequired: true }
    }
}


//Mockup System for VirtualCPEListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEListResponse';
var dto_name = 'VirtualCPEListResponse';

function VirtualCPEListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEListResponseData();
    }
}

function genVirtualCPEListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEListResponseDataInit;
exports.genData = genVirtualCPEListResponseData;
exports.getData = getVirtualCPEListResponseData;
exports.findData = findVirtualCPEListResponseData;
exports.getListData = getVirtualCPEListResponseListData;
exports.deleteData = deleteVirtualCPEListResponseData;
exports.saveData = saveVirtualCPEListResponseData;
exports.saveListData = saveVirtualCPEListResponseListData;
exports.getAllData = getAllVirtualCPEListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEListResponseDataInit();
}

var overrideModule = '../overrides/VirtualCPEListResponse';
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



