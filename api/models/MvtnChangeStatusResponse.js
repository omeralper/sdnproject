'use strict';

//Model Definition File for MvtnChangeStatusResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnStatusDTO = require('./MvtnStatusDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ durum değişikliği cevap veri yapısı.
*/
exports.MvtnChangeStatusResponse =  {
    type:'class',
    name:'MvtnChangeStatusResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnStatusDTO', isRequired: true }
    }
}


//Mockup System for MvtnChangeStatusResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnChangeStatusResponse';
var dto_name = 'MvtnChangeStatusResponse';

function MvtnChangeStatusResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnChangeStatusResponseData();
    }
}

function genMvtnChangeStatusResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnChangeStatusResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnChangeStatusResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnChangeStatusResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnChangeStatusResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnChangeStatusResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnChangeStatusResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnChangeStatusResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnChangeStatusResponseDataInit;
exports.genData = genMvtnChangeStatusResponseData;
exports.getData = getMvtnChangeStatusResponseData;
exports.findData = findMvtnChangeStatusResponseData;
exports.getListData = getMvtnChangeStatusResponseListData;
exports.deleteData = deleteMvtnChangeStatusResponseData;
exports.saveData = saveMvtnChangeStatusResponseData;
exports.saveListData = saveMvtnChangeStatusResponseListData;
exports.getAllData = getAllMvtnChangeStatusResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnChangeStatusResponseDataInit();
}

var overrideModule = '../overrides/MvtnChangeStatusResponse';
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



