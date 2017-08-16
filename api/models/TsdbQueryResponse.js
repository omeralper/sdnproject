'use strict';

//Model Definition File for TsdbQueryResponse.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');
//var TsdbDataSet = require('./TsdbDataSet');

'use strict';
/**
* N tane metrik için yapılan sorgunun sonucu
*/
exports.TsdbQueryResponse =  {
    type:'class',
    name:'TsdbQueryResponse',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        tstamps : { name: 'tstamps', type: 'Array', subType: 'long', isRequired: true }, 
        datasets : { name: 'datasets', type: 'Array', subType: 'TsdbDataSet', isRequired: true }
    }
}


//Mockup System for TsdbQueryResponse.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTsdbQueryResponse';
var dto_name = 'TsdbQueryResponse';

function TsdbQueryResponseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTsdbQueryResponseData();
    }
}

function genTsdbQueryResponseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTsdbQueryResponseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTsdbQueryResponseListData(options) {
    return mockup.getListData(data_key, options);
}

function findTsdbQueryResponseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTsdbQueryResponseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTsdbQueryResponseData(data) {
    return mockup.saveData(data_key, data);
}

function saveTsdbQueryResponseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTsdbQueryResponseData() {
    return mockup.getAllData(data_key);
}

exports.init = TsdbQueryResponseDataInit;
exports.genData = genTsdbQueryResponseData;
exports.getData = getTsdbQueryResponseData;
exports.findData = findTsdbQueryResponseData;
exports.getListData = getTsdbQueryResponseListData;
exports.deleteData = deleteTsdbQueryResponseData;
exports.saveData = saveTsdbQueryResponseData;
exports.saveListData = saveTsdbQueryResponseListData;
exports.getAllData = getAllTsdbQueryResponseData;

function autoInit(){
    mockup.initDatabase(data_key);
    TsdbQueryResponseDataInit();
}

var overrideModule = '../overrides/TsdbQueryResponse';
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



