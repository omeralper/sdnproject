'use strict';

//Model Definition File for NacUserStatusRequest.js

//var GenericRequest = require('./GenericRequest');
//var NAC_STATUS = require('./NAC_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı durum bilgisinin istek veri yapısı.
*/
exports.NacUserStatusRequest =  {
    type:'class',
    name:'NacUserStatusRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        ipv4 : { name: 'ipv4', type: 'String' }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'NAC_STATUS', isRequired: true }
    }
}


//Mockup System for NacUserStatusRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserStatusRequest';
var dto_name = 'NacUserStatusRequest';

function NacUserStatusRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserStatusRequestData();
    }
}

function genNacUserStatusRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserStatusRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserStatusRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserStatusRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserStatusRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserStatusRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserStatusRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserStatusRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserStatusRequestDataInit;
exports.genData = genNacUserStatusRequestData;
exports.getData = getNacUserStatusRequestData;
exports.findData = findNacUserStatusRequestData;
exports.getListData = getNacUserStatusRequestListData;
exports.deleteData = deleteNacUserStatusRequestData;
exports.saveData = saveNacUserStatusRequestData;
exports.saveListData = saveNacUserStatusRequestListData;
exports.getAllData = getAllNacUserStatusRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserStatusRequestDataInit();
}

var overrideModule = '../overrides/NacUserStatusRequest';
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



