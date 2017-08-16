'use strict';

//Model Definition File for MvtnListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnListDTO = require('./MvtnListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ talebinin cevabı olarak kullanılan veri yapısı
*/
exports.MvtnListResponse =  {
    type:'class',
    name:'MvtnListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnListDTO', isRequired: true }
    }
}


//Mockup System for MvtnListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnListResponse';
var dto_name = 'MvtnListResponse';

function MvtnListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnListResponseData();
    }
}

function genMvtnListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnListResponseDataInit;
exports.genData = genMvtnListResponseData;
exports.getData = getMvtnListResponseData;
exports.findData = findMvtnListResponseData;
exports.getListData = getMvtnListResponseListData;
exports.deleteData = deleteMvtnListResponseData;
exports.saveData = saveMvtnListResponseData;
exports.saveListData = saveMvtnListResponseListData;
exports.getAllData = getAllMvtnListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnListResponseDataInit();
}

var overrideModule = '../overrides/MvtnListResponse';
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



