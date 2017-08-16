'use strict';

//Model Definition File for OvsdbControllerInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Hangi ağ anahtarlayıcıların kontrolcü bilgisinin alınacağı bilgisini tutar
*/
exports.OvsdbControllerInfoRequest =  {
    type:'class',
    name:'OvsdbControllerInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        deviceIds : { name: 'deviceIds', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for OvsdbControllerInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbControllerInfoRequest';
var dto_name = 'OvsdbControllerInfoRequest';

function OvsdbControllerInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbControllerInfoRequestData();
    }
}

function genOvsdbControllerInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbControllerInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbControllerInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbControllerInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbControllerInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbControllerInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbControllerInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbControllerInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbControllerInfoRequestDataInit;
exports.genData = genOvsdbControllerInfoRequestData;
exports.getData = getOvsdbControllerInfoRequestData;
exports.findData = findOvsdbControllerInfoRequestData;
exports.getListData = getOvsdbControllerInfoRequestListData;
exports.deleteData = deleteOvsdbControllerInfoRequestData;
exports.saveData = saveOvsdbControllerInfoRequestData;
exports.saveListData = saveOvsdbControllerInfoRequestListData;
exports.getAllData = getAllOvsdbControllerInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbControllerInfoRequestDataInit();
}

var overrideModule = '../overrides/OvsdbControllerInfoRequest';
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



