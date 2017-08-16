'use strict';

//Model Definition File for TopologyDTO.js

//var BaseDTO = require('./BaseDTO');
//var ControllerDTO = require('./ControllerDTO');
//var DomainDTO = require('./DomainDTO');
//var HostDTO = require('./HostDTO');
//var LinkDTO = require('./LinkDTO');
//var MVTN_REQUEST_STATUS = require('./MVTN_REQUEST_STATUS');
//var NetworkDeviceDTO = require('./NetworkDeviceDTO');
//var SdnipRouterDTO = require('./SdnipRouterDTO');
//var SwitchDTO = require('./SwitchDTO');
//var TopologyInfoDTO = require('./TopologyInfoDTO');
//var WanPortInfoDTO = require('./WanPortInfoDTO');

'use strict';
/**
* Topoloji veri transfer veri modeli.
*/
exports.TopologyDTO =  {
    type:'class',
    name:'TopologyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        info : { name: 'info', type: 'TopologyInfoDTO', isRequired: true }, 
        switches : { name: 'switches', type: 'Array', subType: 'SwitchDTO' }, 
        links : { name: 'links', type: 'Array', subType: 'LinkDTO' }, 
        hosts : { name: 'hosts', type: 'Array', subType: 'HostDTO' }, 
        controllers : { name: 'controllers', type: 'Array', subType: 'ControllerDTO' }, 
        networkdevices : { name: 'networkdevices', type: 'Array', subType: 'NetworkDeviceDTO' }, 
        domains : { name: 'domains', type: 'Array', subType: 'DomainDTO' }, 
        ports : { name: 'ports', type: 'Array', subType: 'WanPortInfoDTO' }, 
        requestStatus : { name: 'requestStatus', type: 'MVTN_REQUEST_STATUS' }, 
        routers : { name: 'routers', type: 'Array', subType: 'SdnipRouterDTO' }, 
        isLldpDisabled : { name: 'isLldpDisabled', type: 'Boolean' }
    }
}


//Mockup System for TopologyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyDTO';
var dto_name = 'TopologyDTO';

function TopologyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyDTOData();
    }
}

function genTopologyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyDTODataInit;
exports.genData = genTopologyDTOData;
exports.getData = getTopologyDTOData;
exports.findData = findTopologyDTOData;
exports.getListData = getTopologyDTOListData;
exports.deleteData = deleteTopologyDTOData;
exports.saveData = saveTopologyDTOData;
exports.saveListData = saveTopologyDTOListData;
exports.getAllData = getAllTopologyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyDTODataInit();
}

var overrideModule = '../overrides/TopologyDTO';
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



