'use strict';

//Model Definition File for DhcpIpPoolResponse.js

//var DhcpIpPoolDTO = require('./DhcpIpPoolDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpIpPool) isteğine verilecek cevabın veri yapısıdır.
*/
exports.DhcpIpPoolResponse =  {
    type:'class',
    name:'DhcpIpPoolResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DhcpIpPoolDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpPoolResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpPoolResponse';
var dto_name = 'DhcpIpPoolResponse';

function DhcpIpPoolResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpPoolResponseData();
    }
}

function genDhcpIpPoolResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpPoolResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpPoolResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpPoolResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpPoolResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpPoolResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpPoolResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpPoolResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpPoolResponseDataInit;
exports.genData = genDhcpIpPoolResponseData;
exports.getData = getDhcpIpPoolResponseData;
exports.findData = findDhcpIpPoolResponseData;
exports.getListData = getDhcpIpPoolResponseListData;
exports.deleteData = deleteDhcpIpPoolResponseData;
exports.saveData = saveDhcpIpPoolResponseData;
exports.saveListData = saveDhcpIpPoolResponseListData;
exports.getAllData = getAllDhcpIpPoolResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpPoolResponseDataInit();
}

var overrideModule = '../overrides/DhcpIpPoolResponse';
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



