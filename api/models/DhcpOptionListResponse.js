'use strict';

//Model Definition File for DhcpOptionListResponse.js

//var DhcpOptionListDTO = require('./DhcpOptionListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpScope ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpOptionListResponse =  {
    type:'class',
    name:'DhcpOptionListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpOptionListDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionListResponse';
var dto_name = 'DhcpOptionListResponse';

function DhcpOptionListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionListResponseData();
    }
}

function genDhcpOptionListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionListResponseDataInit;
exports.genData = genDhcpOptionListResponseData;
exports.getData = getDhcpOptionListResponseData;
exports.findData = findDhcpOptionListResponseData;
exports.getListData = getDhcpOptionListResponseListData;
exports.deleteData = deleteDhcpOptionListResponseData;
exports.saveData = saveDhcpOptionListResponseData;
exports.saveListData = saveDhcpOptionListResponseListData;
exports.getAllData = getAllDhcpOptionListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionListResponseDataInit();
}

var overrideModule = '../overrides/DhcpOptionListResponse';
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



