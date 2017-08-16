'use strict';

//Model Definition File for NetServiceRecordLaunchByPlacementResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis kayıtı detaylarının dönüldüğü veri yapısı.
*/
exports.NetServiceRecordLaunchByPlacementResponse =  {
    type:'class',
    name:'NetServiceRecordLaunchByPlacementResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        responseData : { name: 'responseData', type: 'String' }
    }
}


//Mockup System for NetServiceRecordLaunchByPlacementResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordLaunchByPlacementResponse';
var dto_name = 'NetServiceRecordLaunchByPlacementResponse';

function NetServiceRecordLaunchByPlacementResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordLaunchByPlacementResponseData();
    }
}

function genNetServiceRecordLaunchByPlacementResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordLaunchByPlacementResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordLaunchByPlacementResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordLaunchByPlacementResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordLaunchByPlacementResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordLaunchByPlacementResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordLaunchByPlacementResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordLaunchByPlacementResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordLaunchByPlacementResponseDataInit;
exports.genData = genNetServiceRecordLaunchByPlacementResponseData;
exports.getData = getNetServiceRecordLaunchByPlacementResponseData;
exports.findData = findNetServiceRecordLaunchByPlacementResponseData;
exports.getListData = getNetServiceRecordLaunchByPlacementResponseListData;
exports.deleteData = deleteNetServiceRecordLaunchByPlacementResponseData;
exports.saveData = saveNetServiceRecordLaunchByPlacementResponseData;
exports.saveListData = saveNetServiceRecordLaunchByPlacementResponseListData;
exports.getAllData = getAllNetServiceRecordLaunchByPlacementResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordLaunchByPlacementResponseDataInit();
}

var overrideModule = '../overrides/NetServiceRecordLaunchByPlacementResponse';
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



