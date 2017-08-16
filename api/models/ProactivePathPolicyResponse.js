'use strict';

//Model Definition File for ProactivePathPolicyResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var ProactivePathPolicyDTO = require('./ProactivePathPolicyDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Proaktif patika politikası için kullanılacak cevap veri modelidir.
*/
exports.ProactivePathPolicyResponse =  {
    type:'class',
    name:'ProactivePathPolicyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ProactivePathPolicyDTO', isRequired: true }
    }
}


//Mockup System for ProactivePathPolicyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDProactivePathPolicyResponse';
var dto_name = 'ProactivePathPolicyResponse';

function ProactivePathPolicyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genProactivePathPolicyResponseData();
    }
}

function genProactivePathPolicyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getProactivePathPolicyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getProactivePathPolicyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findProactivePathPolicyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteProactivePathPolicyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveProactivePathPolicyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveProactivePathPolicyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllProactivePathPolicyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ProactivePathPolicyResponseDataInit;
exports.genData = genProactivePathPolicyResponseData;
exports.getData = getProactivePathPolicyResponseData;
exports.findData = findProactivePathPolicyResponseData;
exports.getListData = getProactivePathPolicyResponseListData;
exports.deleteData = deleteProactivePathPolicyResponseData;
exports.saveData = saveProactivePathPolicyResponseData;
exports.saveListData = saveProactivePathPolicyResponseListData;
exports.getAllData = getAllProactivePathPolicyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ProactivePathPolicyResponseDataInit();
}

var overrideModule = '../overrides/ProactivePathPolicyResponse';
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



