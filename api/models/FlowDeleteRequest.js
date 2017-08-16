'use strict';

//Model Definition File for FlowDeleteRequest.js

//var FlowDeleteOptions = require('./FlowDeleteOptions');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Akış silme yapılması için kullanılacak istek veri modelidir.
*/
exports.FlowDeleteRequest =  {
    type:'class',
    name:'FlowDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'FlowDeleteOptions', isRequired: true }
    }
}


//Mockup System for FlowDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowDeleteRequest';
var dto_name = 'FlowDeleteRequest';

function FlowDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowDeleteRequestData();
    }
}

function genFlowDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowDeleteRequestDataInit;
exports.genData = genFlowDeleteRequestData;
exports.getData = getFlowDeleteRequestData;
exports.findData = findFlowDeleteRequestData;
exports.getListData = getFlowDeleteRequestListData;
exports.deleteData = deleteFlowDeleteRequestData;
exports.saveData = saveFlowDeleteRequestData;
exports.saveListData = saveFlowDeleteRequestListData;
exports.getAllData = getAllFlowDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowDeleteRequestDataInit();
}

var overrideModule = '../overrides/FlowDeleteRequest';
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



