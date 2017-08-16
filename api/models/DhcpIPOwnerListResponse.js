'use strict';

//Model Definition File for DhcpIPOwnerListResponse.js

//var DhcpIPOwnerListDTO = require('./DhcpIPOwnerListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpIPOwner listesini içeren cevap veri yapısıdır.
*/
exports.DhcpIPOwnerListResponse =  {
    type:'class',
    name:'DhcpIPOwnerListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIPOwnerListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIPOwnerListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIPOwnerListResponse';
var dto_name = 'DhcpIPOwnerListResponse';

function DhcpIPOwnerListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIPOwnerListResponseData();
    }
}

function genDhcpIPOwnerListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIPOwnerListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIPOwnerListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIPOwnerListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIPOwnerListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIPOwnerListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIPOwnerListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIPOwnerListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIPOwnerListResponseDataInit;
exports.genData = genDhcpIPOwnerListResponseData;
exports.getData = getDhcpIPOwnerListResponseData;
exports.findData = findDhcpIPOwnerListResponseData;
exports.getListData = getDhcpIPOwnerListResponseListData;
exports.deleteData = deleteDhcpIPOwnerListResponseData;
exports.saveData = saveDhcpIPOwnerListResponseData;
exports.saveListData = saveDhcpIPOwnerListResponseListData;
exports.getAllData = getAllDhcpIPOwnerListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIPOwnerListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIPOwnerListResponse';
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



