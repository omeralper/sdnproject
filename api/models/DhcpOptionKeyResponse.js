'use strict';

//Model Definition File for DhcpOptionKeyResponse.js

//var DhcpOptionKeyDTO = require('./DhcpOptionKeyDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpOptionKey isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpOptionKeyResponse =  {
    type:'class',
    name:'DhcpOptionKeyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpOptionKeyDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionKeyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionKeyResponse';
var dto_name = 'DhcpOptionKeyResponse';

function DhcpOptionKeyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionKeyResponseData();
    }
}

function genDhcpOptionKeyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionKeyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionKeyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionKeyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionKeyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionKeyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionKeyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionKeyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionKeyResponseDataInit;
exports.genData = genDhcpOptionKeyResponseData;
exports.getData = getDhcpOptionKeyResponseData;
exports.findData = findDhcpOptionKeyResponseData;
exports.getListData = getDhcpOptionKeyResponseListData;
exports.deleteData = deleteDhcpOptionKeyResponseData;
exports.saveData = saveDhcpOptionKeyResponseData;
exports.saveListData = saveDhcpOptionKeyResponseListData;
exports.getAllData = getAllDhcpOptionKeyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionKeyResponseDataInit();
}

var overrideModule = '../overrides/DhcpOptionKeyResponse';
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



