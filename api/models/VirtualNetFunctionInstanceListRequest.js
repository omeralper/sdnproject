'use strict';

//Model Definition File for VirtualNetFunctionInstanceListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* VNFR istek objesi
*/
exports.VirtualNetFunctionInstanceListRequest =  {
    type:'class',
    name:'VirtualNetFunctionInstanceListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }, 
        zoneId : { name: 'zoneId', type: 'String' }, 
        computeHostId : { name: 'computeHostId', type: 'String' }, 
        computeHostIp : { name: 'computeHostIp', type: 'String' }, 
        vnfServerId : { name: 'vnfServerId', type: 'String' }, 
        vnfciHostName : { name: 'vnfciHostName', type: 'String' }, 
        vnfType : { name: 'vnfType', type: 'String' }, 
        vnfIp : { name: 'vnfIp', type: 'String' }
    }
}


//Mockup System for VirtualNetFunctionInstanceListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceListRequest';
var dto_name = 'VirtualNetFunctionInstanceListRequest';

function VirtualNetFunctionInstanceListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceListRequestData();
    }
}

function genVirtualNetFunctionInstanceListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceListRequestDataInit;
exports.genData = genVirtualNetFunctionInstanceListRequestData;
exports.getData = getVirtualNetFunctionInstanceListRequestData;
exports.findData = findVirtualNetFunctionInstanceListRequestData;
exports.getListData = getVirtualNetFunctionInstanceListRequestListData;
exports.deleteData = deleteVirtualNetFunctionInstanceListRequestData;
exports.saveData = saveVirtualNetFunctionInstanceListRequestData;
exports.saveListData = saveVirtualNetFunctionInstanceListRequestListData;
exports.getAllData = getAllVirtualNetFunctionInstanceListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceListRequestDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceListRequest';
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



