'use strict';

//Model Definition File for NacGroupResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NacGroupDTO = require('./NacGroupDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Nac Grup detaylarının dönüldüğü veri yapısı.
*/
exports.NacGroupResponse =  {
    type:'class',
    name:'NacGroupResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NacGroupDTO' }
    }
}


//Mockup System for NacGroupResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacGroupResponse';
var dto_name = 'NacGroupResponse';

function NacGroupResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacGroupResponseData();
    }
}

function genNacGroupResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacGroupResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacGroupResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacGroupResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacGroupResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacGroupResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacGroupResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacGroupResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NacGroupResponseDataInit;
exports.genData = genNacGroupResponseData;
exports.getData = getNacGroupResponseData;
exports.findData = findNacGroupResponseData;
exports.getListData = getNacGroupResponseListData;
exports.deleteData = deleteNacGroupResponseData;
exports.saveData = saveNacGroupResponseData;
exports.saveListData = saveNacGroupResponseListData;
exports.getAllData = getAllNacGroupResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacGroupResponseDataInit();
}

var overrideModule = '../overrides/NacGroupResponse';
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



