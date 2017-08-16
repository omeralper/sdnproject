'use strict';

//Model Definition File for TopologyOptions.js

//var BaseDTO = require('./BaseDTO');
//var TOPOLOGY_TYPE = require('./TOPOLOGY_TYPE');

'use strict';
/**
* Topoloji istek veri transfer veri modeli.
*/
exports.TopologyOptions =  {
    type:'class',
    name:'TopologyOptions',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        type : { name: 'type', type: 'TOPOLOGY_TYPE', isRequired: true }
    }
}


//Mockup System for TopologyOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyOptions';
var dto_name = 'TopologyOptions';

function TopologyOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyOptionsData();
    }
}

function genTopologyOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyOptionsDataInit;
exports.genData = genTopologyOptionsData;
exports.getData = getTopologyOptionsData;
exports.findData = findTopologyOptionsData;
exports.getListData = getTopologyOptionsListData;
exports.deleteData = deleteTopologyOptionsData;
exports.saveData = saveTopologyOptionsData;
exports.saveListData = saveTopologyOptionsListData;
exports.getAllData = getAllTopologyOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyOptionsDataInit();
}

var overrideModule = '../overrides/TopologyOptions';
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



