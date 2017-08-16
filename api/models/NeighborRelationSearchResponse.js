'use strict';

//Model Definition File for NeighborRelationSearchResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NeighborRelationListDTO = require('./NeighborRelationListDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yönlendirici komşuluk bilgisi listesini verir
*/
exports.NeighborRelationSearchResponse =  {
    type:'class',
    name:'NeighborRelationSearchResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NeighborRelationListDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationSearchResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationSearchResponse';
var dto_name = 'NeighborRelationSearchResponse';

function NeighborRelationSearchResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationSearchResponseData();
    }
}

function genNeighborRelationSearchResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationSearchResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationSearchResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationSearchResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationSearchResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationSearchResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationSearchResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationSearchResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationSearchResponseDataInit;
exports.genData = genNeighborRelationSearchResponseData;
exports.getData = getNeighborRelationSearchResponseData;
exports.findData = findNeighborRelationSearchResponseData;
exports.getListData = getNeighborRelationSearchResponseListData;
exports.deleteData = deleteNeighborRelationSearchResponseData;
exports.saveData = saveNeighborRelationSearchResponseData;
exports.saveListData = saveNeighborRelationSearchResponseListData;
exports.getAllData = getAllNeighborRelationSearchResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationSearchResponseDataInit();
}

var overrideModule = '../overrides/NeighborRelationSearchResponse';
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



