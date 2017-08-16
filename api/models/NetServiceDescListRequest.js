'use strict';

//Model Definition File for NetServiceDescListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ Servis tanımı listeleme işlemi için kullanılacak veri modelidir.
*/
exports.NetServiceDescListRequest =  {
    type:'class',
    name:'NetServiceDescListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        nsdOptions : { name: 'nsdOptions', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for NetServiceDescListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescListRequest';
var dto_name = 'NetServiceDescListRequest';

function NetServiceDescListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescListRequestData();
    }
}

function genNetServiceDescListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescListRequestDataInit;
exports.genData = genNetServiceDescListRequestData;
exports.getData = getNetServiceDescListRequestData;
exports.findData = findNetServiceDescListRequestData;
exports.getListData = getNetServiceDescListRequestListData;
exports.deleteData = deleteNetServiceDescListRequestData;
exports.saveData = saveNetServiceDescListRequestData;
exports.saveListData = saveNetServiceDescListRequestListData;
exports.getAllData = getAllNetServiceDescListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescListRequestDataInit();
}

var overrideModule = '../overrides/NetServiceDescListRequest';
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



