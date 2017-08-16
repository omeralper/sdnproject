'use strict';

//Model Definition File for DhcpIpRangeDTO.js

//var BaseDTO = require('./BaseDTO');
//var DhcpIpExcludedDTO = require('./DhcpIpExcludedDTO');
//var DhcpIpReservedDTO = require('./DhcpIpReservedDTO');

'use strict';
/**
* DhcpIpRange veri transfer modelidir.
*/
exports.DhcpIpRangeDTO =  {
    type:'class',
    name:'DhcpIpRangeDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        dhcpScopeId : { name: 'dhcpScopeId', type: 'String', isRequired: true }, 
        ipStart : { name: 'ipStart', type: 'String', isRequired: true }, 
        ipEnd : { name: 'ipEnd', type: 'String', isRequired: true }, 
        networkMask : { name: 'networkMask', type: 'String', isRequired: true }, 
        ipsExcludedDtos : { name: 'ipsExcludedDtos', type: 'Array', subType: 'DhcpIpExcludedDTO' }, 
        ipsReservedDtos : { name: 'ipsReservedDtos', type: 'Array', subType: 'DhcpIpReservedDTO' }
    }
}


//Mockup System for DhcpIpRangeDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpRangeDTO';
var dto_name = 'DhcpIpRangeDTO';

function DhcpIpRangeDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpRangeDTOData();
    }
}

function genDhcpIpRangeDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpRangeDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpRangeDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpRangeDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpRangeDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpRangeDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpRangeDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpRangeDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpRangeDTODataInit;
exports.genData = genDhcpIpRangeDTOData;
exports.getData = getDhcpIpRangeDTOData;
exports.findData = findDhcpIpRangeDTOData;
exports.getListData = getDhcpIpRangeDTOListData;
exports.deleteData = deleteDhcpIpRangeDTOData;
exports.saveData = saveDhcpIpRangeDTOData;
exports.saveListData = saveDhcpIpRangeDTOListData;
exports.getAllData = getAllDhcpIpRangeDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpRangeDTODataInit();
}

var overrideModule = '../overrides/DhcpIpRangeDTO';
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



