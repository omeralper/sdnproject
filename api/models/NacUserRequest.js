'use strict';

//Model Definition File for NacUserRequest.js

//var GenericRequest = require('./GenericRequest');
//var NacUserDTO = require('./NacUserDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Kullanıcı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NacUserRequest =  {
    type:'class',
    name:'NacUserRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NacUserDTO', isRequired: true }, 
        isSendPwdEmail : { name: 'isSendPwdEmail', type: 'Boolean' }
    }
}


//Mockup System for NacUserRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserRequest';
var dto_name = 'NacUserRequest';

function NacUserRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserRequestData();
    }
}

function genNacUserRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserRequestDataInit;
exports.genData = genNacUserRequestData;
exports.getData = getNacUserRequestData;
exports.findData = findNacUserRequestData;
exports.getListData = getNacUserRequestListData;
exports.deleteData = deleteNacUserRequestData;
exports.saveData = saveNacUserRequestData;
exports.saveListData = saveNacUserRequestListData;
exports.getAllData = getAllNacUserRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserRequestDataInit();
}

var overrideModule = '../overrides/NacUserRequest';
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



