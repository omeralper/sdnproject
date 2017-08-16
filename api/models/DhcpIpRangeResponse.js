'use strict';

//Model Definition File for DhcpIpRangeResponse.js

//var DhcpIpRangeDTO = require('./DhcpIpRangeDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp ip menzili (DhcpIpRange) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpIpRangeResponse =  {
    type:'class',
    name:'DhcpIpRangeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpRangeDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpRangeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpRangeResponse';
var dto_name = 'DhcpIpRangeResponse';

function DhcpIpRangeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpRangeResponseData();
    }
}

function genDhcpIpRangeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpRangeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpRangeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpRangeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpRangeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpRangeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpRangeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpRangeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpRangeResponseDataInit;
exports.genData = genDhcpIpRangeResponseData;
exports.getData = getDhcpIpRangeResponseData;
exports.findData = findDhcpIpRangeResponseData;
exports.getListData = getDhcpIpRangeResponseListData;
exports.deleteData = deleteDhcpIpRangeResponseData;
exports.saveData = saveDhcpIpRangeResponseData;
exports.saveListData = saveDhcpIpRangeResponseListData;
exports.getAllData = getAllDhcpIpRangeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpRangeResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpRangeResponse';
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



