'use strict';

//Model Definition File for DhcpOptionDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* dhcp kapsamı içindeki bir opsiyonel yapılandırma veri haritası (map) DTO nesnesidir.
*/
exports.DhcpOptionDTO =  {
    type:'class',
    name:'DhcpOptionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        dhcpScopeId : { name: 'dhcpScopeId', type: 'String', isRequired: true }, 
        dhcpOptionKey : { name: 'dhcpOptionKey', type: 'Integer', isRequired: true }, 
        dhcpOptionValue : { name: 'dhcpOptionValue', type: 'String', isRequired: true }
    }
}


//Mockup System for DhcpOptionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionDTO';
var dto_name = 'DhcpOptionDTO';

function DhcpOptionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionDTOData();
    }
}

function genDhcpOptionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionDTODataInit;
exports.genData = genDhcpOptionDTOData;
exports.getData = getDhcpOptionDTOData;
exports.findData = findDhcpOptionDTOData;
exports.getListData = getDhcpOptionDTOListData;
exports.deleteData = deleteDhcpOptionDTOData;
exports.saveData = saveDhcpOptionDTOData;
exports.saveListData = saveDhcpOptionDTOListData;
exports.getAllData = getAllDhcpOptionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionDTODataInit();
}

var overrideModule = '../overrides/DhcpOptionDTO';
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



