'use strict';

//Model Definition File for DhcpIpPoolDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Dhcpde ip range oluşturulması için uyulması gereken ip aralığı modelidir.
*/
exports.DhcpIpPoolDTO =  {
    type:'class',
    name:'DhcpIpPoolDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        domainId : { name: 'domainId', type: 'Long', isRequired: true }, 
        ipAddress : { name: 'ipAddress', type: 'String', isRequired: true }, 
        subnetMask : { name: 'subnetMask', type: 'String', isRequired: true }
    }
}


//Mockup System for DhcpIpPoolDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpPoolDTO';
var dto_name = 'DhcpIpPoolDTO';

function DhcpIpPoolDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpPoolDTOData();
    }
}

function genDhcpIpPoolDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpPoolDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpPoolDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpPoolDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpPoolDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpPoolDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpPoolDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpPoolDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpPoolDTODataInit;
exports.genData = genDhcpIpPoolDTOData;
exports.getData = getDhcpIpPoolDTOData;
exports.findData = findDhcpIpPoolDTOData;
exports.getListData = getDhcpIpPoolDTOListData;
exports.deleteData = deleteDhcpIpPoolDTOData;
exports.saveData = saveDhcpIpPoolDTOData;
exports.saveListData = saveDhcpIpPoolDTOListData;
exports.getAllData = getAllDhcpIpPoolDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpPoolDTODataInit();
}

var overrideModule = '../overrides/DhcpIpPoolDTO';
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



