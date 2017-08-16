'use strict';

//Model Definition File for VimNetworkSubnetDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* 
*/
exports.VimNetworkSubnetDTO =  {
    type:'class',
    name:'VimNetworkSubnetDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        extId : { name: 'extId', type: 'String' }, 
        networkId : { name: 'networkId', type: 'String' }, 
        cidr : { name: 'cidr', type: 'String' }, 
        gatewayIp : { name: 'gatewayIp', type: 'String' }
    }
}


//Mockup System for VimNetworkSubnetDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimNetworkSubnetDTO';
var dto_name = 'VimNetworkSubnetDTO';

function VimNetworkSubnetDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimNetworkSubnetDTOData();
    }
}

function genVimNetworkSubnetDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimNetworkSubnetDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimNetworkSubnetDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimNetworkSubnetDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimNetworkSubnetDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimNetworkSubnetDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimNetworkSubnetDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimNetworkSubnetDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimNetworkSubnetDTODataInit;
exports.genData = genVimNetworkSubnetDTOData;
exports.getData = getVimNetworkSubnetDTOData;
exports.findData = findVimNetworkSubnetDTOData;
exports.getListData = getVimNetworkSubnetDTOListData;
exports.deleteData = deleteVimNetworkSubnetDTOData;
exports.saveData = saveVimNetworkSubnetDTOData;
exports.saveListData = saveVimNetworkSubnetDTOListData;
exports.getAllData = getAllVimNetworkSubnetDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimNetworkSubnetDTODataInit();
}

var overrideModule = '../overrides/VimNetworkSubnetDTO';
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



