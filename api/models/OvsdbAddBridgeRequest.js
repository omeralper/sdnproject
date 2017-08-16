'use strict';

//Model Definition File for OvsdbAddBridgeRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ anahtarlayıcı üzerinde tanımlanacak köprü bilgisini verir
*/
exports.OvsdbAddBridgeRequest =  {
    type:'class',
    name:'OvsdbAddBridgeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }, 
        bridgeName : { name: 'bridgeName', type: 'String', isRequired: true }, 
        dpid : { name: 'dpid', type: 'String', isRequired: true }, 
        controllerInfoList : { name: 'controllerInfoList', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for OvsdbAddBridgeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbAddBridgeRequest';
var dto_name = 'OvsdbAddBridgeRequest';

function OvsdbAddBridgeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbAddBridgeRequestData();
    }
}

function genOvsdbAddBridgeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbAddBridgeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbAddBridgeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbAddBridgeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbAddBridgeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbAddBridgeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbAddBridgeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbAddBridgeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbAddBridgeRequestDataInit;
exports.genData = genOvsdbAddBridgeRequestData;
exports.getData = getOvsdbAddBridgeRequestData;
exports.findData = findOvsdbAddBridgeRequestData;
exports.getListData = getOvsdbAddBridgeRequestListData;
exports.deleteData = deleteOvsdbAddBridgeRequestData;
exports.saveData = saveOvsdbAddBridgeRequestData;
exports.saveListData = saveOvsdbAddBridgeRequestListData;
exports.getAllData = getAllOvsdbAddBridgeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbAddBridgeRequestDataInit();
}

var overrideModule = '../overrides/OvsdbAddBridgeRequest';
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



