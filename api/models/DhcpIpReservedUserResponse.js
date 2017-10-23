'use strict';

//Model Definition File for DhcpIpReservedUserResponse.js

//var DhcpIpReservedUserDTO = require('./DhcpIpReservedUserDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip (DhcpIpReserved) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpIpReservedUserResponse =  {
    type:'class',
    name:'DhcpIpReservedUserResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpReservedUserDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedUserResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedUserResponse';
var dto_name = 'DhcpIpReservedUserResponse';

function DhcpIpReservedUserResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedUserResponseData();
    }
}

function genDhcpIpReservedUserResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedUserResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedUserResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedUserResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedUserResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedUserResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedUserResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedUserResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedUserResponseDataInit;
exports.genData = genDhcpIpReservedUserResponseData;
exports.getData = getDhcpIpReservedUserResponseData;
exports.findData = findDhcpIpReservedUserResponseData;
exports.getListData = getDhcpIpReservedUserResponseListData;
exports.deleteData = deleteDhcpIpReservedUserResponseData;
exports.saveData = saveDhcpIpReservedUserResponseData;
exports.saveListData = saveDhcpIpReservedUserResponseListData;
exports.getAllData = getAllDhcpIpReservedUserResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedUserResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedUserResponse';
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



