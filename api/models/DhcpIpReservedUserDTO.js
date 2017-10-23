'use strict';

//Model Definition File for DhcpIpReservedUserDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki belirtilen bir kullanıcı-ip adresi çiftini içeren nesnedir.
*/
exports.DhcpIpReservedUserDTO =  {
    type:'class',
    name:'DhcpIpReservedUserDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        dhcpRangeId : { name: 'dhcpRangeId', type: 'String', isRequired: true }, 
        userId : { name: 'userId', type: 'String', isRequired: true }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        ip : { name: 'ip', type: 'String', isRequired: true }, 
        description : { name: 'description', type: 'String' }
    }
}


//Mockup System for DhcpIpReservedUserDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedUserDTO';
var dto_name = 'DhcpIpReservedUserDTO';

function DhcpIpReservedUserDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedUserDTOData();
    }
}

function genDhcpIpReservedUserDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedUserDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedUserDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedUserDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedUserDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedUserDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedUserDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedUserDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedUserDTODataInit;
exports.genData = genDhcpIpReservedUserDTOData;
exports.getData = getDhcpIpReservedUserDTOData;
exports.findData = findDhcpIpReservedUserDTOData;
exports.getListData = getDhcpIpReservedUserDTOListData;
exports.deleteData = deleteDhcpIpReservedUserDTOData;
exports.saveData = saveDhcpIpReservedUserDTOData;
exports.saveListData = saveDhcpIpReservedUserDTOListData;
exports.getAllData = getAllDhcpIpReservedUserDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedUserDTODataInit();
}

var overrideModule = '../overrides/DhcpIpReservedUserDTO';
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



