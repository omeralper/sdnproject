'use strict';

//Model Definition File for ComputeHostInfoDTO.js


'use strict';
/**
* Her bir zone bilgisini tutan veri
*/
exports.ComputeHostInfoDTO =  {
    type:'class',
    name:'ComputeHostInfoDTO',
    fields: {
        id : { name: 'id', type: 'Integer' }, 
        host_ip : { name: 'host_ip', type: 'String' }, 
        hypervisor_hostname : { name: 'hypervisor_hostname', type: 'String' }, 
        status : { name: 'status', type: 'String' }, 
        state : { name: 'state', type: 'String' }, 
        hypervisor_type : { name: 'hypervisor_type', type: 'String' }
    }
}


//Mockup System for ComputeHostInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostInfoDTO';
var dto_name = 'ComputeHostInfoDTO';

function ComputeHostInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostInfoDTOData();
    }
}

function genComputeHostInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostInfoDTODataInit;
exports.genData = genComputeHostInfoDTOData;
exports.getData = getComputeHostInfoDTOData;
exports.findData = findComputeHostInfoDTOData;
exports.getListData = getComputeHostInfoDTOListData;
exports.deleteData = deleteComputeHostInfoDTOData;
exports.saveData = saveComputeHostInfoDTOData;
exports.saveListData = saveComputeHostInfoDTOListData;
exports.getAllData = getAllComputeHostInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostInfoDTODataInit();
}

var overrideModule = '../overrides/ComputeHostInfoDTO';
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



