'use strict';

//Model Definition File for NeighborRelationResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var NeighborRelationDTO = require('./NeighborRelationDTO');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yönlendirici komşuluk bilgisini verir
*/
exports.NeighborRelationResponse =  {
    type:'class',
    name:'NeighborRelationResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        data : { name: 'data', type: 'NeighborRelationDTO', isRequired: true }
    }
}


//Mockup System for NeighborRelationResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNeighborRelationResponse';
var dto_name = 'NeighborRelationResponse';

function NeighborRelationResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNeighborRelationResponseData();
    }
}

function genNeighborRelationResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNeighborRelationResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNeighborRelationResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findNeighborRelationResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNeighborRelationResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNeighborRelationResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveNeighborRelationResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNeighborRelationResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = NeighborRelationResponseDataInit;
exports.genData = genNeighborRelationResponseData;
exports.getData = getNeighborRelationResponseData;
exports.findData = findNeighborRelationResponseData;
exports.getListData = getNeighborRelationResponseListData;
exports.deleteData = deleteNeighborRelationResponseData;
exports.saveData = saveNeighborRelationResponseData;
exports.saveListData = saveNeighborRelationResponseListData;
exports.getAllData = getAllNeighborRelationResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    NeighborRelationResponseDataInit();
}

var overrideModule = '../overrides/NeighborRelationResponse';
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



