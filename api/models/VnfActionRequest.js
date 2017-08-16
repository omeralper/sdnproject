'use strict';

//Model Definition File for VnfActionRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* OpenBaton uzerinden calistirilan VM&#39;ler ile ilgili remove/start servislerinin istek objesi
*/
exports.VnfActionRequest =  {
    type:'class',
    name:'VnfActionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String', isRequired: true }, 
        computeHostIp : { name: 'computeHostIp', type: 'String', isRequired: true }, 
        vnfdType : { name: 'vnfdType', type: 'String', isRequired: true }, 
        nsdId : { name: 'nsdId', type: 'String', isRequired: true }, 
        vnfrId : { name: 'vnfrId', type: 'String', isRequired: true }, 
        vnfIp : { name: 'vnfIp', type: 'String' }
    }
}


//Mockup System for VnfActionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfActionRequest';
var dto_name = 'VnfActionRequest';

function VnfActionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfActionRequestData();
    }
}

function genVnfActionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfActionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfActionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfActionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfActionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfActionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfActionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfActionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfActionRequestDataInit;
exports.genData = genVnfActionRequestData;
exports.getData = getVnfActionRequestData;
exports.findData = findVnfActionRequestData;
exports.getListData = getVnfActionRequestListData;
exports.deleteData = deleteVnfActionRequestData;
exports.saveData = saveVnfActionRequestData;
exports.saveListData = saveVnfActionRequestListData;
exports.getAllData = getAllVnfActionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfActionRequestDataInit();
}

var overrideModule = '../overrides/VnfActionRequest';
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



