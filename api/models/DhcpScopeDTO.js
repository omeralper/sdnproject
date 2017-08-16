'use strict';

//Model Definition File for DhcpScopeDTO.js

//var BaseDTO = require('./BaseDTO');
//var DhcpIpRangeDTO = require('./DhcpIpRangeDTO');
//var DhcpOptionDTO = require('./DhcpOptionDTO');
//var IP_VERSION_TYPE = require('./IP_VERSION_TYPE');

'use strict';
/**
* Dhcp kapsamı (DhcpScope) veri transfer modelidir.
*/
exports.DhcpScopeDTO =  {
    type:'class',
    name:'DhcpScopeDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        networkId : { name: 'networkId', type: 'String' }, 
        vlanId : { name: 'vlanId', type: 'Long' }, 
        ipVersionType : { name: 'ipVersionType', type: 'IP_VERSION_TYPE', isRequired: true }, 
        dhcpIpRangeDtos : { name: 'dhcpIpRangeDtos', type: 'Array', subType: 'DhcpIpRangeDTO' }, 
        dhcpOptionDtos : { name: 'dhcpOptionDtos', type: 'Array', subType: 'DhcpOptionDTO' }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        routerAddresses : { name: 'routerAddresses', type: 'String', isRequired: true }, 
        domainServers : { name: 'domainServers', type: 'String', isRequired: true }
    }
}


//Mockup System for DhcpScopeDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpScopeDTO';
var dto_name = 'DhcpScopeDTO';

function DhcpScopeDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpScopeDTOData();
    }
}

function genDhcpScopeDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpScopeDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpScopeDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpScopeDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpScopeDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpScopeDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpScopeDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpScopeDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpScopeDTODataInit;
exports.genData = genDhcpScopeDTOData;
exports.getData = getDhcpScopeDTOData;
exports.findData = findDhcpScopeDTOData;
exports.getListData = getDhcpScopeDTOListData;
exports.deleteData = deleteDhcpScopeDTOData;
exports.saveData = saveDhcpScopeDTOData;
exports.saveListData = saveDhcpScopeDTOListData;
exports.getAllData = getAllDhcpScopeDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpScopeDTODataInit();
}

var overrideModule = '../overrides/DhcpScopeDTO';
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



