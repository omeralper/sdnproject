'use strict';

//Model Definition File for DhcpIpReservedDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki belirtilen bir mac adresi-ip adresi çiftini içeren nesnedir.
*/
exports.DhcpIpReservedDTO =  {
    type:'class',
    name:'DhcpIpReservedDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        dhcpRangeId : { name: 'dhcpRangeId', type: 'String', isRequired: true }, 
        mac : { name: 'mac', type: 'String', isRequired: true }, 
        ip : { name: 'ip', type: 'String', isRequired: true }, 
        description : { name: 'description', type: 'String' }
    }
}


//Mockup System for DhcpIpReservedDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedDTO';
var dto_name = 'DhcpIpReservedDTO';

function DhcpIpReservedDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedDTOData();
    }
}

function genDhcpIpReservedDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedDTODataInit;
exports.genData = genDhcpIpReservedDTOData;
exports.getData = getDhcpIpReservedDTOData;
exports.findData = findDhcpIpReservedDTOData;
exports.getListData = getDhcpIpReservedDTOListData;
exports.deleteData = deleteDhcpIpReservedDTOData;
exports.saveData = saveDhcpIpReservedDTOData;
exports.saveListData = saveDhcpIpReservedDTOListData;
exports.getAllData = getAllDhcpIpReservedDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedDTODataInit();
}

var overrideModule = '../overrides/DhcpIpReservedDTO';
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



