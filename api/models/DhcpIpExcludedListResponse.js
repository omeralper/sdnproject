'use strict';

//Model Definition File for DhcpIpExcludedListResponse.js

//var DhcpIpExcludedListDTO = require('./DhcpIpExcludedListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yasaklanmış ip (DhcpIpExcluded) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpIpExcludedListResponse =  {
    type:'class',
    name:'DhcpIpExcludedListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpExcludedListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpExcludedListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpExcludedListResponse';
var dto_name = 'DhcpIpExcludedListResponse';

function DhcpIpExcludedListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpExcludedListResponseData();
    }
}

function genDhcpIpExcludedListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpExcludedListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpExcludedListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpExcludedListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpExcludedListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpExcludedListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpExcludedListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpExcludedListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpExcludedListResponseDataInit;
exports.genData = genDhcpIpExcludedListResponseData;
exports.getData = getDhcpIpExcludedListResponseData;
exports.findData = findDhcpIpExcludedListResponseData;
exports.getListData = getDhcpIpExcludedListResponseListData;
exports.deleteData = deleteDhcpIpExcludedListResponseData;
exports.saveData = saveDhcpIpExcludedListResponseData;
exports.saveListData = saveDhcpIpExcludedListResponseListData;
exports.getAllData = getAllDhcpIpExcludedListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpExcludedListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpExcludedListResponse';
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



