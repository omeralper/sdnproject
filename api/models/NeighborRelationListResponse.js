'use strict';

//Model Definition File for NeighborRelationListResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NeighborRelationListDTO = require('./NeighborRelationListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yönlendirici komşuluk bilgisi listesini verir
*/
exports.NeighborRelationListResponse =  {
    type:'class',
    name:'NeighborRelationListResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NeighborRelationListDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationListResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationListResponse';
var dto_name = 'NeighborRelationListResponse';

function NeighborRelationListResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationListResponseData();
    }
}

function genNeighborRelationListResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationListResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationListResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationListResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationListResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationListResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationListResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationListResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationListResponseDataInit;
exports.genData = genNeighborRelationListResponseData;
exports.getData = getNeighborRelationListResponseData;
exports.findData = findNeighborRelationListResponseData;
exports.getListData = getNeighborRelationListResponseListData;
exports.deleteData = deleteNeighborRelationListResponseData;
exports.saveData = saveNeighborRelationListResponseData;
exports.saveListData = saveNeighborRelationListResponseListData;
exports.getAllData = getAllNeighborRelationListResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationListResponseDataInit();
}

var overrideModule = '../overrides/NeighborRelationListResponse';
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



