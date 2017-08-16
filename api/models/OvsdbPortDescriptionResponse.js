'use strict';

//Model Definition File for OvsdbPortDescriptionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var OvsdbPortDescriptionDTO = require('./OvsdbPortDescriptionDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ anahtarlayıcı üzerindeki portların tanımlarını tutar
*/
exports.OvsdbPortDescriptionResponse =  {
    type:'class',
    name:'OvsdbPortDescriptionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'OvsdbPortDescriptionDTO', isRequired: true }
    }
}


//Mockup System for OvsdbPortDescriptionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbPortDescriptionResponse';
var dto_name = 'OvsdbPortDescriptionResponse';

function OvsdbPortDescriptionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbPortDescriptionResponseData();
    }
}

function genOvsdbPortDescriptionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbPortDescriptionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbPortDescriptionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbPortDescriptionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbPortDescriptionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbPortDescriptionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbPortDescriptionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbPortDescriptionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbPortDescriptionResponseDataInit;
exports.genData = genOvsdbPortDescriptionResponseData;
exports.getData = getOvsdbPortDescriptionResponseData;
exports.findData = findOvsdbPortDescriptionResponseData;
exports.getListData = getOvsdbPortDescriptionResponseListData;
exports.deleteData = deleteOvsdbPortDescriptionResponseData;
exports.saveData = saveOvsdbPortDescriptionResponseData;
exports.saveListData = saveOvsdbPortDescriptionResponseListData;
exports.getAllData = getAllOvsdbPortDescriptionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbPortDescriptionResponseDataInit();
}

var overrideModule = '../overrides/OvsdbPortDescriptionResponse';
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



