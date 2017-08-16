'use strict';

//Model Definition File for VirtualNetFunctionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VirtualNetFunctionDTO = require('./VirtualNetFunctionDTO');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı detaylarının dönüldüğü veri yapısı.
*/
exports.VirtualNetFunctionResponse =  {
    type:'class',
    name:'VirtualNetFunctionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VirtualNetFunctionDTO' }
    }
}


//Mockup System for VirtualNetFunctionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionResponse';
var dto_name = 'VirtualNetFunctionResponse';

function VirtualNetFunctionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionResponseData();
    }
}

function genVirtualNetFunctionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionResponseDataInit;
exports.genData = genVirtualNetFunctionResponseData;
exports.getData = getVirtualNetFunctionResponseData;
exports.findData = findVirtualNetFunctionResponseData;
exports.getListData = getVirtualNetFunctionResponseListData;
exports.deleteData = deleteVirtualNetFunctionResponseData;
exports.saveData = saveVirtualNetFunctionResponseData;
exports.saveListData = saveVirtualNetFunctionResponseListData;
exports.getAllData = getAllVirtualNetFunctionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionResponseDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionResponse';
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



