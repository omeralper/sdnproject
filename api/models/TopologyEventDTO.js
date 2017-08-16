'use strict';

//Model Definition File for TopologyEventDTO.js

//var BaseDTO = require('./BaseDTO');
//var TOPOLOGY_EVENT_TYPE = require('./TOPOLOGY_EVENT_TYPE');
//var object = require('./object');

'use strict';
/**
* Topoloji event veri transfer veri modeli.
*/
exports.TopologyEventDTO =  {
    type:'class',
    name:'TopologyEventDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        type : { name: 'type', type: 'TOPOLOGY_EVENT_TYPE', isRequired: true }, 
        value : { name: 'value', type: 'Object' }, 
        topologyId : { name: 'topologyId', type: 'String' }
    }
}


//Mockup System for TopologyEventDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyEventDTO';
var dto_name = 'TopologyEventDTO';

function TopologyEventDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyEventDTOData();
    }
}

function genTopologyEventDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyEventDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyEventDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyEventDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyEventDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyEventDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyEventDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyEventDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyEventDTODataInit;
exports.genData = genTopologyEventDTOData;
exports.getData = getTopologyEventDTOData;
exports.findData = findTopologyEventDTOData;
exports.getListData = getTopologyEventDTOListData;
exports.deleteData = deleteTopologyEventDTOData;
exports.saveData = saveTopologyEventDTOData;
exports.saveListData = saveTopologyEventDTOListData;
exports.getAllData = getAllTopologyEventDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyEventDTODataInit();
}

var overrideModule = '../overrides/TopologyEventDTO';
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



