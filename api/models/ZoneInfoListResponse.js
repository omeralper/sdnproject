'use strict';

//Model Definition File for ZoneInfoListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var ZoneObjectDTO = require('./ZoneObjectDTO');

'use strict';
/**
* Zone listesini donmek icin kullanılacak istek tipi
*/
exports.ZoneInfoListResponse =  {
    type:'class',
    name:'ZoneInfoListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'ZoneObjectDTO', isRequired: true }
    }
}


//Mockup System for ZoneInfoListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoListResponse';
var dto_name = 'ZoneInfoListResponse';

function ZoneInfoListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoListResponseData();
    }
}

function genZoneInfoListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoListResponseDataInit;
exports.genData = genZoneInfoListResponseData;
exports.getData = getZoneInfoListResponseData;
exports.findData = findZoneInfoListResponseData;
exports.getListData = getZoneInfoListResponseListData;
exports.deleteData = deleteZoneInfoListResponseData;
exports.saveData = saveZoneInfoListResponseData;
exports.saveListData = saveZoneInfoListResponseListData;
exports.getAllData = getAllZoneInfoListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoListResponseDataInit();
}

var overrideModule = '../overrides/ZoneInfoListResponse';
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



