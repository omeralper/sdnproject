'use strict';

//Model Definition File for VirtualNetFunctionListRequest.js

//var GenericRequest = require('./GenericRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı listeleme işlemi için kullanılacak veri modelidir.
*/
exports.VirtualNetFunctionListRequest =  {
    type:'class',
    name:'VirtualNetFunctionListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vnfOptions : { name: 'vnfOptions', type: 'ListOptions', isRequired: true }, 
        nsdId : { name: 'nsdId', type: 'String' }
    }
}


//Mockup System for VirtualNetFunctionListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionListRequest';
var dto_name = 'VirtualNetFunctionListRequest';

function VirtualNetFunctionListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionListRequestData();
    }
}

function genVirtualNetFunctionListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionListRequestDataInit;
exports.genData = genVirtualNetFunctionListRequestData;
exports.getData = getVirtualNetFunctionListRequestData;
exports.findData = findVirtualNetFunctionListRequestData;
exports.getListData = getVirtualNetFunctionListRequestListData;
exports.deleteData = deleteVirtualNetFunctionListRequestData;
exports.saveData = saveVirtualNetFunctionListRequestData;
exports.saveListData = saveVirtualNetFunctionListRequestListData;
exports.getAllData = getAllVirtualNetFunctionListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionListRequestDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionListRequest';
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



