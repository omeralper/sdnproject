'use strict';

//Model Definition File for DhcpIpReservedListResponse.js

//var DhcpIpReservedListDTO = require('./DhcpIpReservedListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip (DhcpIpReserved) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpIpReservedListResponse =  {
    type:'class',
    name:'DhcpIpReservedListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpReservedListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedListResponse';
var dto_name = 'DhcpIpReservedListResponse';

function DhcpIpReservedListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedListResponseData();
    }
}

function genDhcpIpReservedListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedListResponseDataInit;
exports.genData = genDhcpIpReservedListResponseData;
exports.getData = getDhcpIpReservedListResponseData;
exports.findData = findDhcpIpReservedListResponseData;
exports.getListData = getDhcpIpReservedListResponseListData;
exports.deleteData = deleteDhcpIpReservedListResponseData;
exports.saveData = saveDhcpIpReservedListResponseData;
exports.saveListData = saveDhcpIpReservedListResponseListData;
exports.getAllData = getAllDhcpIpReservedListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedListResponse';
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



