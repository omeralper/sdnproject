'use strict';

//Model Definition File for VnfrResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VnfrDTO = require('./VnfrDTO');

'use strict';
/**
* Vnfr olarak kullanılan veri yapısı.
*/
exports.VnfrResponse =  {
    type:'class',
    name:'VnfrResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VnfrDTO', isRequired: true }
    }
}


//Mockup System for VnfrResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfrResponse';
var dto_name = 'VnfrResponse';

function VnfrResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfrResponseData();
    }
}

function genVnfrResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfrResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfrResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfrResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfrResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfrResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfrResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfrResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfrResponseDataInit;
exports.genData = genVnfrResponseData;
exports.getData = getVnfrResponseData;
exports.findData = findVnfrResponseData;
exports.getListData = getVnfrResponseListData;
exports.deleteData = deleteVnfrResponseData;
exports.saveData = saveVnfrResponseData;
exports.saveListData = saveVnfrResponseListData;
exports.getAllData = getAllVnfrResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfrResponseDataInit();
}

var overrideModule = '../overrides/VnfrResponse';
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



