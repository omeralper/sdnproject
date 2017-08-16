'use strict';

//Model Definition File for DhcpOptionKeyDTO.js

//var BaseDTO = require('./BaseDTO');
//var OPTION_TYPE = require('./OPTION_TYPE');

'use strict';
/**
* Belirtilen bir dhcp kapsamı (dhcpScope) içindeki dhcpOptionKey alanını içeren nesnedir.
*/
exports.DhcpOptionKeyDTO =  {
    type:'class',
    name:'DhcpOptionKeyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        optionNumber : { name: 'optionNumber', type: 'Integer', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        optionType : { name: 'optionType', type: 'OPTION_TYPE', isRequired: true }
    }
}


//Mockup System for DhcpOptionKeyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionKeyDTO';
var dto_name = 'DhcpOptionKeyDTO';

function DhcpOptionKeyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionKeyDTOData();
    }
}

function genDhcpOptionKeyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionKeyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionKeyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionKeyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionKeyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionKeyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionKeyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionKeyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionKeyDTODataInit;
exports.genData = genDhcpOptionKeyDTOData;
exports.getData = getDhcpOptionKeyDTOData;
exports.findData = findDhcpOptionKeyDTOData;
exports.getListData = getDhcpOptionKeyDTOListData;
exports.deleteData = deleteDhcpOptionKeyDTOData;
exports.saveData = saveDhcpOptionKeyDTOData;
exports.saveListData = saveDhcpOptionKeyDTOListData;
exports.getAllData = getAllDhcpOptionKeyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionKeyDTODataInit();
}

var overrideModule = '../overrides/DhcpOptionKeyDTO';
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



