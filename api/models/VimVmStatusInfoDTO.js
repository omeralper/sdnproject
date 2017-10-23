'use strict';

//Model Definition File for VimVmStatusInfoDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Ağ servis kayıtı bilgisinin bulunduğu veri yapısı.
*/
exports.VimVmStatusInfoDTO =  {
    type:'class',
    name:'VimVmStatusInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        status : { name: 'status', type: 'String' }, 
        hostStatus : { name: 'hostStatus', type: 'String' }, 
        vimId : { name: 'vimId', type: 'String' }
    }
}


//Mockup System for VimVmStatusInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimVmStatusInfoDTO';
var dto_name = 'VimVmStatusInfoDTO';

function VimVmStatusInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimVmStatusInfoDTOData();
    }
}

function genVimVmStatusInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimVmStatusInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimVmStatusInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimVmStatusInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimVmStatusInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimVmStatusInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimVmStatusInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimVmStatusInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VimVmStatusInfoDTODataInit;
exports.genData = genVimVmStatusInfoDTOData;
exports.getData = getVimVmStatusInfoDTOData;
exports.findData = findVimVmStatusInfoDTOData;
exports.getListData = getVimVmStatusInfoDTOListData;
exports.deleteData = deleteVimVmStatusInfoDTOData;
exports.saveData = saveVimVmStatusInfoDTOData;
exports.saveListData = saveVimVmStatusInfoDTOListData;
exports.getAllData = getAllVimVmStatusInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimVmStatusInfoDTODataInit();
}

var overrideModule = '../overrides/VimVmStatusInfoDTO';
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



