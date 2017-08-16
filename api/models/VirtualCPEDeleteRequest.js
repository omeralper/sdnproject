'use strict';

//Model Definition File for VirtualCPEDeleteRequest.js

//var DeleteOptions = require('./DeleteOptions');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal CPE silme istekleri için kullanılacak veri modelidir.
*/
exports.VirtualCPEDeleteRequest =  {
    type:'class',
    name:'VirtualCPEDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        options : { name: 'options', type: 'DeleteOptions', isRequired: true }
    }
}


//Mockup System for VirtualCPEDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEDeleteRequest';
var dto_name = 'VirtualCPEDeleteRequest';

function VirtualCPEDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEDeleteRequestData();
    }
}

function genVirtualCPEDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEDeleteRequestDataInit;
exports.genData = genVirtualCPEDeleteRequestData;
exports.getData = getVirtualCPEDeleteRequestData;
exports.findData = findVirtualCPEDeleteRequestData;
exports.getListData = getVirtualCPEDeleteRequestListData;
exports.deleteData = deleteVirtualCPEDeleteRequestData;
exports.saveData = saveVirtualCPEDeleteRequestData;
exports.saveListData = saveVirtualCPEDeleteRequestListData;
exports.getAllData = getAllVirtualCPEDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEDeleteRequestDataInit();
}

var overrideModule = '../overrides/VirtualCPEDeleteRequest';
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



