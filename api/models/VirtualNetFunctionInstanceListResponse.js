'use strict';

//Model Definition File for VirtualNetFunctionInstanceListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VirtualNetFunctionInstanceListDTO = require('./VirtualNetFunctionInstanceListDTO');

'use strict';
/**
* VNFR sunucudan donus objesi
*/
exports.VirtualNetFunctionInstanceListResponse =  {
    type:'class',
    name:'VirtualNetFunctionInstanceListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VirtualNetFunctionInstanceListDTO', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionInstanceListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceListResponse';
var dto_name = 'VirtualNetFunctionInstanceListResponse';

function VirtualNetFunctionInstanceListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceListResponseData();
    }
}

function genVirtualNetFunctionInstanceListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceListResponseDataInit;
exports.genData = genVirtualNetFunctionInstanceListResponseData;
exports.getData = getVirtualNetFunctionInstanceListResponseData;
exports.findData = findVirtualNetFunctionInstanceListResponseData;
exports.getListData = getVirtualNetFunctionInstanceListResponseListData;
exports.deleteData = deleteVirtualNetFunctionInstanceListResponseData;
exports.saveData = saveVirtualNetFunctionInstanceListResponseData;
exports.saveListData = saveVirtualNetFunctionInstanceListResponseListData;
exports.getAllData = getAllVirtualNetFunctionInstanceListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceListResponseDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceListResponse';
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



