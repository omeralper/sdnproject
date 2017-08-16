'use strict';

//Model Definition File for SubLinkDTO.js

//var AlarmInfo = require('./AlarmInfo');
//var CONNECTION_TYPE = require('./CONNECTION_TYPE');
//var LINK_MEDIUM = require('./LINK_MEDIUM');
//var LINK_STATUS = require('./LINK_STATUS');
//var LinkDTO = require('./LinkDTO');
//var PathConstraintInfo = require('./PathConstraintInfo');
//var PortDetail = require('./PortDetail');

'use strict';
/**
* Sanal Bağlantı veri transfer veri modeli.
*/
exports.SubLinkDTO =  {
    type:'class',
    name:'SubLinkDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        status : { name: 'status', type: 'LINK_STATUS', isRequired: true }, 
        srcPort : { name: 'srcPort', type: 'PortDetail', isRequired: true }, 
        destPort : { name: 'destPort', type: 'PortDetail', isRequired: true }, 
        signalQuality : { name: 'signalQuality', type: 'Integer' }, 
        loss : { name: 'loss', type: 'Float' }, 
        delay : { name: 'delay', type: 'Long' }, 
        isWanLink : { name: 'isWanLink', type: 'Boolean' }, 
        measureDelay : { name: 'measureDelay', type: 'Boolean' }, 
        jitter : { name: 'jitter', type: 'Float' }, 
        bandwidth : { name: 'bandwidth', type: 'Long' }, 
        bandwidthUtilization : { name: 'bandwidthUtilization', type: 'Double' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer', isRequired: true }, 
        collision : { name: 'collision', type: 'Float' }, 
        medium : { name: 'medium', type: 'LINK_MEDIUM' }, 
        alarms : { name: 'alarms', type: 'Array', subType: 'AlarmInfo' }, 
        blocked : { name: 'blocked', type: 'Boolean' }, 
        required : { name: 'required', type: 'Boolean' }, 
        colorCode : { name: 'colorCode', type: 'String' }, 
        linkWeight : { name: 'linkWeight', type: 'String' }, 
        connectionType : { name: 'connectionType', type: 'CONNECTION_TYPE' }, 
        topologyId : { name: 'topologyId', type: 'String', isRequired: true }, 
        constraints : { name: 'constraints', type: 'PathConstraintInfo' }, 
        queueId : { name: 'queueId', type: 'Long' }, 
        physicalLinks : { name: 'physicalLinks', type: 'Array', subType: 'LinkDTO' }
    }
}


//Mockup System for SubLinkDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSubLinkDTO';
var dto_name = 'SubLinkDTO';

function SubLinkDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSubLinkDTOData();
    }
}

function genSubLinkDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSubLinkDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSubLinkDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSubLinkDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSubLinkDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSubLinkDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSubLinkDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSubLinkDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SubLinkDTODataInit;
exports.genData = genSubLinkDTOData;
exports.getData = getSubLinkDTOData;
exports.findData = findSubLinkDTOData;
exports.getListData = getSubLinkDTOListData;
exports.deleteData = deleteSubLinkDTOData;
exports.saveData = saveSubLinkDTOData;
exports.saveListData = saveSubLinkDTOListData;
exports.getAllData = getAllSubLinkDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SubLinkDTODataInit();
}

var overrideModule = '../overrides/SubLinkDTO';
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



