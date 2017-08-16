'use strict';

//Model Definition File for HostDTO.js

//var BaseDTO = require('./BaseDTO');
//var HOST_STATUS = require('./HOST_STATUS');
//var HOST_TYPE = require('./HOST_TYPE');
//var PortDetail = require('./PortDetail');
//var UserInfo = require('./UserInfo');

'use strict';
/**
* Uç birim veri transfer veri modeli.
*/
exports.HostDTO =  {
    type:'class',
    name:'HostDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        userInfo : { name: 'userInfo', type: 'UserInfo', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        port : { name: 'port', type: 'PortDetail', isRequired: true }, 
        status : { name: 'status', type: 'HOST_STATUS', isRequired: true }, 
        type : { name: 'type', type: 'HOST_TYPE', isRequired: true }, 
        activeSince : { name: 'activeSince', type: 'Date', isRequired: true }, 
        lastSeen : { name: 'lastSeen', type: 'Date', isRequired: true }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        depth : { name: 'depth', type: 'Integer' }, 
        blocked : { name: 'blocked', type: 'Boolean' }, 
        required : { name: 'required', type: 'Boolean' }, 
        colorCode : { name: 'colorCode', type: 'String' }, 
        networks : { name: 'networks', type: 'Array', subType: 'string' }, 
        vnfdId : { name: 'vnfdId', type: 'String' }, 
        vnfdType : { name: 'vnfdType', type: 'String' }, 
        vnfdName : { name: 'vnfdName', type: 'String' }, 
        vnfrId : { name: 'vnfrId', type: 'String' }, 
        vnfrType : { name: 'vnfrType', type: 'String' }, 
        vnfrName : { name: 'vnfrName', type: 'String' }
    }
}


//Mockup System for HostDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDHostDTO';
var dto_name = 'HostDTO';

function HostDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genHostDTOData();
    }
}

function genHostDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getHostDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getHostDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findHostDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteHostDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveHostDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveHostDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllHostDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = HostDTODataInit;
exports.genData = genHostDTOData;
exports.getData = getHostDTOData;
exports.findData = findHostDTOData;
exports.getListData = getHostDTOListData;
exports.deleteData = deleteHostDTOData;
exports.saveData = saveHostDTOData;
exports.saveListData = saveHostDTOListData;
exports.getAllData = getAllHostDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    HostDTODataInit();
}

var overrideModule = '../overrides/HostDTO';
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



