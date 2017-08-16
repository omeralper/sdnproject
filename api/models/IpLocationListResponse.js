'use strict';

//Model Definition File for IpLocationListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var IpLocationListDTO = require('./IpLocationListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Lokasyon tabanlı IP bilgisinin sunucudan alınması için kullanılan veri modelidir
*/
exports.IpLocationListResponse =  {
    type:'class',
    name:'IpLocationListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'IpLocationListDTO', isRequired: true }
    }
}


//Mockup System for IpLocationListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIpLocationListResponse';
var dto_name = 'IpLocationListResponse';

function IpLocationListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIpLocationListResponseData();
    }
}

function genIpLocationListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIpLocationListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIpLocationListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findIpLocationListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIpLocationListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIpLocationListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveIpLocationListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIpLocationListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = IpLocationListResponseDataInit;
exports.genData = genIpLocationListResponseData;
exports.getData = getIpLocationListResponseData;
exports.findData = findIpLocationListResponseData;
exports.getListData = getIpLocationListResponseListData;
exports.deleteData = deleteIpLocationListResponseData;
exports.saveData = saveIpLocationListResponseData;
exports.saveListData = saveIpLocationListResponseListData;
exports.getAllData = getAllIpLocationListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    IpLocationListResponseDataInit();
}

var overrideModule = '../overrides/IpLocationListResponse';
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



