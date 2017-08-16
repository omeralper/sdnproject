'use strict';

//Model Definition File for FlowSearchRequest.js

//var FlowSearchOptions = require('./FlowSearchOptions');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Akışlar içinde arama yapılması için kullanılacak istek veri modelidir.
*/
exports.FlowSearchRequest =  {
    type:'class',
    name:'FlowSearchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'FlowSearchOptions', isRequired: true }
    }
}


//Mockup System for FlowSearchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowSearchRequest';
var dto_name = 'FlowSearchRequest';

function FlowSearchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowSearchRequestData();
    }
}

function genFlowSearchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowSearchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowSearchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowSearchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowSearchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowSearchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowSearchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowSearchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowSearchRequestDataInit;
exports.genData = genFlowSearchRequestData;
exports.getData = getFlowSearchRequestData;
exports.findData = findFlowSearchRequestData;
exports.getListData = getFlowSearchRequestListData;
exports.deleteData = deleteFlowSearchRequestData;
exports.saveData = saveFlowSearchRequestData;
exports.saveListData = saveFlowSearchRequestListData;
exports.getAllData = getAllFlowSearchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowSearchRequestDataInit();
}

var overrideModule = '../overrides/FlowSearchRequest';
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



