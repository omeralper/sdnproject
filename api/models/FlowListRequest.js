'use strict';

//Model Definition File for FlowListRequest.js

//var FlowListOptions = require('./FlowListOptions');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Akışların listelenmesi için kullanılacak istek veri modelidir.
*/
exports.FlowListRequest =  {
    type:'class',
    name:'FlowListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'FlowListOptions', isRequired: true }
    }
}


//Mockup System for FlowListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowListRequest';
var dto_name = 'FlowListRequest';

function FlowListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowListRequestData();
    }
}

function genFlowListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowListRequestDataInit;
exports.genData = genFlowListRequestData;
exports.getData = getFlowListRequestData;
exports.findData = findFlowListRequestData;
exports.getListData = getFlowListRequestListData;
exports.deleteData = deleteFlowListRequestData;
exports.saveData = saveFlowListRequestData;
exports.saveListData = saveFlowListRequestListData;
exports.getAllData = getAllFlowListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowListRequestDataInit();
}

var overrideModule = '../overrides/FlowListRequest';
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



