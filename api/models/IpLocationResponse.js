'use strict';

//Model Definition File for IpLocationResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var IpLocationDTO = require('./IpLocationDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Lokayon tabanlı IP bilgisinin sunucudan alınması için kullanılan veri modelidir
*/
exports.IpLocationResponse =  {
    type:'class',
    name:'IpLocationResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'IpLocationDTO', isRequired: true }
    }
}


//Mockup System for IpLocationResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIpLocationResponse';
var dto_name = 'IpLocationResponse';

function IpLocationResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIpLocationResponseData();
    }
}

function genIpLocationResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIpLocationResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIpLocationResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findIpLocationResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIpLocationResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIpLocationResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveIpLocationResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIpLocationResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = IpLocationResponseDataInit;
exports.genData = genIpLocationResponseData;
exports.getData = getIpLocationResponseData;
exports.findData = findIpLocationResponseData;
exports.getListData = getIpLocationResponseListData;
exports.deleteData = deleteIpLocationResponseData;
exports.saveData = saveIpLocationResponseData;
exports.saveListData = saveIpLocationResponseListData;
exports.getAllData = getAllIpLocationResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    IpLocationResponseDataInit();
}

var overrideModule = '../overrides/IpLocationResponse';
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



