'use strict';

//Model Definition File for OvsdbBridgeRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bilgisi istenen ağ anahtarlayıcının adını tutar
*/
exports.OvsdbBridgeRequest =  {
    type:'class',
    name:'OvsdbBridgeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }
    }
}


//Mockup System for OvsdbBridgeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbBridgeRequest';
var dto_name = 'OvsdbBridgeRequest';

function OvsdbBridgeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbBridgeRequestData();
    }
}

function genOvsdbBridgeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbBridgeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbBridgeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbBridgeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbBridgeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbBridgeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbBridgeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbBridgeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbBridgeRequestDataInit;
exports.genData = genOvsdbBridgeRequestData;
exports.getData = getOvsdbBridgeRequestData;
exports.findData = findOvsdbBridgeRequestData;
exports.getListData = getOvsdbBridgeRequestListData;
exports.deleteData = deleteOvsdbBridgeRequestData;
exports.saveData = saveOvsdbBridgeRequestData;
exports.saveListData = saveOvsdbBridgeRequestListData;
exports.getAllData = getAllOvsdbBridgeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbBridgeRequestDataInit();
}

var overrideModule = '../overrides/OvsdbBridgeRequest';
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



