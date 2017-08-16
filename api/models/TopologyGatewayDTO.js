'use strict';

//Model Definition File for TopologyGatewayDTO.js


'use strict';
/**
* Topoloji gateway transfer modeli.
*/
exports.TopologyGatewayDTO =  {
    type:'class',
    name:'TopologyGatewayDTO',
    fields: {
        gatewayRequired : { name: 'gatewayRequired', type: 'Boolean' }, 
        gatewayIp : { name: 'gatewayIp', type: 'String' }, 
        gatewaySubnet : { name: 'gatewaySubnet', type: 'String' }
    }
}


//Mockup System for TopologyGatewayDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyGatewayDTO';
var dto_name = 'TopologyGatewayDTO';

function TopologyGatewayDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyGatewayDTOData();
    }
}

function genTopologyGatewayDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyGatewayDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyGatewayDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyGatewayDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyGatewayDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyGatewayDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyGatewayDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyGatewayDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyGatewayDTODataInit;
exports.genData = genTopologyGatewayDTOData;
exports.getData = getTopologyGatewayDTOData;
exports.findData = findTopologyGatewayDTOData;
exports.getListData = getTopologyGatewayDTOListData;
exports.deleteData = deleteTopologyGatewayDTOData;
exports.saveData = saveTopologyGatewayDTOData;
exports.saveListData = saveTopologyGatewayDTOListData;
exports.getAllData = getAllTopologyGatewayDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyGatewayDTODataInit();
}

var overrideModule = '../overrides/TopologyGatewayDTO';
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



