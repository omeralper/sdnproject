'use strict';

//Model Definition File for DhcpScopeListResponse.js

//var DhcpScopeListDTO = require('./DhcpScopeListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpScope) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpScopeListResponse =  {
    type:'class',
    name:'DhcpScopeListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpScopeListDTO', isRequired: true }
    }
}


//Mockup System for DhcpScopeListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpScopeListResponse';
var dto_name = 'DhcpScopeListResponse';

function DhcpScopeListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpScopeListResponseData();
    }
}

function genDhcpScopeListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpScopeListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpScopeListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpScopeListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpScopeListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpScopeListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpScopeListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpScopeListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpScopeListResponseDataInit;
exports.genData = genDhcpScopeListResponseData;
exports.getData = getDhcpScopeListResponseData;
exports.findData = findDhcpScopeListResponseData;
exports.getListData = getDhcpScopeListResponseListData;
exports.deleteData = deleteDhcpScopeListResponseData;
exports.saveData = saveDhcpScopeListResponseData;
exports.saveListData = saveDhcpScopeListResponseListData;
exports.getAllData = getAllDhcpScopeListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpScopeListResponseDataInit();
}

var overrideModule = '../overrides/DhcpScopeListResponse';
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



