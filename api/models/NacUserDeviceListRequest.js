'use strict';

//Model Definition File for NacUserDeviceListRequest.js

//var GenericRequest = require('./GenericRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcıya ait cihazların listeleme işlemleri için kullanılacak veri modelidir.
*/
exports.NacUserDeviceListRequest =  {
    type:'class',
    name:'NacUserDeviceListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        nacUserId : { name: 'nacUserId', type: 'String', isRequired: true }
    }
}


//Mockup System for NacUserDeviceListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacUserDeviceListRequest';
var dto_name = 'NacUserDeviceListRequest';

function NacUserDeviceListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacUserDeviceListRequestData();
    }
}

function genNacUserDeviceListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacUserDeviceListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacUserDeviceListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacUserDeviceListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacUserDeviceListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacUserDeviceListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacUserDeviceListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacUserDeviceListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NacUserDeviceListRequestDataInit;
exports.genData = genNacUserDeviceListRequestData;
exports.getData = getNacUserDeviceListRequestData;
exports.findData = findNacUserDeviceListRequestData;
exports.getListData = getNacUserDeviceListRequestListData;
exports.deleteData = deleteNacUserDeviceListRequestData;
exports.saveData = saveNacUserDeviceListRequestData;
exports.saveListData = saveNacUserDeviceListRequestListData;
exports.getAllData = getAllNacUserDeviceListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacUserDeviceListRequestDataInit();
}

var overrideModule = '../overrides/NacUserDeviceListRequest';
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



