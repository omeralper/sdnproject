'use strict';

//Model Definition File for ZoneInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Zone bilgilerini olustrmak icin istenilen istek
*/
exports.ZoneInfoRequest =  {
    type:'class',
    name:'ZoneInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        ip : { name: 'ip', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String' }
    }
}


//Mockup System for ZoneInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoRequest';
var dto_name = 'ZoneInfoRequest';

function ZoneInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoRequestData();
    }
}

function genZoneInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoRequestDataInit;
exports.genData = genZoneInfoRequestData;
exports.getData = getZoneInfoRequestData;
exports.findData = findZoneInfoRequestData;
exports.getListData = getZoneInfoRequestListData;
exports.deleteData = deleteZoneInfoRequestData;
exports.saveData = saveZoneInfoRequestData;
exports.saveListData = saveZoneInfoRequestListData;
exports.getAllData = getAllZoneInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoRequestDataInit();
}

var overrideModule = '../overrides/ZoneInfoRequest';
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



