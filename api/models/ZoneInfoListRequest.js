'use strict';

//Model Definition File for ZoneInfoListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Zone listesini almak icin kullanılacak istek tipi
*/
exports.ZoneInfoListRequest =  {
    type:'class',
    name:'ZoneInfoListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }
    }
}


//Mockup System for ZoneInfoListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDZoneInfoListRequest';
var dto_name = 'ZoneInfoListRequest';

function ZoneInfoListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genZoneInfoListRequestData();
    }
}

function genZoneInfoListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getZoneInfoListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getZoneInfoListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findZoneInfoListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteZoneInfoListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveZoneInfoListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveZoneInfoListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllZoneInfoListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ZoneInfoListRequestDataInit;
exports.genData = genZoneInfoListRequestData;
exports.getData = getZoneInfoListRequestData;
exports.findData = findZoneInfoListRequestData;
exports.getListData = getZoneInfoListRequestListData;
exports.deleteData = deleteZoneInfoListRequestData;
exports.saveData = saveZoneInfoListRequestData;
exports.saveListData = saveZoneInfoListRequestListData;
exports.getAllData = getAllZoneInfoListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ZoneInfoListRequestDataInit();
}

var overrideModule = '../overrides/ZoneInfoListRequest';
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



