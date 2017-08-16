'use strict';

//Model Definition File for DhcpOptionResponse.js

//var DhcpOptionDTO = require('./DhcpOptionDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpOption isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpOptionResponse =  {
    type:'class',
    name:'DhcpOptionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpOptionDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionResponse';
var dto_name = 'DhcpOptionResponse';

function DhcpOptionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionResponseData();
    }
}

function genDhcpOptionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionResponseDataInit;
exports.genData = genDhcpOptionResponseData;
exports.getData = getDhcpOptionResponseData;
exports.findData = findDhcpOptionResponseData;
exports.getListData = getDhcpOptionResponseListData;
exports.deleteData = deleteDhcpOptionResponseData;
exports.saveData = saveDhcpOptionResponseData;
exports.saveListData = saveDhcpOptionResponseListData;
exports.getAllData = getAllDhcpOptionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionResponseDataInit();
}

var overrideModule = '../overrides/DhcpOptionResponse';
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



