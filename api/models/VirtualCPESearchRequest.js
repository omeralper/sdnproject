'use strict';

//Model Definition File for VirtualCPESearchRequest.js

//var GenericRequest = require('./GenericRequest');
//var SearchOptions = require('./SearchOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal CPE arama istekleri için kullanılacak veri modelidir.
*/
exports.VirtualCPESearchRequest =  {
    type:'class',
    name:'VirtualCPESearchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        options : { name: 'options', type: 'SearchOptions', isRequired: true }
    }
}


//Mockup System for VirtualCPESearchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPESearchRequest';
var dto_name = 'VirtualCPESearchRequest';

function VirtualCPESearchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPESearchRequestData();
    }
}

function genVirtualCPESearchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPESearchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPESearchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPESearchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPESearchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPESearchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPESearchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPESearchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPESearchRequestDataInit;
exports.genData = genVirtualCPESearchRequestData;
exports.getData = getVirtualCPESearchRequestData;
exports.findData = findVirtualCPESearchRequestData;
exports.getListData = getVirtualCPESearchRequestListData;
exports.deleteData = deleteVirtualCPESearchRequestData;
exports.saveData = saveVirtualCPESearchRequestData;
exports.saveListData = saveVirtualCPESearchRequestListData;
exports.getAllData = getAllVirtualCPESearchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPESearchRequestDataInit();
}

var overrideModule = '../overrides/VirtualCPESearchRequest';
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



