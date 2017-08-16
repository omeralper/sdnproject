'use strict';

//Model Definition File for EmergencyPolicyRequest.js

//var EmergencyPolicyDTO = require('./EmergencyPolicyDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Acil durum politikası verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.EmergencyPolicyRequest =  {
    type:'class',
    name:'EmergencyPolicyRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'EmergencyPolicyDTO', isRequired: true }
    }
}


//Mockup System for EmergencyPolicyRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEmergencyPolicyRequest';
var dto_name = 'EmergencyPolicyRequest';

function EmergencyPolicyRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEmergencyPolicyRequestData();
    }
}

function genEmergencyPolicyRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEmergencyPolicyRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEmergencyPolicyRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findEmergencyPolicyRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEmergencyPolicyRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEmergencyPolicyRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveEmergencyPolicyRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEmergencyPolicyRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = EmergencyPolicyRequestDataInit;
exports.genData = genEmergencyPolicyRequestData;
exports.getData = getEmergencyPolicyRequestData;
exports.findData = findEmergencyPolicyRequestData;
exports.getListData = getEmergencyPolicyRequestListData;
exports.deleteData = deleteEmergencyPolicyRequestData;
exports.saveData = saveEmergencyPolicyRequestData;
exports.saveListData = saveEmergencyPolicyRequestListData;
exports.getAllData = getAllEmergencyPolicyRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    EmergencyPolicyRequestDataInit();
}

var overrideModule = '../overrides/EmergencyPolicyRequest';
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



