'use strict';

//Model Definition File for MvtnCreateResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MvtnDTO = require('./MvtnDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ talebinin cevabı olarak kullanılan veri yapısı
*/
exports.MvtnCreateResponse =  {
    type:'class',
    name:'MvtnCreateResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'MvtnDTO' }
    }
}


//Mockup System for MvtnCreateResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnCreateResponse';
var dto_name = 'MvtnCreateResponse';

function MvtnCreateResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnCreateResponseData();
    }
}

function genMvtnCreateResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnCreateResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnCreateResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnCreateResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnCreateResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnCreateResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnCreateResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnCreateResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnCreateResponseDataInit;
exports.genData = genMvtnCreateResponseData;
exports.getData = getMvtnCreateResponseData;
exports.findData = findMvtnCreateResponseData;
exports.getListData = getMvtnCreateResponseListData;
exports.deleteData = deleteMvtnCreateResponseData;
exports.saveData = saveMvtnCreateResponseData;
exports.saveListData = saveMvtnCreateResponseListData;
exports.getAllData = getAllMvtnCreateResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnCreateResponseDataInit();
}

var overrideModule = '../overrides/MvtnCreateResponse';
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



