'use strict';

//Model Definition File for SdnipDefinedSetSaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var SdnipDefinedSetDTO = require('./SdnipDefinedSetDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip rotalayıcı ekleme ve güncelleme için kullanılır
*/
exports.SdnipDefinedSetSaveRequest =  {
    type:'class',
    name:'SdnipDefinedSetSaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SdnipDefinedSetDTO', isRequired: true }
    }
}


//Mockup System for SdnipDefinedSetSaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipDefinedSetSaveRequest';
var dto_name = 'SdnipDefinedSetSaveRequest';

function SdnipDefinedSetSaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipDefinedSetSaveRequestData();
    }
}

function genSdnipDefinedSetSaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipDefinedSetSaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipDefinedSetSaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipDefinedSetSaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipDefinedSetSaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipDefinedSetSaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipDefinedSetSaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipDefinedSetSaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipDefinedSetSaveRequestDataInit;
exports.genData = genSdnipDefinedSetSaveRequestData;
exports.getData = getSdnipDefinedSetSaveRequestData;
exports.findData = findSdnipDefinedSetSaveRequestData;
exports.getListData = getSdnipDefinedSetSaveRequestListData;
exports.deleteData = deleteSdnipDefinedSetSaveRequestData;
exports.saveData = saveSdnipDefinedSetSaveRequestData;
exports.saveListData = saveSdnipDefinedSetSaveRequestListData;
exports.getAllData = getAllSdnipDefinedSetSaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipDefinedSetSaveRequestDataInit();
}

var overrideModule = '../overrides/SdnipDefinedSetSaveRequest';
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



