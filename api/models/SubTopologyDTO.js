'use strict';

//Model Definition File for SubTopologyDTO.js

//var BaseDTO = require('./BaseDTO');
//var HostDTO = require('./HostDTO');
//var LinkDTO = require('./LinkDTO');
//var SubLinkDTO = require('./SubLinkDTO');
//var SubSwitchDTO = require('./SubSwitchDTO');
//var TopologyInfoDTO = require('./TopologyInfoDTO');

'use strict';
/**
* Sanal topolojinin fiziksel karşılığı veri transfer veri modeli.
*/
exports.SubTopologyDTO =  {
    type:'class',
    name:'SubTopologyDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        info : { name: 'info', type: 'TopologyInfoDTO', isRequired: true }, 
        switches : { name: 'switches', type: 'Array', subType: 'SubSwitchDTO' }, 
        links : { name: 'links', type: 'Array', subType: 'LinkDTO' }, 
        subLinks : { name: 'subLinks', type: 'Array', subType: 'SubLinkDTO' }, 
        hosts : { name: 'hosts', type: 'Array', subType: 'HostDTO' }
    }
}


//Mockup System for SubTopologyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSubTopologyDTO';
var dto_name = 'SubTopologyDTO';

function SubTopologyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSubTopologyDTOData();
    }
}

function genSubTopologyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSubTopologyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSubTopologyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSubTopologyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSubTopologyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSubTopologyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSubTopologyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSubTopologyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SubTopologyDTODataInit;
exports.genData = genSubTopologyDTOData;
exports.getData = getSubTopologyDTOData;
exports.findData = findSubTopologyDTOData;
exports.getListData = getSubTopologyDTOListData;
exports.deleteData = deleteSubTopologyDTOData;
exports.saveData = saveSubTopologyDTOData;
exports.saveListData = saveSubTopologyDTOListData;
exports.getAllData = getAllSubTopologyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SubTopologyDTODataInit();
}

var overrideModule = '../overrides/SubTopologyDTO';
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



