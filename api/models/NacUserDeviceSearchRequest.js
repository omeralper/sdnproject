'use strict';

//Model Definition File for NacUserDeviceSearchRequest.js

//var GenericRequest = require('./GenericRequest');
//var SearchOptions = require('./SearchOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcıya ait cihazlarda arama istekleri için kullanılacak veri modelidir.
*/
exports.NacUserDeviceSearchRequest =  {
    type:'class',
    name:'NacUserDeviceSearchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'SearchOptions', isRequired: true }, 
        nacUserId : { name: 'nacUserId', type: 'String', isRequired: true }
    }
}


//Mockup System for NacUserDeviceSearchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceSearchRequest';
var dto_name = 'NacUserDeviceSearchRequest';

function NacUserDeviceSearchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceSearchRequestData();
    }
}

function genNacUserDeviceSearchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceSearchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceSearchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceSearchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceSearchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceSearchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceSearchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceSearchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceSearchRequestDataInit;
exports.genData = genNacUserDeviceSearchRequestData;
exports.getData = getNacUserDeviceSearchRequestData;
exports.findData = findNacUserDeviceSearchRequestData;
exports.getListData = getNacUserDeviceSearchRequestListData;
exports.deleteData = deleteNacUserDeviceSearchRequestData;
exports.saveData = saveNacUserDeviceSearchRequestData;
exports.saveListData = saveNacUserDeviceSearchRequestListData;
exports.getAllData = getAllNacUserDeviceSearchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceSearchRequestDataInit();
}

var overrideModule = '../overrides/NacUserDeviceSearchRequest';
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



