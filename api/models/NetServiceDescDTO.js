'use strict';

//Model Definition File for NetServiceDescDTO.js

//var BaseDTO = require('./BaseDTO');
//var VirtualNetFunctionDTO = require('./VirtualNetFunctionDTO');

'use strict';
/**
* Ağ servis tanımı bilgisinin bulunduğu veri yapısı.
*/
exports.NetServiceDescDTO =  {
    type:'class',
    name:'NetServiceDescDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        projectId : { name: 'projectId', type: 'String' }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        vendor : { name: 'vendor', type: 'String' }, 
        nsdVersion : { name: 'nsdVersion', type: 'String' }, 
        enabled : { name: 'enabled', type: 'Boolean', isRequired: true }, 
        rawData : { name: 'rawData', type: 'String' }, 
        vnfdSumamryList : { name: 'vnfdSumamryList', type: 'Array', subType: 'VirtualNetFunctionDTO' }
    }
}


//Mockup System for NetServiceDescDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceDescDTO';
var dto_name = 'NetServiceDescDTO';

function NetServiceDescDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceDescDTOData();
    }
}

function genNetServiceDescDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceDescDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceDescDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceDescDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceDescDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceDescDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceDescDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceDescDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceDescDTODataInit;
exports.genData = genNetServiceDescDTOData;
exports.getData = getNetServiceDescDTOData;
exports.findData = findNetServiceDescDTOData;
exports.getListData = getNetServiceDescDTOListData;
exports.deleteData = deleteNetServiceDescDTOData;
exports.saveData = saveNetServiceDescDTOData;
exports.saveListData = saveNetServiceDescDTOListData;
exports.getAllData = getAllNetServiceDescDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceDescDTODataInit();
}

var overrideModule = '../overrides/NetServiceDescDTO';
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



