'use strict';

//Model Definition File for SubSwitchDTO.js

//var AddressInfo = require('./AddressInfo');
//var AlarmInfo = require('./AlarmInfo');
//var BandwidthInfo = require('./BandwidthInfo');
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
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Anahtarlayıcı veri transfer veri modeli.
*/
exports.SubSwitchDTO =  {
    type:'class',
    name:'SubSwitchDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        controllerId : { name: 'controllerId', type: 'String' }, 
        slaveControllerIds : { name: 'slaveControllerIds', type: 'Array', subType: 'string', isRequired: true }, 
        address : { name: 'address', type: 'AddressInfo', isRequired: true }, 
        managementPort : { name: 'managementPort', type: 'String' }, 
        connectionMode : { name: 'connectionMode', type: 'CONNECTION_MODE' }, 
        offlineMode : { name: 'offlineMode', type: 'OFFLINE_MODE' }, 
        datapathId : { name: 'datapathId', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'SWITCH_STATUS', isRequired: true }, 
        utilization : { name: 'utilization', type: 'String' }, 
        deviceType : { name: 'deviceType', type: 'String', isRequired: true }, 
        mode : { name: 'mode', type: 'SWITCH_MODE' }, 
        supports : { name: 'supports', type: 'SupportInfo', isRequired: true }, 
        deviceInfo : { name: 'deviceInfo', type: 'DeviceInfo', isRequired: true }, 
        bandwidth : { name: 'bandwidth', type: 'BandwidthInfo' }, 
        portInfo : { name: 'portInfo', type: 'PortInfo', isRequired: true }, 
        activeSince : { name: 'activeSince', type: 'Date' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        topologyId : { name: 'topologyId', type: 'String', isRequired: true }, 
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
        openStackNodeName : { name: 'openStackNodeName', type: 'String' }, 
        isMvtnSwitch : { name: 'isMvtnSwitch', type: 'Boolean', isRequired: true }, 
        isMvtnUsed : { name: 'isMvtnUsed', type: 'Boolean', isRequired: true }, 
        mvtnDeviceId : { name: 'mvtnDeviceId', type: 'String' }
    }
}


//Mockup System for SubSwitchDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSubSwitchDTO';
var dto_name = 'SubSwitchDTO';

function SubSwitchDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSubSwitchDTOData();
    }
}

function genSubSwitchDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSubSwitchDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSubSwitchDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSubSwitchDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSubSwitchDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSubSwitchDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSubSwitchDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSubSwitchDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SubSwitchDTODataInit;
exports.genData = genSubSwitchDTOData;
exports.getData = getSubSwitchDTOData;
exports.findData = findSubSwitchDTOData;
exports.getListData = getSubSwitchDTOListData;
exports.deleteData = deleteSubSwitchDTOData;
exports.saveData = saveSubSwitchDTOData;
exports.saveListData = saveSubSwitchDTOListData;
exports.getAllData = getAllSubSwitchDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SubSwitchDTODataInit();
}

var overrideModule = '../overrides/SubSwitchDTO';
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



