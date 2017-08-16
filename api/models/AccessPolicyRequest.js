'use strict';

//Model Definition File for AccessPolicyRequest.js

//var AccessPolicyDTO = require('./AccessPolicyDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.AccessPolicyRequest =  {
    type:'class',
    name:'AccessPolicyRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AccessPolicyDTO', isRequired: true }
    }
}


//Mockup System for AccessPolicyRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessPolicyRequest';
var dto_name = 'AccessPolicyRequest';

function AccessPolicyRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessPolicyRequestData();
    }
}

function genAccessPolicyRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessPolicyRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessPolicyRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessPolicyRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessPolicyRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessPolicyRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessPolicyRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessPolicyRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessPolicyRequestDataInit;
exports.genData = genAccessPolicyRequestData;
exports.getData = getAccessPolicyRequestData;
exports.findData = findAccessPolicyRequestData;
exports.getListData = getAccessPolicyRequestListData;
exports.deleteData = deleteAccessPolicyRequestData;
exports.saveData = saveAccessPolicyRequestData;
exports.saveListData = saveAccessPolicyRequestListData;
exports.getAllData = getAllAccessPolicyRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessPolicyRequestDataInit();
}

var overrideModule = '../overrides/AccessPolicyRequest';
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



