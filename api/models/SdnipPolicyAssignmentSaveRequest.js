'use strict';

//Model Definition File for SdnipPolicyAssignmentSaveRequest.js

//var GenericRequest = require('./GenericRequest');
//var SdnipPolicyAssignmentDTO = require('./SdnipPolicyAssignmentDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Politika tipine göre politika ekleme ve güncelleme için kullanılır
*/
exports.SdnipPolicyAssignmentSaveRequest =  {
    type:'class',
    name:'SdnipPolicyAssignmentSaveRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'SdnipPolicyAssignmentDTO', isRequired: true }
    }
}


//Mockup System for SdnipPolicyAssignmentSaveRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSdnipPolicyAssignmentSaveRequest';
var dto_name = 'SdnipPolicyAssignmentSaveRequest';

function SdnipPolicyAssignmentSaveRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSdnipPolicyAssignmentSaveRequestData();
    }
}

function genSdnipPolicyAssignmentSaveRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSdnipPolicyAssignmentSaveRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSdnipPolicyAssignmentSaveRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSdnipPolicyAssignmentSaveRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSdnipPolicyAssignmentSaveRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSdnipPolicyAssignmentSaveRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSdnipPolicyAssignmentSaveRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSdnipPolicyAssignmentSaveRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SdnipPolicyAssignmentSaveRequestDataInit;
exports.genData = genSdnipPolicyAssignmentSaveRequestData;
exports.getData = getSdnipPolicyAssignmentSaveRequestData;
exports.findData = findSdnipPolicyAssignmentSaveRequestData;
exports.getListData = getSdnipPolicyAssignmentSaveRequestListData;
exports.deleteData = deleteSdnipPolicyAssignmentSaveRequestData;
exports.saveData = saveSdnipPolicyAssignmentSaveRequestData;
exports.saveListData = saveSdnipPolicyAssignmentSaveRequestListData;
exports.getAllData = getAllSdnipPolicyAssignmentSaveRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SdnipPolicyAssignmentSaveRequestDataInit();
}

var overrideModule = '../overrides/SdnipPolicyAssignmentSaveRequest';
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



