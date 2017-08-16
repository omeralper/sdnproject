'use strict';

//Model Definition File for DhcpIpPoolListResponse.js

//var DhcpIpPoolListDTO = require('./DhcpIpPoolListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpIpPool) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpIpPoolListResponse =  {
    type:'class',
    name:'DhcpIpPoolListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpPoolListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpPoolListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpPoolListResponse';
var dto_name = 'DhcpIpPoolListResponse';

function DhcpIpPoolListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpPoolListResponseData();
    }
}

function genDhcpIpPoolListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpPoolListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpPoolListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpPoolListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpPoolListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpPoolListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpPoolListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpPoolListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpPoolListResponseDataInit;
exports.genData = genDhcpIpPoolListResponseData;
exports.getData = getDhcpIpPoolListResponseData;
exports.findData = findDhcpIpPoolListResponseData;
exports.getListData = getDhcpIpPoolListResponseListData;
exports.deleteData = deleteDhcpIpPoolListResponseData;
exports.saveData = saveDhcpIpPoolListResponseData;
exports.saveListData = saveDhcpIpPoolListResponseListData;
exports.getAllData = getAllDhcpIpPoolListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpPoolListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpPoolListResponse';
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



