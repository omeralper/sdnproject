'use strict';

//Model Definition File for OvsdbControllerResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var OvsdbControllerDTO = require('./OvsdbControllerDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* İşlem sonrasında hangi ağ anahtarlayıcıyı hangi ağ kontrolcülerin kontrol ettiği bilgisini tutar
*/
exports.OvsdbControllerResponse =  {
    type:'class',
    name:'OvsdbControllerResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'OvsdbControllerDTO', isRequired: true }
    }
}


//Mockup System for OvsdbControllerResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbControllerResponse';
var dto_name = 'OvsdbControllerResponse';

function OvsdbControllerResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbControllerResponseData();
    }
}

function genOvsdbControllerResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbControllerResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbControllerResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbControllerResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbControllerResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbControllerResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbControllerResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbControllerResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbControllerResponseDataInit;
exports.genData = genOvsdbControllerResponseData;
exports.getData = getOvsdbControllerResponseData;
exports.findData = findOvsdbControllerResponseData;
exports.getListData = getOvsdbControllerResponseListData;
exports.deleteData = deleteOvsdbControllerResponseData;
exports.saveData = saveOvsdbControllerResponseData;
exports.saveListData = saveOvsdbControllerResponseListData;
exports.getAllData = getAllOvsdbControllerResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbControllerResponseDataInit();
}

var overrideModule = '../overrides/OvsdbControllerResponse';
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



