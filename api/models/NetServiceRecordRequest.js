'use strict';

//Model Definition File for NetServiceRecordRequest.js

//var GenericRequest = require('./GenericRequest');
//var NetServiceRecordDTO = require('./NetServiceRecordDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis kayıtı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NetServiceRecordRequest =  {
    type:'class',
    name:'NetServiceRecordRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NetServiceRecordDTO', isRequired: true }
    }
}


//Mockup System for NetServiceRecordRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordRequest';
var dto_name = 'NetServiceRecordRequest';

function NetServiceRecordRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordRequestData();
    }
}

function genNetServiceRecordRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordRequestDataInit;
exports.genData = genNetServiceRecordRequestData;
exports.getData = getNetServiceRecordRequestData;
exports.findData = findNetServiceRecordRequestData;
exports.getListData = getNetServiceRecordRequestListData;
exports.deleteData = deleteNetServiceRecordRequestData;
exports.saveData = saveNetServiceRecordRequestData;
exports.saveListData = saveNetServiceRecordRequestListData;
exports.getAllData = getAllNetServiceRecordRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordRequestDataInit();
}

var overrideModule = '../overrides/NetServiceRecordRequest';
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



