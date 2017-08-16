'use strict';

//Model Definition File for TopologyInfoDTO.js

//var AlarmInfo = require('./AlarmInfo');
//var BaseDTO = require('./BaseDTO');
//var MVTN_TYPE = require('./MVTN_TYPE');
//var StatsDetail = require('./StatsDetail');
//var TOPOLOGY_STATUS = require('./TOPOLOGY_STATUS');
//var TOPOLOGY_TYPE = require('./TOPOLOGY_TYPE');
//var TopologyGatewayDTO = require('./TopologyGatewayDTO');

'use strict';
/**
* Topoloji detaylarının bulunduğu veri yapısı.
*/
exports.TopologyInfoDTO =  {
    type:'class',
    name:'TopologyInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        status : { name: 'status', type: 'TOPOLOGY_STATUS', isRequired: true }, 
        type : { name: 'type', type: 'TOPOLOGY_TYPE', isRequired: true }, 
        stats : { name: 'stats', type: 'StatsDetail' }, 
        alarms : { name: 'alarms', type: 'Array', subType: 'AlarmInfo' }, 
        activeSince : { name: 'activeSince', type: 'Date' }, 
        weight : { name: 'weight', type: 'Integer' }, 
        mvtnType : { name: 'mvtnType', type: 'MVTN_TYPE' }, 
        maxDepth : { name: 'maxDepth', type: 'Integer' }, 
        elementCountPerDepth : { name: 'elementCountPerDepth', type: 'Array', subType: 'integer' }, 
        macAddresses : { name: 'macAddresses', type: 'Array', subType: 'string' }, 
        ipAddressess : { name: 'ipAddressess', type: 'Array', subType: 'string' }, 
        dnsServers : { name: 'dnsServers', type: 'Array', subType: 'string' }, 
        portRanges : { name: 'portRanges', type: 'Array', subType: 'string' }, 
        topologyGateway : { name: 'topologyGateway', type: 'TopologyGatewayDTO' }, 
        bandwidth : { name: 'bandwidth', type: 'Long' }, 
        switchSecurityLevel : { name: 'switchSecurityLevel', type: 'Integer' }, 
        linkSecurityLevel : { name: 'linkSecurityLevel', type: 'Integer' }, 
        delay : { name: 'delay', type: 'Long' }, 
        jitter : { name: 'jitter', type: 'Float' }, 
        packetLossRate : { name: 'packetLossRate', type: 'Float' }, 
        collision : { name: 'collision', type: 'Float' }, 
        maximumNumberOfUser : { name: 'maximumNumberOfUser', type: 'Integer' }, 
        vlanTag : { name: 'vlanTag', type: 'Integer' }, 
        dnsServer : { name: 'dnsServer', type: 'String' }
    }
}


//Mockup System for TopologyInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyInfoDTO';
var dto_name = 'TopologyInfoDTO';

function TopologyInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyInfoDTOData();
    }
}

function genTopologyInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyInfoDTODataInit;
exports.genData = genTopologyInfoDTOData;
exports.getData = getTopologyInfoDTOData;
exports.findData = findTopologyInfoDTOData;
exports.getListData = getTopologyInfoDTOListData;
exports.deleteData = deleteTopologyInfoDTOData;
exports.saveData = saveTopologyInfoDTOData;
exports.saveListData = saveTopologyInfoDTOListData;
exports.getAllData = getAllTopologyInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyInfoDTODataInit();
}

var overrideModule = '../overrides/TopologyInfoDTO';
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



