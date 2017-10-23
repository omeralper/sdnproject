'use strict';

//Model Definition File for NetServiceRecordLaunchByPlacementRequest.js

//var NetServiceRecordLaunchByPlacementDTO = require('./NetServiceRecordLaunchByPlacementDTO');
//var NetServiceRecordLaunchDTO = require('./NetServiceRecordLaunchDTO');
//var NetServiceRecordLaunchRequest = require('./NetServiceRecordLaunchRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Mevcut NSD&#39;nin hangi host ve zone&#39;da calismasini saglamak icin yonlendirilmesi gereken istek
*/
exports.NetServiceRecordLaunchByPlacementRequest =  {
    type:'class',
    name:'NetServiceRecordLaunchByPlacementRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        nsdId : { name: 'nsdId', type: 'String' }, 
        data : { name: 'data', type: 'NetServiceRecordLaunchDTO', isRequired: true }, 
        placementData : { name: 'placementData', type: 'NetServiceRecordLaunchByPlacementDTO', isRequired: true }
    }
}


//Mockup System for NetServiceRecordLaunchByPlacementRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordLaunchByPlacementRequest';
var dto_name = 'NetServiceRecordLaunchByPlacementRequest';

function NetServiceRecordLaunchByPlacementRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordLaunchByPlacementRequestData();
    }
}

function genNetServiceRecordLaunchByPlacementRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordLaunchByPlacementRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordLaunchByPlacementRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordLaunchByPlacementRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordLaunchByPlacementRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordLaunchByPlacementRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordLaunchByPlacementRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordLaunchByPlacementRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordLaunchByPlacementRequestDataInit;
exports.genData = genNetServiceRecordLaunchByPlacementRequestData;
exports.getData = getNetServiceRecordLaunchByPlacementRequestData;
exports.findData = findNetServiceRecordLaunchByPlacementRequestData;
exports.getListData = getNetServiceRecordLaunchByPlacementRequestListData;
exports.deleteData = deleteNetServiceRecordLaunchByPlacementRequestData;
exports.saveData = saveNetServiceRecordLaunchByPlacementRequestData;
exports.saveListData = saveNetServiceRecordLaunchByPlacementRequestListData;
exports.getAllData = getAllNetServiceRecordLaunchByPlacementRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordLaunchByPlacementRequestDataInit();
}

var overrideModule = '../overrides/NetServiceRecordLaunchByPlacementRequest';
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



