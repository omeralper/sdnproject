'use strict';

//Model Definition File for MonitorSelectRequest.js

//var GenericRequest = require('./GenericRequest');
//var MonitorSelectDTO = require('./MonitorSelectDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Göstergeleri araştırma kriterlerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.MonitorSelectRequest =  {
    type:'class',
    name:'MonitorSelectRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MonitorSelectDTO', isRequired: true }
    }
}


//Mockup System for MonitorSelectRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMonitorSelectRequest';
var dto_name = 'MonitorSelectRequest';

function MonitorSelectRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMonitorSelectRequestData();
    }
}

function genMonitorSelectRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMonitorSelectRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMonitorSelectRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMonitorSelectRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMonitorSelectRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMonitorSelectRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMonitorSelectRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMonitorSelectRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MonitorSelectRequestDataInit;
exports.genData = genMonitorSelectRequestData;
exports.getData = getMonitorSelectRequestData;
exports.findData = findMonitorSelectRequestData;
exports.getListData = getMonitorSelectRequestListData;
exports.deleteData = deleteMonitorSelectRequestData;
exports.saveData = saveMonitorSelectRequestData;
exports.saveListData = saveMonitorSelectRequestListData;
exports.getAllData = getAllMonitorSelectRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MonitorSelectRequestDataInit();
}

var overrideModule = '../overrides/MonitorSelectRequest';
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



