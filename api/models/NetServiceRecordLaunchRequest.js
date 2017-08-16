'use strict';

//Model Definition File for NetServiceRecordLaunchRequest.js

//var GenericRequest = require('./GenericRequest');
//var NetServiceRecordLaunchDTO = require('./NetServiceRecordLaunchDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis kayıtı başlantma isteği için kullanılan veri yapısı.
*/
exports.NetServiceRecordLaunchRequest =  {
    type:'class',
    name:'NetServiceRecordLaunchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        nsdId : { name: 'nsdId', type: 'String' }, 
        data : { name: 'data', type: 'NetServiceRecordLaunchDTO', isRequired: true }
    }
}


//Mockup System for NetServiceRecordLaunchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordLaunchRequest';
var dto_name = 'NetServiceRecordLaunchRequest';

function NetServiceRecordLaunchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordLaunchRequestData();
    }
}

function genNetServiceRecordLaunchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordLaunchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordLaunchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordLaunchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordLaunchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordLaunchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordLaunchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordLaunchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordLaunchRequestDataInit;
exports.genData = genNetServiceRecordLaunchRequestData;
exports.getData = getNetServiceRecordLaunchRequestData;
exports.findData = findNetServiceRecordLaunchRequestData;
exports.getListData = getNetServiceRecordLaunchRequestListData;
exports.deleteData = deleteNetServiceRecordLaunchRequestData;
exports.saveData = saveNetServiceRecordLaunchRequestData;
exports.saveListData = saveNetServiceRecordLaunchRequestListData;
exports.getAllData = getAllNetServiceRecordLaunchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordLaunchRequestDataInit();
}

var overrideModule = '../overrides/NetServiceRecordLaunchRequest';
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



