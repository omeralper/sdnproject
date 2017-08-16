'use strict';

//Model Definition File for VirtualNetFunctionInstanceActionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenStack uzerindeki VM&#39;leri moduler olarak start/stop/reboot edilmesi işleminin cevap veri yapısı.
*/
exports.VirtualNetFunctionInstanceActionResponse =  {
    type:'class',
    name:'VirtualNetFunctionInstanceActionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        osResponse : { name: 'osResponse', type: 'String', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionInstanceActionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceActionResponse';
var dto_name = 'VirtualNetFunctionInstanceActionResponse';

function VirtualNetFunctionInstanceActionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceActionResponseData();
    }
}

function genVirtualNetFunctionInstanceActionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceActionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceActionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceActionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceActionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceActionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceActionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceActionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceActionResponseDataInit;
exports.genData = genVirtualNetFunctionInstanceActionResponseData;
exports.getData = getVirtualNetFunctionInstanceActionResponseData;
exports.findData = findVirtualNetFunctionInstanceActionResponseData;
exports.getListData = getVirtualNetFunctionInstanceActionResponseListData;
exports.deleteData = deleteVirtualNetFunctionInstanceActionResponseData;
exports.saveData = saveVirtualNetFunctionInstanceActionResponseData;
exports.saveListData = saveVirtualNetFunctionInstanceActionResponseListData;
exports.getAllData = getAllVirtualNetFunctionInstanceActionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceActionResponseDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceActionResponse';
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



