'use strict';

//Model Definition File for NetServiceDescRequest.js

//var GenericRequest = require('./GenericRequest');
//var NetServiceDescDTO = require('./NetServiceDescDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis tanımı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.NetServiceDescRequest =  {
    type:'class',
    name:'NetServiceDescRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'NetServiceDescDTO', isRequired: true }
    }
}


//Mockup System for NetServiceDescRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescRequest';
var dto_name = 'NetServiceDescRequest';

function NetServiceDescRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescRequestData();
    }
}

function genNetServiceDescRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescRequestDataInit;
exports.genData = genNetServiceDescRequestData;
exports.getData = getNetServiceDescRequestData;
exports.findData = findNetServiceDescRequestData;
exports.getListData = getNetServiceDescRequestListData;
exports.deleteData = deleteNetServiceDescRequestData;
exports.saveData = saveNetServiceDescRequestData;
exports.saveListData = saveNetServiceDescRequestListData;
exports.getAllData = getAllNetServiceDescRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescRequestDataInit();
}

var overrideModule = '../overrides/NetServiceDescRequest';
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



