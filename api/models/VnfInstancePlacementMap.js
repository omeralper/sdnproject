'use strict';

//Model Definition File for VnfInstancePlacementMap.js

//var VnfComputeZonePair = require('./VnfComputeZonePair');

'use strict';
/**
* 
*/
exports.VnfInstancePlacementMap =  {
    type:'class',
    name:'VnfInstancePlacementMap',
    fields: {
        vnfName : { name: 'vnfName', type: 'String', isRequired: true }, 
        vnfComputeZonePair : { name: 'vnfComputeZonePair', type: 'Array', subType: 'VnfComputeZonePair', isRequired: true }
    }
}


//Mockup System for VnfInstancePlacementMap.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfInstancePlacementMap';
var dto_name = 'VnfInstancePlacementMap';

function VnfInstancePlacementMapDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfInstancePlacementMapData();
    }
}

function genVnfInstancePlacementMapData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfInstancePlacementMapData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfInstancePlacementMapListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfInstancePlacementMapData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfInstancePlacementMapData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfInstancePlacementMapData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfInstancePlacementMapListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfInstancePlacementMapData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfInstancePlacementMapDataInit;
exports.genData = genVnfInstancePlacementMapData;
exports.getData = getVnfInstancePlacementMapData;
exports.findData = findVnfInstancePlacementMapData;
exports.getListData = getVnfInstancePlacementMapListData;
exports.deleteData = deleteVnfInstancePlacementMapData;
exports.saveData = saveVnfInstancePlacementMapData;
exports.saveListData = saveVnfInstancePlacementMapListData;
exports.getAllData = getAllVnfInstancePlacementMapData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfInstancePlacementMapDataInit();
}

var overrideModule = '../overrides/VnfInstancePlacementMap';
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



