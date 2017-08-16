'use strict';

//Model Definition File for DhcpIpReservedResponse.js

//var DhcpIpReservedDTO = require('./DhcpIpReservedDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip (DhcpIpReserved) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpIpReservedResponse =  {
    type:'class',
    name:'DhcpIpReservedResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpReservedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedResponse';
var dto_name = 'DhcpIpReservedResponse';

function DhcpIpReservedResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedResponseData();
    }
}

function genDhcpIpReservedResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedResponseDataInit;
exports.genData = genDhcpIpReservedResponseData;
exports.getData = getDhcpIpReservedResponseData;
exports.findData = findDhcpIpReservedResponseData;
exports.getListData = getDhcpIpReservedResponseListData;
exports.deleteData = deleteDhcpIpReservedResponseData;
exports.saveData = saveDhcpIpReservedResponseData;
exports.saveListData = saveDhcpIpReservedResponseListData;
exports.getAllData = getAllDhcpIpReservedResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedResponse';
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



