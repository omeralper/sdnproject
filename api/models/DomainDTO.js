'use strict';

//Model Definition File for DomainDTO.js

//var BaseDTO = require('./BaseDTO');
//var DOMAIN_STATUS = require('./DOMAIN_STATUS');
//var LocationInfo = require('./LocationInfo');
//var PortDetail = require('./PortDetail');
//var SUPER_TOPOLOGY_TYPE = require('./SUPER_TOPOLOGY_TYPE');
//var WanAlarmInfoDTO = require('./WanAlarmInfoDTO');

'use strict';
/**
* Süper Topolojideki, gruplanmış topoloji modeli.
*/
exports.DomainDTO =  {
    type:'class',
    name:'DomainDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        port : { name: 'port', type: 'PortDetail' }, 
        status : { name: 'status', type: 'DOMAIN_STATUS' }, 
        type : { name: 'type', type: 'SUPER_TOPOLOGY_TYPE' }, 
        alarms : { name: 'alarms', type: 'WanAlarmInfoDTO' }, 
        activeSince : { name: 'activeSince', type: 'Date' }, 
        location : { name: 'location', type: 'LocationInfo' }, 
        lastSeen : { name: 'lastSeen', type: 'Date' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }, 
        blocked : { name: 'blocked', type: 'Boolean' }, 
        colorCode : { name: 'colorCode', type: 'String' }
    }
}


//Mockup System for DomainDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDomainDTO';
var dto_name = 'DomainDTO';

function DomainDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDomainDTOData();
    }
}

function genDomainDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDomainDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDomainDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDomainDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDomainDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDomainDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDomainDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDomainDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DomainDTODataInit;
exports.genData = genDomainDTOData;
exports.getData = getDomainDTOData;
exports.findData = findDomainDTOData;
exports.getListData = getDomainDTOListData;
exports.deleteData = deleteDomainDTOData;
exports.saveData = saveDomainDTOData;
exports.saveListData = saveDomainDTOListData;
exports.getAllData = getAllDomainDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DomainDTODataInit();
}

var overrideModule = '../overrides/DomainDTO';
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



