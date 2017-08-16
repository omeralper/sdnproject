'use strict';

//Model Definition File for EmergencyPolicyListResponse.js

//var EmergencyPolicyListDTO = require('./EmergencyPolicyListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Acil durum politikası listeleme işleminin cevap veri yapısı.
*/
exports.EmergencyPolicyListResponse =  {
    type:'class',
    name:'EmergencyPolicyListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'EmergencyPolicyListDTO', isRequired: true }
    }
}


//Mockup System for EmergencyPolicyListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEmergencyPolicyListResponse';
var dto_name = 'EmergencyPolicyListResponse';

function EmergencyPolicyListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEmergencyPolicyListResponseData();
    }
}

function genEmergencyPolicyListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEmergencyPolicyListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEmergencyPolicyListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findEmergencyPolicyListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEmergencyPolicyListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEmergencyPolicyListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveEmergencyPolicyListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEmergencyPolicyListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = EmergencyPolicyListResponseDataInit;
exports.genData = genEmergencyPolicyListResponseData;
exports.getData = getEmergencyPolicyListResponseData;
exports.findData = findEmergencyPolicyListResponseData;
exports.getListData = getEmergencyPolicyListResponseListData;
exports.deleteData = deleteEmergencyPolicyListResponseData;
exports.saveData = saveEmergencyPolicyListResponseData;
exports.saveListData = saveEmergencyPolicyListResponseListData;
exports.getAllData = getAllEmergencyPolicyListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    EmergencyPolicyListResponseDataInit();
}

var overrideModule = '../overrides/EmergencyPolicyListResponse';
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



