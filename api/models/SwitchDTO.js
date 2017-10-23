'use strict';

//Model Definition File for SwitchDTO.js

//var AddressInfo = require('./AddressInfo');
//var AlarmInfo = require('./AlarmInfo');
//var BandwidthInfo = require('./BandwidthInfo');
//var BaseDTO = require('./BaseDTO');
//var CONNECTION_MODE = require('./CONNECTION_MODE');
//var DeviceInfo = require('./DeviceInfo');
//var DeviceProfileInfo = require('./DeviceProfileInfo');
//var LocationInfo = require('./LocationInfo');
//var MvtnPortInfo = require('./MvtnPortInfo');
//var OFFLINE_MODE = require('./OFFLINE_MODE');
//var PortInfo = require('./PortInfo');
//var SECURITY_MODE = require('./SECURITY_MODE');
//var SWITCH_MODE = require('./SWITCH_MODE');
//var SWITCH_STATUS = require('./SWITCH_STATUS');
//var StatsDetail = require('./StatsDetail');
//var SupportInfo = require('./SupportInfo');

'use strict';
/**
* Anahtarlayıcı veri transfer veri modeli.
*/
exports.SwitchDTO =  {
    type:'class',
    name:'SwitchDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        controllerId : { name: 'controllerId', type: 'String' }, 
        slaveControllerIds : { name: 'slaveControllerIds', type: 'Array', subType: 'string' }, 
        address : { name: 'address', type: 'AddressInfo' }, 
        managementPort : { name: 'managementPort', type: 'String' }, 
        connectionMode : { name: 'connectionMode', type: 'CONNECTION_MODE' }, 
        offlineMode : { name: 'offlineMode', type: 'OFFLINE_MODE' }, 
        datapathId : { name: 'datapathId', type: 'String' }, 
        enrichedDeviceId : { name: 'enrichedDeviceId', type: 'String' }, 
        status : { name: 'status', type: 'SWITCH_STATUS' }, 
        utilization : { name: 'utilization', type: 'String' }, 
        deviceType : { name: 'deviceType', type: 'String' }, 
        mode : { name: 'mode', type: 'SWITCH_MODE' }, 
        supports : { name: 'supports', type: 'SupportInfo' }, 
        deviceInfo : { name: 'deviceInfo', type: 'DeviceInfo' }, 
        bandwidth : { name: 'bandwidth', type: 'BandwidthInfo' }, 
        portInfo : { name: 'portInfo', type: 'PortInfo' }, 
        activeSince : { name: 'activeSince', type: 'Date' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }, 
        topologyId : { name: 'topologyId', type: 'String' }, 
        securityMode : { name: 'securityMode', type: 'SECURITY_MODE' }, 
        isEdgeSwitch : { name: 'isEdgeSwitch', type: 'Boolean' }, 
        location : { name: 'location', type: 'LocationInfo' }, 
        alarms : { name: 'alarms', type: 'Array', subType: 'AlarmInfo' }, 
        networks : { name: 'networks', type: 'Array', subType: 'string' }, 
        stats : { name: 'stats', type: 'StatsDetail' }, 
        flows : { name: 'flows', type: 'Long' }, 
        powerUsage : { name: 'powerUsage', type: 'Double' }, 
        totalBandwidth : { name: 'totalBandwidth', type: 'String' }, 
        powerSaverModeEnabled : { name: 'powerSaverModeEnabled', type: 'Boolean' }, 
        depth : { name: 'depth', type: 'Long' }, 
        blocked : { name: 'blocked', type: 'Boolean' }, 
        required : { name: 'required', type: 'Boolean' }, 
        colorCode : { name: 'colorCode', type: 'String' }, 
        deviceProfile : { name: 'deviceProfile', type: 'DeviceProfileInfo' }, 
        mvtnPortInfo : { name: 'mvtnPortInfo', type: 'MvtnPortInfo' }, 
        isBlockedForMvtn : { name: 'isBlockedForMvtn', type: 'Boolean' }, 
        netconfName : { name: 'netconfName', type: 'String' }, 
        netconfPassword : { name: 'netconfPassword', type: 'String' }, 
        groupName : { name: 'groupName', type: 'String' }, 
        dpdk : { name: 'dpdk', type: 'Boolean' }, 
        isMeterEnabled : { name: 'isMeterEnabled', type: 'Boolean' }, 
        isSSLSupported : { name: 'isSSLSupported', type: 'Boolean' }, 
        isOpenStackSupported : { name: 'isOpenStackSupported', type: 'Boolean' }, 
        isControllerDevice : { name: 'isControllerDevice', type: 'Boolean' }, 
        usingControlChannel : { name: 'usingControlChannel', type: 'Boolean' }, 
        openStackNodeName : { name: 'openStackNodeName', type: 'String' }
    }
}


//Mockup System for SwitchDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSwitchDTO';
var dto_name = 'SwitchDTO';

function SwitchDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSwitchDTOData();
    }
}

function genSwitchDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSwitchDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSwitchDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSwitchDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSwitchDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSwitchDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSwitchDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSwitchDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SwitchDTODataInit;
exports.genData = genSwitchDTOData;
exports.getData = getSwitchDTOData;
exports.findData = findSwitchDTOData;
exports.getListData = getSwitchDTOListData;
exports.deleteData = deleteSwitchDTOData;
exports.saveData = saveSwitchDTOData;
exports.saveListData = saveSwitchDTOListData;
exports.getAllData = getAllSwitchDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SwitchDTODataInit();
}

var overrideModule = '../overrides/SwitchDTO';
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



