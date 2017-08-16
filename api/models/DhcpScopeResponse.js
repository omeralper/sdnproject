'use strict';

//Model Definition File for DhcpScopeResponse.js

//var DhcpScopeDTO = require('./DhcpScopeDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpScope) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpScopeResponse =  {
    type:'class',
    name:'DhcpScopeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpScopeDTO', isRequired: true }
    }
}


//Mockup System for DhcpScopeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpScopeResponse';
var dto_name = 'DhcpScopeResponse';

function DhcpScopeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpScopeResponseData();
    }
}

function genDhcpScopeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpScopeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpScopeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpScopeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpScopeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpScopeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpScopeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpScopeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpScopeResponseDataInit;
exports.genData = genDhcpScopeResponseData;
exports.getData = getDhcpScopeResponseData;
exports.findData = findDhcpScopeResponseData;
exports.getListData = getDhcpScopeResponseListData;
exports.deleteData = deleteDhcpScopeResponseData;
exports.saveData = saveDhcpScopeResponseData;
exports.saveListData = saveDhcpScopeResponseListData;
exports.getAllData = getAllDhcpScopeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpScopeResponseDataInit();
}

var overrideModule = '../overrides/DhcpScopeResponse';
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



