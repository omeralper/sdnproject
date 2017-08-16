'use strict';

//Model Definition File for SwitchResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı detaylarının dönüldüğü veri yapısı.
*/
exports.SwitchResponse =  {
    type:'class',
    name:'SwitchResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'SwitchDTO' }
    }
}


//Mockup System for SwitchResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchResponse';
var dto_name = 'SwitchResponse';

function SwitchResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchResponseData();
    }
}

function genSwitchResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchResponseDataInit;
exports.genData = genSwitchResponseData;
exports.getData = getSwitchResponseData;
exports.findData = findSwitchResponseData;
exports.getListData = getSwitchResponseListData;
exports.deleteData = deleteSwitchResponseData;
exports.saveData = saveSwitchResponseData;
exports.saveListData = saveSwitchResponseListData;
exports.getAllData = getAllSwitchResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchResponseDataInit();
}

var overrideModule = '../overrides/SwitchResponse';
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



