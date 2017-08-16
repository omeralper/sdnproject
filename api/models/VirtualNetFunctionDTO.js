'use strict';

//Model Definition File for VirtualNetFunctionDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı bilgisinin bulunduğu veri yapısı.
*/
exports.VirtualNetFunctionDTO =  {
    type:'class',
    name:'VirtualNetFunctionDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        vendor : { name: 'vendor', type: 'String' }, 
        vnfVersion : { name: 'vnfVersion', type: 'String' }, 
        vnfType : { name: 'vnfType', type: 'String', isRequired: true }, 
        rawData : { name: 'rawData', type: 'String' }, 
        forceUpdate : { name: 'forceUpdate', type: 'Boolean' }
    }
}


//Mockup System for VirtualNetFunctionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionDTO';
var dto_name = 'VirtualNetFunctionDTO';

function VirtualNetFunctionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionDTOData();
    }
}

function genVirtualNetFunctionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionDTODataInit;
exports.genData = genVirtualNetFunctionDTOData;
exports.getData = getVirtualNetFunctionDTOData;
exports.findData = findVirtualNetFunctionDTOData;
exports.getListData = getVirtualNetFunctionDTOListData;
exports.deleteData = deleteVirtualNetFunctionDTOData;
exports.saveData = saveVirtualNetFunctionDTOData;
exports.saveListData = saveVirtualNetFunctionDTOListData;
exports.getAllData = getAllVirtualNetFunctionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionDTODataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionDTO';
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



