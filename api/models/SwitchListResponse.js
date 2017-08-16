'use strict';

//Model Definition File for SwitchListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SwitchListDTO = require('./SwitchListDTO');

'use strict';
/**
* Anahtarlayıcı listeleme işleminin cevap veri yapısı.
*/
exports.SwitchListResponse =  {
    type:'class',
    name:'SwitchListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SwitchListDTO', isRequired: true }
    }
}


//Mockup System for SwitchListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchListResponse';
var dto_name = 'SwitchListResponse';

function SwitchListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchListResponseData();
    }
}

function genSwitchListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchListResponseDataInit;
exports.genData = genSwitchListResponseData;
exports.getData = getSwitchListResponseData;
exports.findData = findSwitchListResponseData;
exports.getListData = getSwitchListResponseListData;
exports.deleteData = deleteSwitchListResponseData;
exports.saveData = saveSwitchListResponseData;
exports.saveListData = saveSwitchListResponseListData;
exports.getAllData = getAllSwitchListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchListResponseDataInit();
}

var overrideModule = '../overrides/SwitchListResponse';
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



