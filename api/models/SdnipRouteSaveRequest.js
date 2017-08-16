'use strict';

//Model Definition File for SdnipRouteSaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Rota anons etmek için için kullanılır
*/
exports.SdnipRouteSaveRequest =  {
    type:'class',
    name:'SdnipRouteSaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for SdnipRouteSaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipRouteSaveRequest';
var dto_name = 'SdnipRouteSaveRequest';

function SdnipRouteSaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipRouteSaveRequestData();
    }
}

function genSdnipRouteSaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipRouteSaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipRouteSaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipRouteSaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipRouteSaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipRouteSaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipRouteSaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipRouteSaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipRouteSaveRequestDataInit;
exports.genData = genSdnipRouteSaveRequestData;
exports.getData = getSdnipRouteSaveRequestData;
exports.findData = findSdnipRouteSaveRequestData;
exports.getListData = getSdnipRouteSaveRequestListData;
exports.deleteData = deleteSdnipRouteSaveRequestData;
exports.saveData = saveSdnipRouteSaveRequestData;
exports.saveListData = saveSdnipRouteSaveRequestListData;
exports.getAllData = getAllSdnipRouteSaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipRouteSaveRequestDataInit();
}

var overrideModule = '../overrides/SdnipRouteSaveRequest';
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



