'use strict';

//Model Definition File for ProactivePathPolicyRequest.js

//var GenericRequest = require('./GenericRequest');
//var ProactivePathPolicyDTO = require('./ProactivePathPolicyDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Proaktif patika politikası için kullanılacak istek veri modelidir.
*/
exports.ProactivePathPolicyRequest =  {
    type:'class',
    name:'ProactivePathPolicyRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ProactivePathPolicyDTO', isRequired: true }
    }
}


//Mockup System for ProactivePathPolicyRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDProactivePathPolicyRequest';
var dto_name = 'ProactivePathPolicyRequest';

function ProactivePathPolicyRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genProactivePathPolicyRequestData();
    }
}

function genProactivePathPolicyRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getProactivePathPolicyRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getProactivePathPolicyRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findProactivePathPolicyRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteProactivePathPolicyRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveProactivePathPolicyRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveProactivePathPolicyRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllProactivePathPolicyRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ProactivePathPolicyRequestDataInit;
exports.genData = genProactivePathPolicyRequestData;
exports.getData = getProactivePathPolicyRequestData;
exports.findData = findProactivePathPolicyRequestData;
exports.getListData = getProactivePathPolicyRequestListData;
exports.deleteData = deleteProactivePathPolicyRequestData;
exports.saveData = saveProactivePathPolicyRequestData;
exports.saveListData = saveProactivePathPolicyRequestListData;
exports.getAllData = getAllProactivePathPolicyRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ProactivePathPolicyRequestDataInit();
}

var overrideModule = '../overrides/ProactivePathPolicyRequest';
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



