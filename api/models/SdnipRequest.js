'use strict';

//Model Definition File for SdnipRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Prognet sdnip istekleri için kullanılır
*/
exports.SdnipRequest =  {
    type:'class',
    name:'SdnipRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }
    }
}


//Mockup System for SdnipRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRequest';
var dto_name = 'SdnipRequest';

function SdnipRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRequestData();
    }
}

function genSdnipRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRequestDataInit;
exports.genData = genSdnipRequestData;
exports.getData = getSdnipRequestData;
exports.findData = findSdnipRequestData;
exports.getListData = getSdnipRequestListData;
exports.deleteData = deleteSdnipRequestData;
exports.saveData = saveSdnipRequestData;
exports.saveListData = saveSdnipRequestListData;
exports.getAllData = getAllSdnipRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRequestDataInit();
}

var overrideModule = '../overrides/SdnipRequest';
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



