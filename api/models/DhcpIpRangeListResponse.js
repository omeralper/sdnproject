'use strict';

//Model Definition File for DhcpIpRangeListResponse.js

//var DhcpIpRangeListDTO = require('./DhcpIpRangeListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp ip menzili (DhcpIpRange) ayrıntılarının listelendiği işlemin cevap veri yapısıdır.
*/
exports.DhcpIpRangeListResponse =  {
    type:'class',
    name:'DhcpIpRangeListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpRangeListDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpRangeListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpRangeListResponse';
var dto_name = 'DhcpIpRangeListResponse';

function DhcpIpRangeListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpRangeListResponseData();
    }
}

function genDhcpIpRangeListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpRangeListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpRangeListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpRangeListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpRangeListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpRangeListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpRangeListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpRangeListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpRangeListResponseDataInit;
exports.genData = genDhcpIpRangeListResponseData;
exports.getData = getDhcpIpRangeListResponseData;
exports.findData = findDhcpIpRangeListResponseData;
exports.getListData = getDhcpIpRangeListResponseListData;
exports.deleteData = deleteDhcpIpRangeListResponseData;
exports.saveData = saveDhcpIpRangeListResponseData;
exports.saveListData = saveDhcpIpRangeListResponseListData;
exports.getAllData = getAllDhcpIpRangeListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpRangeListResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpRangeListResponse';
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



