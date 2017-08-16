'use strict';

//Model Definition File for VimNetworkDTO.js

//var BaseDTO = require('./BaseDTO');
//var VimNetworkSubnetListDTO = require('./VimNetworkSubnetListDTO');

'use strict';
/**
* VIM bilgisinin bulundugu yer
*/
exports.VimNetworkDTO =  {
    type:'class',
    name:'VimNetworkDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        subnetList : { name: 'subnetList', type: 'VimNetworkSubnetListDTO' }, 
        name : { name: 'name', type: 'String' }, 
        external : { name: 'external', type: 'String' }
    }
}


//Mockup System for VimNetworkDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimNetworkDTO';
var dto_name = 'VimNetworkDTO';

function VimNetworkDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimNetworkDTOData();
    }
}

function genVimNetworkDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimNetworkDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimNetworkDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimNetworkDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimNetworkDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimNetworkDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimNetworkDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimNetworkDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimNetworkDTODataInit;
exports.genData = genVimNetworkDTOData;
exports.getData = getVimNetworkDTOData;
exports.findData = findVimNetworkDTOData;
exports.getListData = getVimNetworkDTOListData;
exports.deleteData = deleteVimNetworkDTOData;
exports.saveData = saveVimNetworkDTOData;
exports.saveListData = saveVimNetworkDTOListData;
exports.getAllData = getAllVimNetworkDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimNetworkDTODataInit();
}

var overrideModule = '../overrides/VimNetworkDTO';
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



