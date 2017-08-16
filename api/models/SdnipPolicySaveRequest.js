'use strict';

//Model Definition File for SdnipPolicySaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var SdnipPolicyDTO = require('./SdnipPolicyDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sdnip politika ekleme ve güncelleme için kullanılır
*/
exports.SdnipPolicySaveRequest =  {
    type:'class',
    name:'SdnipPolicySaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SdnipPolicyDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicySaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicySaveRequest';
var dto_name = 'SdnipPolicySaveRequest';

function SdnipPolicySaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicySaveRequestData();
    }
}

function genSdnipPolicySaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicySaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicySaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicySaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicySaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicySaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicySaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicySaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicySaveRequestDataInit;
exports.genData = genSdnipPolicySaveRequestData;
exports.getData = getSdnipPolicySaveRequestData;
exports.findData = findSdnipPolicySaveRequestData;
exports.getListData = getSdnipPolicySaveRequestListData;
exports.deleteData = deleteSdnipPolicySaveRequestData;
exports.saveData = saveSdnipPolicySaveRequestData;
exports.saveListData = saveSdnipPolicySaveRequestListData;
exports.getAllData = getAllSdnipPolicySaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicySaveRequestDataInit();
}

var overrideModule = '../overrides/SdnipPolicySaveRequest';
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



