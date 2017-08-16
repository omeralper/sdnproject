'use strict';

//Model Definition File for ZoneInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ZoneObjectDTO = require('./ZoneObjectDTO');

'use strict';
/**
* Zone bilgilerini dönmek icin gerekli olan dönüs
*/
exports.ZoneInfoResponse =  {
    type:'class',
    name:'ZoneInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ZoneObjectDTO', isRequired: true }
    }
}


//Mockup System for ZoneInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoResponse';
var dto_name = 'ZoneInfoResponse';

function ZoneInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoResponseData();
    }
}

function genZoneInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoResponseDataInit;
exports.genData = genZoneInfoResponseData;
exports.getData = getZoneInfoResponseData;
exports.findData = findZoneInfoResponseData;
exports.getListData = getZoneInfoResponseListData;
exports.deleteData = deleteZoneInfoResponseData;
exports.saveData = saveZoneInfoResponseData;
exports.saveListData = saveZoneInfoResponseListData;
exports.getAllData = getAllZoneInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoResponseDataInit();
}

var overrideModule = '../overrides/ZoneInfoResponse';
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



