'use strict';

//Model Definition File for SdnipRouterSaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var SdnipRouterDTO = require('./SdnipRouterDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip rotalayıcı ekleme ve güncelleme için kullanılır
*/
exports.SdnipRouterSaveRequest =  {
    type:'class',
    name:'SdnipRouterSaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SdnipRouterDTO', isRequired: true }
    }
}


//Mockup System for SdnipRouterSaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouterSaveRequest';
var dto_name = 'SdnipRouterSaveRequest';

function SdnipRouterSaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouterSaveRequestData();
    }
}

function genSdnipRouterSaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouterSaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouterSaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouterSaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouterSaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouterSaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouterSaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouterSaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouterSaveRequestDataInit;
exports.genData = genSdnipRouterSaveRequestData;
exports.getData = getSdnipRouterSaveRequestData;
exports.findData = findSdnipRouterSaveRequestData;
exports.getListData = getSdnipRouterSaveRequestListData;
exports.deleteData = deleteSdnipRouterSaveRequestData;
exports.saveData = saveSdnipRouterSaveRequestData;
exports.saveListData = saveSdnipRouterSaveRequestListData;
exports.getAllData = getAllSdnipRouterSaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouterSaveRequestDataInit();
}

var overrideModule = '../overrides/SdnipRouterSaveRequest';
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



