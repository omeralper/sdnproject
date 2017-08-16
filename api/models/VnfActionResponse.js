'use strict';

//Model Definition File for VnfActionResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenBaton uzerinden calistirilan VM&#39;ler ile ilgili remove/start servislerinin cevap objesi
*/
exports.VnfActionResponse =  {
    type:'class',
    name:'VnfActionResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        obResponse : { name: 'obResponse', type: 'String', isRequired: true }, 
        failOverDesc : { name: 'failOverDesc', type: 'String' }
    }
}


//Mockup System for VnfActionResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfActionResponse';
var dto_name = 'VnfActionResponse';

function VnfActionResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfActionResponseData();
    }
}

function genVnfActionResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfActionResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfActionResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfActionResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfActionResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfActionResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfActionResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfActionResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfActionResponseDataInit;
exports.genData = genVnfActionResponseData;
exports.getData = getVnfActionResponseData;
exports.findData = findVnfActionResponseData;
exports.getListData = getVnfActionResponseListData;
exports.deleteData = deleteVnfActionResponseData;
exports.saveData = saveVnfActionResponseData;
exports.saveListData = saveVnfActionResponseListData;
exports.getAllData = getAllVnfActionResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfActionResponseDataInit();
}

var overrideModule = '../overrides/VnfActionResponse';
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



