'use strict';

//Model Definition File for VirtualNetFunctionInstanceDTO.js

//var BaseDTO = require('./BaseDTO');
//var InterfaceAttachments = require('./InterfaceAttachments');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı bilgisinin bulunduğu veri yapısı.
*/
exports.VirtualNetFunctionInstanceDTO =  {
    type:'class',
    name:'VirtualNetFunctionInstanceDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vimInstanceId : { name: 'vimInstanceId', type: 'String' }, 
        projectId : { name: 'projectId', type: 'String' }, 
        vnfType : { name: 'vnfType', type: 'String' }, 
        vnfdId : { name: 'vnfdId', type: 'String' }, 
        vnfServerId : { name: 'vnfServerId', type: 'String' }, 
        vnfciHostname : { name: 'vnfciHostname', type: 'String' }, 
        vnfciId : { name: 'vnfciId', type: 'String' }, 
        nsdId : { name: 'nsdId', type: 'String' }, 
        nsrId : { name: 'nsrId', type: 'String' }, 
        vnfrId : { name: 'vnfrId', type: 'String' }, 
        vnfrVersion : { name: 'vnfrVersion', type: 'String' }, 
        vduId : { name: 'vduId', type: 'String' }, 
        computeIpaddr : { name: 'computeIpaddr', type: 'String' }, 
        computeHostId : { name: 'computeHostId', type: 'String' }, 
        computeHostName : { name: 'computeHostName', type: 'String' }, 
        state : { name: 'state', type: 'String' }, 
        zone : { name: 'zone', type: 'String' }, 
        interfaceAttachments : { name: 'interfaceAttachments', type: 'InterfaceAttachments' }, 
        vimInstanceName : { name: 'vimInstanceName', type: 'String' }, 
        vmIp : { name: 'vmIp', type: 'String' }, 
        failOverDescription : { name: 'failOverDescription', type: 'String' }, 
        rawData : { name: 'rawData', type: 'String' }
    }
}


//Mockup System for VirtualNetFunctionInstanceDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionInstanceDTO';
var dto_name = 'VirtualNetFunctionInstanceDTO';

function VirtualNetFunctionInstanceDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionInstanceDTOData();
    }
}

function genVirtualNetFunctionInstanceDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionInstanceDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionInstanceDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionInstanceDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionInstanceDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionInstanceDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionInstanceDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionInstanceDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionInstanceDTODataInit;
exports.genData = genVirtualNetFunctionInstanceDTOData;
exports.getData = getVirtualNetFunctionInstanceDTOData;
exports.findData = findVirtualNetFunctionInstanceDTOData;
exports.getListData = getVirtualNetFunctionInstanceDTOListData;
exports.deleteData = deleteVirtualNetFunctionInstanceDTOData;
exports.saveData = saveVirtualNetFunctionInstanceDTOData;
exports.saveListData = saveVirtualNetFunctionInstanceDTOListData;
exports.getAllData = getAllVirtualNetFunctionInstanceDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionInstanceDTODataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionInstanceDTO';
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



