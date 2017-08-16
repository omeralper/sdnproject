'use strict';

//Model Definition File for NetServiceRecordListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Çalışan ağ servislerinin geri döünüşü için kullanılacak istek yapısı
*/
exports.NetServiceRecordListRequest =  {
    type:'class',
    name:'NetServiceRecordListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        nsrOptions : { name: 'nsrOptions', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for NetServiceRecordListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordListRequest';
var dto_name = 'NetServiceRecordListRequest';

function NetServiceRecordListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordListRequestData();
    }
}

function genNetServiceRecordListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordListRequestDataInit;
exports.genData = genNetServiceRecordListRequestData;
exports.getData = getNetServiceRecordListRequestData;
exports.findData = findNetServiceRecordListRequestData;
exports.getListData = getNetServiceRecordListRequestListData;
exports.deleteData = deleteNetServiceRecordListRequestData;
exports.saveData = saveNetServiceRecordListRequestData;
exports.saveListData = saveNetServiceRecordListRequestListData;
exports.getAllData = getAllNetServiceRecordListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordListRequestDataInit();
}

var overrideModule = '../overrides/NetServiceRecordListRequest';
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



