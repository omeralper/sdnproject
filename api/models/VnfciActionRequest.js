'use strict';

//Model Definition File for VnfciActionRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenBaton uzerindeki VNFCI&#39;ları start/stop etme islemi istek yapisi
*/
exports.VnfciActionRequest =  {
    type:'class',
    name:'VnfciActionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        ipAddress : { name: 'ipAddress', type: 'String', isRequired: true }, 
        nsrId : { name: 'nsrId', type: 'String', isRequired: true }, 
        vnfrId : { name: 'vnfrId', type: 'String', isRequired: true }, 
        vduId : { name: 'vduId', type: 'String', isRequired: true }, 
        vnfciId : { name: 'vnfciId', type: 'String', isRequired: true }
    }
}


//Mockup System for VnfciActionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfciActionRequest';
var dto_name = 'VnfciActionRequest';

function VnfciActionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfciActionRequestData();
    }
}

function genVnfciActionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfciActionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfciActionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfciActionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfciActionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfciActionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfciActionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfciActionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfciActionRequestDataInit;
exports.genData = genVnfciActionRequestData;
exports.getData = getVnfciActionRequestData;
exports.findData = findVnfciActionRequestData;
exports.getListData = getVnfciActionRequestListData;
exports.deleteData = deleteVnfciActionRequestData;
exports.saveData = saveVnfciActionRequestData;
exports.saveListData = saveVnfciActionRequestListData;
exports.getAllData = getAllVnfciActionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfciActionRequestDataInit();
}

var overrideModule = '../overrides/VnfciActionRequest';
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



