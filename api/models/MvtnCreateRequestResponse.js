'use strict';

//Model Definition File for MvtnCreateRequestResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnRequestDTO = require('./MvtnRequestDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ oluşturma ya da güncelleme talepleri için cevap modelidir.
*/
exports.MvtnCreateRequestResponse =  {
    type:'class',
    name:'MvtnCreateRequestResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnRequestDTO', isRequired: true }
    }
}


//Mockup System for MvtnCreateRequestResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnCreateRequestResponse';
var dto_name = 'MvtnCreateRequestResponse';

function MvtnCreateRequestResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnCreateRequestResponseData();
    }
}

function genMvtnCreateRequestResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnCreateRequestResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnCreateRequestResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnCreateRequestResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnCreateRequestResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnCreateRequestResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnCreateRequestResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnCreateRequestResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnCreateRequestResponseDataInit;
exports.genData = genMvtnCreateRequestResponseData;
exports.getData = getMvtnCreateRequestResponseData;
exports.findData = findMvtnCreateRequestResponseData;
exports.getListData = getMvtnCreateRequestResponseListData;
exports.deleteData = deleteMvtnCreateRequestResponseData;
exports.saveData = saveMvtnCreateRequestResponseData;
exports.saveListData = saveMvtnCreateRequestResponseListData;
exports.getAllData = getAllMvtnCreateRequestResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnCreateRequestResponseDataInit();
}

var overrideModule = '../overrides/MvtnCreateRequestResponse';
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



