'use strict';

//Model Definition File for VnfComputeZonePair.js


'use strict';
/**
* 
*/
exports.VnfComputeZonePair =  {
    type:'class',
    name:'VnfComputeZonePair',
    fields: {
        zone : { name: 'zone', type: 'String', isRequired: true }, 
        computeHostName : { name: 'computeHostName', type: 'String', isRequired: true }, 
        vimInstanceName : { name: 'vimInstanceName', type: 'String' }
    }
}


//Mockup System for VnfComputeZonePair.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfComputeZonePair';
var dto_name = 'VnfComputeZonePair';

function VnfComputeZonePairDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfComputeZonePairData();
    }
}

function genVnfComputeZonePairData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfComputeZonePairData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfComputeZonePairListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfComputeZonePairData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfComputeZonePairData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfComputeZonePairData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfComputeZonePairListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfComputeZonePairData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfComputeZonePairDataInit;
exports.genData = genVnfComputeZonePairData;
exports.getData = getVnfComputeZonePairData;
exports.findData = findVnfComputeZonePairData;
exports.getListData = getVnfComputeZonePairListData;
exports.deleteData = deleteVnfComputeZonePairData;
exports.saveData = saveVnfComputeZonePairData;
exports.saveListData = saveVnfComputeZonePairListData;
exports.getAllData = getAllVnfComputeZonePairData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfComputeZonePairDataInit();
}

var overrideModule = '../overrides/VnfComputeZonePair';
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



