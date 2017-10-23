'use strict';

//Model Definition File for VimVmStatusInfoResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var VimVmStatusInfoDTO = require('./VimVmStatusInfoDTO');

'use strict';
/**
* Ağ servis kayıtı detaylarının dönüldüğü veri yapısı.
*/
exports.VimVmStatusInfoResponse =  {
    type:'class',
    name:'VimVmStatusInfoResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'VimVmStatusInfoDTO' }
    }
}


//Mockup System for VimVmStatusInfoResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimVmStatusInfoResponse';
var dto_name = 'VimVmStatusInfoResponse';

function VimVmStatusInfoResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimVmStatusInfoResponseData();
    }
}

function genVimVmStatusInfoResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimVmStatusInfoResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimVmStatusInfoResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimVmStatusInfoResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimVmStatusInfoResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimVmStatusInfoResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimVmStatusInfoResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimVmStatusInfoResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = VimVmStatusInfoResponseDataInit;
exports.genData = genVimVmStatusInfoResponseData;
exports.getData = getVimVmStatusInfoResponseData;
exports.findData = findVimVmStatusInfoResponseData;
exports.getListData = getVimVmStatusInfoResponseListData;
exports.deleteData = deleteVimVmStatusInfoResponseData;
exports.saveData = saveVimVmStatusInfoResponseData;
exports.saveListData = saveVimVmStatusInfoResponseListData;
exports.getAllData = getAllVimVmStatusInfoResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimVmStatusInfoResponseDataInit();
}

var overrideModule = '../overrides/VimVmStatusInfoResponse';
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



