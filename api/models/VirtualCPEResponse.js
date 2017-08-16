'use strict';

//Model Definition File for VirtualCPEResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VirtualCPEDTO = require('./VirtualCPEDTO');

'use strict';
/**
* Sanal CPE detaylarının dönüldüğü veri yapısı.
*/
exports.VirtualCPEResponse =  {
    type:'class',
    name:'VirtualCPEResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VirtualCPEDTO' }
    }
}


//Mockup System for VirtualCPEResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEResponse';
var dto_name = 'VirtualCPEResponse';

function VirtualCPEResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEResponseData();
    }
}

function genVirtualCPEResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEResponseDataInit;
exports.genData = genVirtualCPEResponseData;
exports.getData = getVirtualCPEResponseData;
exports.findData = findVirtualCPEResponseData;
exports.getListData = getVirtualCPEResponseListData;
exports.deleteData = deleteVirtualCPEResponseData;
exports.saveData = saveVirtualCPEResponseData;
exports.saveListData = saveVirtualCPEResponseListData;
exports.getAllData = getAllVirtualCPEResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEResponseDataInit();
}

var overrideModule = '../overrides/VirtualCPEResponse';
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



