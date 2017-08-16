'use strict';

//Model Definition File for VirtualNetFunctionInstanceActionRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenStack uzerindeki VM&#39;leri moduler olarak start/stop/reboot edilmesi
*/
exports.VirtualNetFunctionInstanceActionRequest =  {
    type:'class',
    name:'VirtualNetFunctionInstanceActionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vmInstanceId : { name: 'vmInstanceId', type: 'String', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }, 
        actionType : { name: 'actionType', type: 'String' }
    }
}


//Mockup System for VirtualNetFunctionInstanceActionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceActionRequest';
var dto_name = 'VirtualNetFunctionInstanceActionRequest';

function VirtualNetFunctionInstanceActionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceActionRequestData();
    }
}

function genVirtualNetFunctionInstanceActionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceActionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceActionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceActionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceActionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceActionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceActionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceActionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceActionRequestDataInit;
exports.genData = genVirtualNetFunctionInstanceActionRequestData;
exports.getData = getVirtualNetFunctionInstanceActionRequestData;
exports.findData = findVirtualNetFunctionInstanceActionRequestData;
exports.getListData = getVirtualNetFunctionInstanceActionRequestListData;
exports.deleteData = deleteVirtualNetFunctionInstanceActionRequestData;
exports.saveData = saveVirtualNetFunctionInstanceActionRequestData;
exports.saveListData = saveVirtualNetFunctionInstanceActionRequestListData;
exports.getAllData = getAllVirtualNetFunctionInstanceActionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceActionRequestDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceActionRequest';
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



