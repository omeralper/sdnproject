'use strict';

//Model Definition File for DhcpIpReservedUserListResponse.js

//var DhcpIpReservedUserListDTO = require('./DhcpIpReservedUserListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip (DhcpIpReservedUser) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpIpReservedUserListResponse =  {
    type:'class',
    name:'DhcpIpReservedUserListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpReservedUserListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedUserListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedUserListResponse';
var dto_name = 'DhcpIpReservedUserListResponse';

function DhcpIpReservedUserListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedUserListResponseData();
    }
}

function genDhcpIpReservedUserListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedUserListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedUserListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedUserListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedUserListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedUserListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedUserListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedUserListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedUserListResponseDataInit;
exports.genData = genDhcpIpReservedUserListResponseData;
exports.getData = getDhcpIpReservedUserListResponseData;
exports.findData = findDhcpIpReservedUserListResponseData;
exports.getListData = getDhcpIpReservedUserListResponseListData;
exports.deleteData = deleteDhcpIpReservedUserListResponseData;
exports.saveData = saveDhcpIpReservedUserListResponseData;
exports.saveListData = saveDhcpIpReservedUserListResponseListData;
exports.getAllData = getAllDhcpIpReservedUserListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedUserListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedUserListResponse';
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



