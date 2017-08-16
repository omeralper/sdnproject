'use strict';

//Model Definition File for VimInfoDTO.js

//var BaseDTO = require('./BaseDTO');
//var ComputeHostInfoDTO = require('./ComputeHostInfoDTO');
//var VimLocationDTO = require('./VimLocationDTO');
//var VimNetworkListDTO = require('./VimNetworkListDTO');

'use strict';
/**
* Ağ servis tanımı bilgisinin bulunduğu veri yapısı.
*/
exports.VimInfoDTO =  {
    type:'class',
    name:'VimInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vimLocation : { name: 'vimLocation', type: 'VimLocationDTO', isRequired: true }, 
        vimNetworks : { name: 'vimNetworks', type: 'VimNetworkListDTO', isRequired: true }, 
        type : { name: 'type', type: 'String' }, 
        projectId : { name: 'projectId', type: 'String' }, 
        active : { name: 'active', type: 'Boolean' }, 
        name : { name: 'name', type: 'String' }, 
        vimInstanceName : { name: 'vimInstanceName', type: 'String' }, 
        computeHostList : { name: 'computeHostList', type: 'Array', subType: 'ComputeHostInfoDTO' }
    }
}


//Mockup System for VimInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoDTO';
var dto_name = 'VimInfoDTO';

function VimInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoDTOData();
    }
}

function genVimInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoDTODataInit;
exports.genData = genVimInfoDTOData;
exports.getData = getVimInfoDTOData;
exports.findData = findVimInfoDTOData;
exports.getListData = getVimInfoDTOListData;
exports.deleteData = deleteVimInfoDTOData;
exports.saveData = saveVimInfoDTOData;
exports.saveListData = saveVimInfoDTOListData;
exports.getAllData = getAllVimInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoDTODataInit();
}

var overrideModule = '../overrides/VimInfoDTO';
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



