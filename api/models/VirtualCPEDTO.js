'use strict';

//Model Definition File for VirtualCPEDTO.js

//var BaseDTO = require('./BaseDTO');
//var object = require('./object');

'use strict';
/**
* Sanal CPE bilgisinin bulunduğu veri yapısı.
*/
exports.VirtualCPEDTO =  {
    type:'class',
    name:'VirtualCPEDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vimId : { name: 'vimId', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        desc : { name: 'desc', type: 'String' }, 
        status : { name: 'status', type: 'String' }, 
        rawData : { name: 'rawData', type: 'Object' }
    }
}


//Mockup System for VirtualCPEDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPEDTO';
var dto_name = 'VirtualCPEDTO';

function VirtualCPEDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPEDTOData();
    }
}

function genVirtualCPEDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPEDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPEDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPEDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPEDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPEDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPEDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPEDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPEDTODataInit;
exports.genData = genVirtualCPEDTOData;
exports.getData = getVirtualCPEDTOData;
exports.findData = findVirtualCPEDTOData;
exports.getListData = getVirtualCPEDTOListData;
exports.deleteData = deleteVirtualCPEDTOData;
exports.saveData = saveVirtualCPEDTOData;
exports.saveListData = saveVirtualCPEDTOListData;
exports.getAllData = getAllVirtualCPEDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPEDTODataInit();
}

var overrideModule = '../overrides/VirtualCPEDTO';
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



