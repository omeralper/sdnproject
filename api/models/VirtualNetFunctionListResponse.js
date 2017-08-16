'use strict';

//Model Definition File for VirtualNetFunctionListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VirtualNetFunctionListDTO = require('./VirtualNetFunctionListDTO');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı listeleme işleminin cevap veri yapısı.
*/
exports.VirtualNetFunctionListResponse =  {
    type:'class',
    name:'VirtualNetFunctionListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VirtualNetFunctionListDTO', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionListResponse';
var dto_name = 'VirtualNetFunctionListResponse';

function VirtualNetFunctionListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionListResponseData();
    }
}

function genVirtualNetFunctionListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionListResponseDataInit;
exports.genData = genVirtualNetFunctionListResponseData;
exports.getData = getVirtualNetFunctionListResponseData;
exports.findData = findVirtualNetFunctionListResponseData;
exports.getListData = getVirtualNetFunctionListResponseListData;
exports.deleteData = deleteVirtualNetFunctionListResponseData;
exports.saveData = saveVirtualNetFunctionListResponseData;
exports.saveListData = saveVirtualNetFunctionListResponseListData;
exports.getAllData = getAllVirtualNetFunctionListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionListResponseDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionListResponse';
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



