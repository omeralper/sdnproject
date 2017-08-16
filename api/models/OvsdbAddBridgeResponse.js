'use strict';

//Model Definition File for OvsdbAddBridgeResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ anahtarlayıcı üzerindeki portların isim ve numarasını tutar
*/
exports.OvsdbAddBridgeResponse =  {
    type:'class',
    name:'OvsdbAddBridgeResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for OvsdbAddBridgeResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbAddBridgeResponse';
var dto_name = 'OvsdbAddBridgeResponse';

function OvsdbAddBridgeResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbAddBridgeResponseData();
    }
}

function genOvsdbAddBridgeResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbAddBridgeResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbAddBridgeResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbAddBridgeResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbAddBridgeResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbAddBridgeResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbAddBridgeResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbAddBridgeResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbAddBridgeResponseDataInit;
exports.genData = genOvsdbAddBridgeResponseData;
exports.getData = getOvsdbAddBridgeResponseData;
exports.findData = findOvsdbAddBridgeResponseData;
exports.getListData = getOvsdbAddBridgeResponseListData;
exports.deleteData = deleteOvsdbAddBridgeResponseData;
exports.saveData = saveOvsdbAddBridgeResponseData;
exports.saveListData = saveOvsdbAddBridgeResponseListData;
exports.getAllData = getAllOvsdbAddBridgeResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbAddBridgeResponseDataInit();
}

var overrideModule = '../overrides/OvsdbAddBridgeResponse';
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



