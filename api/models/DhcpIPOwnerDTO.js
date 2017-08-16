'use strict';

//Model Definition File for DhcpIPOwnerDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Dhcp IP sahibi veri transfer modelidir.
*/
exports.DhcpIPOwnerDTO =  {
    type:'class',
    name:'DhcpIPOwnerDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        hostName : { name: 'hostName', type: 'String', isRequired: true }, 
        IP : { name: 'IP', type: 'String', isRequired: true }, 
        MAC : { name: 'MAC', type: 'String' }, 
        userName : { name: 'userName', type: 'String', isRequired: true }, 
        startDate : { name: 'startDate', type: 'Date', isRequired: true }, 
        endDate : { name: 'endDate', type: 'Date', isRequired: true }
    }
}


//Mockup System for DhcpIPOwnerDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIPOwnerDTO';
var dto_name = 'DhcpIPOwnerDTO';

function DhcpIPOwnerDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIPOwnerDTOData();
    }
}

function genDhcpIPOwnerDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIPOwnerDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIPOwnerDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIPOwnerDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIPOwnerDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIPOwnerDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIPOwnerDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIPOwnerDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIPOwnerDTODataInit;
exports.genData = genDhcpIPOwnerDTOData;
exports.getData = getDhcpIPOwnerDTOData;
exports.findData = findDhcpIPOwnerDTOData;
exports.getListData = getDhcpIPOwnerDTOListData;
exports.deleteData = deleteDhcpIPOwnerDTOData;
exports.saveData = saveDhcpIPOwnerDTOData;
exports.saveListData = saveDhcpIPOwnerDTOListData;
exports.getAllData = getAllDhcpIPOwnerDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIPOwnerDTODataInit();
}

var overrideModule = '../overrides/DhcpIPOwnerDTO';
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



