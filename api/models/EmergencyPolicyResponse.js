'use strict';

//Model Definition File for EmergencyPolicyResponse.js

//var EmergencyPolicyDTO = require('./EmergencyPolicyDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Acil durum politikası detaylarının dönüldüğü veri yapısı.
*/
exports.EmergencyPolicyResponse =  {
    type:'class',
    name:'EmergencyPolicyResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'EmergencyPolicyDTO' }
    }
}


//Mockup System for EmergencyPolicyResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEmergencyPolicyResponse';
var dto_name = 'EmergencyPolicyResponse';

function EmergencyPolicyResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEmergencyPolicyResponseData();
    }
}

function genEmergencyPolicyResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEmergencyPolicyResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEmergencyPolicyResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findEmergencyPolicyResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEmergencyPolicyResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEmergencyPolicyResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveEmergencyPolicyResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEmergencyPolicyResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = EmergencyPolicyResponseDataInit;
exports.genData = genEmergencyPolicyResponseData;
exports.getData = getEmergencyPolicyResponseData;
exports.findData = findEmergencyPolicyResponseData;
exports.getListData = getEmergencyPolicyResponseListData;
exports.deleteData = deleteEmergencyPolicyResponseData;
exports.saveData = saveEmergencyPolicyResponseData;
exports.saveListData = saveEmergencyPolicyResponseListData;
exports.getAllData = getAllEmergencyPolicyResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    EmergencyPolicyResponseDataInit();
}

var overrideModule = '../overrides/EmergencyPolicyResponse';
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



