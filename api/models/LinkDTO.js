'use strict';

//Model Definition File for LinkDTO.js

//var AlarmInfo = require('./AlarmInfo');
//var BaseDTO = require('./BaseDTO');
//var CONNECTION_TYPE = require('./CONNECTION_TYPE');
//var LINK_MEDIUM = require('./LINK_MEDIUM');
//var LINK_STATUS = require('./LINK_STATUS');
//var PathConstraintInfo = require('./PathConstraintInfo');
//var PortDetail = require('./PortDetail');

'use strict';
/**
* Bağlantı veri transfer veri modeli.
*/
exports.LinkDTO =  {
    type:'class',
    name:'LinkDTO',
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
        queueId : { name: 'queueId', type: 'Long' }
    }
}


//Mockup System for LinkDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkDTO';
var dto_name = 'LinkDTO';

function LinkDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkDTOData();
    }
}

function genLinkDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkDTODataInit;
exports.genData = genLinkDTOData;
exports.getData = getLinkDTOData;
exports.findData = findLinkDTOData;
exports.getListData = getLinkDTOListData;
exports.deleteData = deleteLinkDTOData;
exports.saveData = saveLinkDTOData;
exports.saveListData = saveLinkDTOListData;
exports.getAllData = getAllLinkDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkDTODataInit();
}

var overrideModule = '../overrides/LinkDTO';
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



