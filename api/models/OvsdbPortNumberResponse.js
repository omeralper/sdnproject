'use strict';

//Model Definition File for OvsdbPortNumberResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var OvsdbPortNumberDTO = require('./OvsdbPortNumberDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ anahtarlayıcı üzerindeki portların isim ve numarasını tutar
*/
exports.OvsdbPortNumberResponse =  {
    type:'class',
    name:'OvsdbPortNumberResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'Array', subType: 'OvsdbPortNumberDTO', isRequired: true }
    }
}


//Mockup System for OvsdbPortNumberResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbPortNumberResponse';
var dto_name = 'OvsdbPortNumberResponse';

function OvsdbPortNumberResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbPortNumberResponseData();
    }
}

function genOvsdbPortNumberResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbPortNumberResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbPortNumberResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbPortNumberResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbPortNumberResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbPortNumberResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbPortNumberResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbPortNumberResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbPortNumberResponseDataInit;
exports.genData = genOvsdbPortNumberResponseData;
exports.getData = getOvsdbPortNumberResponseData;
exports.findData = findOvsdbPortNumberResponseData;
exports.getListData = getOvsdbPortNumberResponseListData;
exports.deleteData = deleteOvsdbPortNumberResponseData;
exports.saveData = saveOvsdbPortNumberResponseData;
exports.saveListData = saveOvsdbPortNumberResponseListData;
exports.getAllData = getAllOvsdbPortNumberResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbPortNumberResponseDataInit();
}

var overrideModule = '../overrides/OvsdbPortNumberResponse';
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



