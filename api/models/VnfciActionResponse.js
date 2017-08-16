'use strict';

//Model Definition File for VnfciActionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenBaton uzerindeki VNFCI&#39;ları start/stop etme islemi donus yapisi
*/
exports.VnfciActionResponse =  {
    type:'class',
    name:'VnfciActionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        obResponse : { name: 'obResponse', type: 'String', isRequired: true }
    }
}


//Mockup System for VnfciActionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfciActionResponse';
var dto_name = 'VnfciActionResponse';

function VnfciActionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfciActionResponseData();
    }
}

function genVnfciActionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfciActionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfciActionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfciActionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfciActionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfciActionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfciActionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfciActionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfciActionResponseDataInit;
exports.genData = genVnfciActionResponseData;
exports.getData = getVnfciActionResponseData;
exports.findData = findVnfciActionResponseData;
exports.getListData = getVnfciActionResponseListData;
exports.deleteData = deleteVnfciActionResponseData;
exports.saveData = saveVnfciActionResponseData;
exports.saveListData = saveVnfciActionResponseListData;
exports.getAllData = getAllVnfciActionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfciActionResponseDataInit();
}

var overrideModule = '../overrides/VnfciActionResponse';
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



