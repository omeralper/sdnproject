'use strict';

//Model Definition File for DhcpIpExcludedResponse.js

//var DhcpIpExcludedDTO = require('./DhcpIpExcludedDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yasaklanmış ip (DhcpIpExcluded) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpIpExcludedResponse =  {
    type:'class',
    name:'DhcpIpExcludedResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpExcludedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpExcludedResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpExcludedResponse';
var dto_name = 'DhcpIpExcludedResponse';

function DhcpIpExcludedResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpExcludedResponseData();
    }
}

function genDhcpIpExcludedResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpExcludedResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpExcludedResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpExcludedResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpExcludedResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpExcludedResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpExcludedResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpExcludedResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpExcludedResponseDataInit;
exports.genData = genDhcpIpExcludedResponseData;
exports.getData = getDhcpIpExcludedResponseData;
exports.findData = findDhcpIpExcludedResponseData;
exports.getListData = getDhcpIpExcludedResponseListData;
exports.deleteData = deleteDhcpIpExcludedResponseData;
exports.saveData = saveDhcpIpExcludedResponseData;
exports.saveListData = saveDhcpIpExcludedResponseListData;
exports.getAllData = getAllDhcpIpExcludedResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpExcludedResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpExcludedResponse';
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



