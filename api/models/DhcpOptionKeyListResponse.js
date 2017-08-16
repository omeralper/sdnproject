'use strict';

//Model Definition File for DhcpOptionKeyListResponse.js

//var DhcpOptionKeyListDTO = require('./DhcpOptionKeyListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpOptionKey listesini içeren cevap veri yapısıdır.
*/
exports.DhcpOptionKeyListResponse =  {
    type:'class',
    name:'DhcpOptionKeyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpOptionKeyListDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionKeyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionKeyListResponse';
var dto_name = 'DhcpOptionKeyListResponse';

function DhcpOptionKeyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionKeyListResponseData();
    }
}

function genDhcpOptionKeyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionKeyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionKeyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionKeyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionKeyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionKeyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionKeyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionKeyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionKeyListResponseDataInit;
exports.genData = genDhcpOptionKeyListResponseData;
exports.getData = getDhcpOptionKeyListResponseData;
exports.findData = findDhcpOptionKeyListResponseData;
exports.getListData = getDhcpOptionKeyListResponseListData;
exports.deleteData = deleteDhcpOptionKeyListResponseData;
exports.saveData = saveDhcpOptionKeyListResponseData;
exports.saveListData = saveDhcpOptionKeyListResponseListData;
exports.getAllData = getAllDhcpOptionKeyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionKeyListResponseDataInit();
}

var overrideModule = '../overrides/DhcpOptionKeyListResponse';
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



