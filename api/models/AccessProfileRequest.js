'use strict';

//Model Definition File for AccessProfileRequest.js

//var AccessProfileDTO = require('./AccessProfileDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Erişim politikası verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.AccessProfileRequest =  {
    type:'class',
    name:'AccessProfileRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AccessProfileDTO', isRequired: true }
    }
}


//Mockup System for AccessProfileRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAccessProfileRequest';
var dto_name = 'AccessProfileRequest';

function AccessProfileRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAccessProfileRequestData();
    }
}

function genAccessProfileRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAccessProfileRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAccessProfileRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAccessProfileRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAccessProfileRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAccessProfileRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAccessProfileRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAccessProfileRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AccessProfileRequestDataInit;
exports.genData = genAccessProfileRequestData;
exports.getData = getAccessProfileRequestData;
exports.findData = findAccessProfileRequestData;
exports.getListData = getAccessProfileRequestListData;
exports.deleteData = deleteAccessProfileRequestData;
exports.saveData = saveAccessProfileRequestData;
exports.saveListData = saveAccessProfileRequestListData;
exports.getAllData = getAllAccessProfileRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AccessProfileRequestDataInit();
}

var overrideModule = '../overrides/AccessProfileRequest';
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



