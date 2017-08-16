'use strict';

//Model Definition File for ProactivePathPolicyListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var ProactivePathPolicyListDTO = require('./ProactivePathPolicyListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Proaktif patika politikalarını listeleme olarak kullanılan veri yapısı
*/
exports.ProactivePathPolicyListResponse =  {
    type:'class',
    name:'ProactivePathPolicyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ProactivePathPolicyListDTO', isRequired: true }
    }
}


//Mockup System for ProactivePathPolicyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDProactivePathPolicyListResponse';
var dto_name = 'ProactivePathPolicyListResponse';

function ProactivePathPolicyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genProactivePathPolicyListResponseData();
    }
}

function genProactivePathPolicyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getProactivePathPolicyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getProactivePathPolicyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findProactivePathPolicyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteProactivePathPolicyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveProactivePathPolicyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveProactivePathPolicyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllProactivePathPolicyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ProactivePathPolicyListResponseDataInit;
exports.genData = genProactivePathPolicyListResponseData;
exports.getData = getProactivePathPolicyListResponseData;
exports.findData = findProactivePathPolicyListResponseData;
exports.getListData = getProactivePathPolicyListResponseListData;
exports.deleteData = deleteProactivePathPolicyListResponseData;
exports.saveData = saveProactivePathPolicyListResponseData;
exports.saveListData = saveProactivePathPolicyListResponseListData;
exports.getAllData = getAllProactivePathPolicyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ProactivePathPolicyListResponseDataInit();
}

var overrideModule = '../overrides/ProactivePathPolicyListResponse';
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



