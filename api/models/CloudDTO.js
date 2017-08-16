'use strict';

//Model Definition File for CloudDTO.js

//var BaseDTO = require('./BaseDTO');
//var HOST_STATUS = require('./HOST_STATUS');
//var LocationInfo = require('./LocationInfo');
//var PortDetail = require('./PortDetail');
//var SUPER_TOPOLOGY_TYPE = require('./SUPER_TOPOLOGY_TYPE');

'use strict';
/**
* Süper Topolojideki, internete çıkışı sağlayan model.
*/
exports.CloudDTO =  {
    type:'class',
    name:'CloudDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        port : { name: 'port', type: 'PortDetail' }, 
        status : { name: 'status', type: 'HOST_STATUS' }, 
        type : { name: 'type', type: 'SUPER_TOPOLOGY_TYPE' }, 
        activeSince : { name: 'activeSince', type: 'Date' }, 
        location : { name: 'location', type: 'LocationInfo' }, 
        lastSeen : { name: 'lastSeen', type: 'Date' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }, 
        blocked : { name: 'blocked', type: 'Boolean' }, 
        colorCode : { name: 'colorCode', type: 'String' }
    }
}


//Mockup System for CloudDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCloudDTO';
var dto_name = 'CloudDTO';

function CloudDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCloudDTOData();
    }
}

function genCloudDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCloudDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCloudDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findCloudDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCloudDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCloudDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveCloudDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCloudDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = CloudDTODataInit;
exports.genData = genCloudDTOData;
exports.getData = getCloudDTOData;
exports.findData = findCloudDTOData;
exports.getListData = getCloudDTOListData;
exports.deleteData = deleteCloudDTOData;
exports.saveData = saveCloudDTOData;
exports.saveListData = saveCloudDTOListData;
exports.getAllData = getAllCloudDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    CloudDTODataInit();
}

var overrideModule = '../overrides/CloudDTO';
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



