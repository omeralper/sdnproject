'use strict';

//Model Definition File for OvsdbControllerRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Hangi ağ anahtarlayıcılar üzerinde hangi ağ kontrolcüler için işlem yapılacağı bilgisini tutar
*/
exports.OvsdbControllerRequest =  {
    type:'class',
    name:'OvsdbControllerRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        deviceIds : { name: 'deviceIds', type: 'Array', subType: 'string', isRequired: true }, 
        controllerInfoList : { name: 'controllerInfoList', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for OvsdbControllerRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbControllerRequest';
var dto_name = 'OvsdbControllerRequest';

function OvsdbControllerRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbControllerRequestData();
    }
}

function genOvsdbControllerRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbControllerRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbControllerRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbControllerRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbControllerRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbControllerRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbControllerRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbControllerRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbControllerRequestDataInit;
exports.genData = genOvsdbControllerRequestData;
exports.getData = getOvsdbControllerRequestData;
exports.findData = findOvsdbControllerRequestData;
exports.getListData = getOvsdbControllerRequestListData;
exports.deleteData = deleteOvsdbControllerRequestData;
exports.saveData = saveOvsdbControllerRequestData;
exports.saveListData = saveOvsdbControllerRequestListData;
exports.getAllData = getAllOvsdbControllerRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbControllerRequestDataInit();
}

var overrideModule = '../overrides/OvsdbControllerRequest';
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



