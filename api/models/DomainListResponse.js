'use strict';

//Model Definition File for DomainListResponse.js

//var DomainListDTO = require('./DomainListDTO');
//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Domain listesini içeren cevap veri yapısıdır.
*/
exports.DomainListResponse =  {
    type:'class',
    name:'DomainListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'DomainListDTO', isRequired: true }
    }
}


//Mockup System for DomainListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDomainListResponse';
var dto_name = 'DomainListResponse';

function DomainListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDomainListResponseData();
    }
}

function genDomainListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDomainListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDomainListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findDomainListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDomainListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDomainListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveDomainListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDomainListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = DomainListResponseDataInit;
exports.genData = genDomainListResponseData;
exports.getData = getDomainListResponseData;
exports.findData = findDomainListResponseData;
exports.getListData = getDomainListResponseListData;
exports.deleteData = deleteDomainListResponseData;
exports.saveData = saveDomainListResponseData;
exports.saveListData = saveDomainListResponseListData;
exports.getAllData = getAllDomainListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    DomainListResponseDataInit();
}

var overrideModule = '../overrides/DomainListResponse';
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



