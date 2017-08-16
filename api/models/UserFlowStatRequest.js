'use strict';

//Model Definition File for UserFlowStatRequest.js

//var FlowStatAggregator = require('./FlowStatAggregator');
//var FlowStatFilter = require('./FlowStatFilter');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bir kullanıcının bir zaman aralığındaki akış istatistikleri için.
*/
exports.UserFlowStatRequest =  {
    type:'class',
    name:'UserFlowStatRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        user : { name: 'user', type: 'Long', isRequired: true }, 
        knownUser : { name: 'knownUser', type: 'Boolean', isRequired: true }, 
        beginTime : { name: 'beginTime', type: 'Long', isRequired: true }, 
        endTime : { name: 'endTime', type: 'Long', isRequired: true }, 
        downsamplingPeriod : { name: 'downsamplingPeriod', type: 'Integer', isRequired: true }, 
        responseLimit : { name: 'responseLimit', type: 'Integer', isRequired: true }, 
        filter : { name: 'filter', type: 'FlowStatFilter' }, 
        aggregator : { name: 'aggregator', type: 'Array', subType: 'FlowStatAggregator' }
    }
}


//Mockup System for UserFlowStatRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserFlowStatRequest';
var dto_name = 'UserFlowStatRequest';

function UserFlowStatRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserFlowStatRequestData();
    }
}

function genUserFlowStatRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserFlowStatRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserFlowStatRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserFlowStatRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserFlowStatRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserFlowStatRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserFlowStatRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserFlowStatRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = UserFlowStatRequestDataInit;
exports.genData = genUserFlowStatRequestData;
exports.getData = getUserFlowStatRequestData;
exports.findData = findUserFlowStatRequestData;
exports.getListData = getUserFlowStatRequestListData;
exports.deleteData = deleteUserFlowStatRequestData;
exports.saveData = saveUserFlowStatRequestData;
exports.saveListData = saveUserFlowStatRequestListData;
exports.getAllData = getAllUserFlowStatRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserFlowStatRequestDataInit();
}

var overrideModule = '../overrides/UserFlowStatRequest';
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



