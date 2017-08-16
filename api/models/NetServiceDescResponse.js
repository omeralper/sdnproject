'use strict';

//Model Definition File for NetServiceDescResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NetServiceDescDTO = require('./NetServiceDescDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis tanımı detaylarının dönüldüğü veri yapısı.
*/
exports.NetServiceDescResponse =  {
    type:'class',
    name:'NetServiceDescResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NetServiceDescDTO' }
    }
}


//Mockup System for NetServiceDescResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescResponse';
var dto_name = 'NetServiceDescResponse';

function NetServiceDescResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescResponseData();
    }
}

function genNetServiceDescResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescResponseDataInit;
exports.genData = genNetServiceDescResponseData;
exports.getData = getNetServiceDescResponseData;
exports.findData = findNetServiceDescResponseData;
exports.getListData = getNetServiceDescResponseListData;
exports.deleteData = deleteNetServiceDescResponseData;
exports.saveData = saveNetServiceDescResponseData;
exports.saveListData = saveNetServiceDescResponseListData;
exports.getAllData = getAllNetServiceDescResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescResponseDataInit();
}

var overrideModule = '../overrides/NetServiceDescResponse';
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



