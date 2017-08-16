'use strict';

//Model Definition File for IpLocationRequest.js

//var GenericRequest = require('./GenericRequest');
//var IpLocationDTO = require('./IpLocationDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Lokasyon tabanlı IP isteğinin sunucuya iletilmesi için kullanılan veri modelidir 
*/
exports.IpLocationRequest =  {
    type:'class',
    name:'IpLocationRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'IpLocationDTO', isRequired: true }
    }
}


//Mockup System for IpLocationRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDIpLocationRequest';
var dto_name = 'IpLocationRequest';

function IpLocationRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genIpLocationRequestData();
    }
}

function genIpLocationRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getIpLocationRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getIpLocationRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findIpLocationRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteIpLocationRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveIpLocationRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveIpLocationRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllIpLocationRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = IpLocationRequestDataInit;
exports.genData = genIpLocationRequestData;
exports.getData = getIpLocationRequestData;
exports.findData = findIpLocationRequestData;
exports.getListData = getIpLocationRequestListData;
exports.deleteData = deleteIpLocationRequestData;
exports.saveData = saveIpLocationRequestData;
exports.saveListData = saveIpLocationRequestListData;
exports.getAllData = getAllIpLocationRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    IpLocationRequestDataInit();
}

var overrideModule = '../overrides/IpLocationRequest';
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



