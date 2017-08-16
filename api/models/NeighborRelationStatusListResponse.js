'use strict';

//Model Definition File for NeighborRelationStatusListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NeighborRelationStatusListDTO = require('./NeighborRelationStatusListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yönlendirici komşu arasındaki bağlantı durumu listesini verir
*/
exports.NeighborRelationStatusListResponse =  {
    type:'class',
    name:'NeighborRelationStatusListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NeighborRelationStatusListDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationStatusListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationStatusListResponse';
var dto_name = 'NeighborRelationStatusListResponse';

function NeighborRelationStatusListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationStatusListResponseData();
    }
}

function genNeighborRelationStatusListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationStatusListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationStatusListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationStatusListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationStatusListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationStatusListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationStatusListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationStatusListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationStatusListResponseDataInit;
exports.genData = genNeighborRelationStatusListResponseData;
exports.getData = getNeighborRelationStatusListResponseData;
exports.findData = findNeighborRelationStatusListResponseData;
exports.getListData = getNeighborRelationStatusListResponseListData;
exports.deleteData = deleteNeighborRelationStatusListResponseData;
exports.saveData = saveNeighborRelationStatusListResponseData;
exports.saveListData = saveNeighborRelationStatusListResponseListData;
exports.getAllData = getAllNeighborRelationStatusListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationStatusListResponseDataInit();
}

var overrideModule = '../overrides/NeighborRelationStatusListResponse';
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



