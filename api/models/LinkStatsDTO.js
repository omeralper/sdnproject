'use strict';

//Model Definition File for LinkStatsDTO.js

//var BaseDTO = require('./BaseDTO');
//var PortStat = require('./PortStat');

'use strict';
/**
* Bağlantıya ait istatistik veri transfer modeli.
*/
exports.LinkStatsDTO =  {
    type:'class',
    name:'LinkStatsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        srcPortStats : { name: 'srcPortStats', type: 'PortStat', isRequired: true }, 
        dstPortStats : { name: 'dstPortStats', type: 'PortStat' }, 
        signalQuality : { name: 'signalQuality', type: 'Integer' }, 
        loss : { name: 'loss', type: 'Integer' }, 
        delay : { name: 'delay', type: 'Integer' }, 
        jitter : { name: 'jitter', type: 'Integer' }
    }
}


//Mockup System for LinkStatsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkStatsDTO';
var dto_name = 'LinkStatsDTO';

function LinkStatsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkStatsDTOData();
    }
}

function genLinkStatsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkStatsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkStatsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkStatsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkStatsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkStatsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkStatsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkStatsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkStatsDTODataInit;
exports.genData = genLinkStatsDTOData;
exports.getData = getLinkStatsDTOData;
exports.findData = findLinkStatsDTOData;
exports.getListData = getLinkStatsDTOListData;
exports.deleteData = deleteLinkStatsDTOData;
exports.saveData = saveLinkStatsDTOData;
exports.saveListData = saveLinkStatsDTOListData;
exports.getAllData = getAllLinkStatsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkStatsDTODataInit();
}

var overrideModule = '../overrides/LinkStatsDTO';
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



