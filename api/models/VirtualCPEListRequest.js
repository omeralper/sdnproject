'use strict';

//Model Definition File for VirtualCPEListRequest.js

//var GenericRequest = require('./GenericRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal CPE listeleme işlemi için kullanılacak veri modelidir.
*/
exports.VirtualCPEListRequest =  {
    type:'class',
    name:'VirtualCPEListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for VirtualCPEListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEListRequest';
var dto_name = 'VirtualCPEListRequest';

function VirtualCPEListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEListRequestData();
    }
}

function genVirtualCPEListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEListRequestDataInit;
exports.genData = genVirtualCPEListRequestData;
exports.getData = getVirtualCPEListRequestData;
exports.findData = findVirtualCPEListRequestData;
exports.getListData = getVirtualCPEListRequestListData;
exports.deleteData = deleteVirtualCPEListRequestData;
exports.saveData = saveVirtualCPEListRequestData;
exports.saveListData = saveVirtualCPEListRequestListData;
exports.getAllData = getAllVirtualCPEListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEListRequestDataInit();
}

var overrideModule = '../overrides/VirtualCPEListRequest';
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



