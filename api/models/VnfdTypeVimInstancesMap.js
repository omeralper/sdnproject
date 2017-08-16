'use strict';

//Model Definition File for VnfdTypeVimInstancesMap.js

//var VnfdTypeVimInstancesItem = require('./VnfdTypeVimInstancesItem');

'use strict';
/**
* Sanal ağ fonksiyon tanım tipinin çalışacan Vim lerle eşleme bilgisi.
*/
exports.VnfdTypeVimInstancesMap =  {
    type:'class',
    name:'VnfdTypeVimInstancesMap',
    fields: {
        vimInstances : { name: 'vimInstances', type: 'Array', subType: 'VnfdTypeVimInstancesItem' }
    }
}


//Mockup System for VnfdTypeVimInstancesMap.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdTypeVimInstancesMap';
var dto_name = 'VnfdTypeVimInstancesMap';

function VnfdTypeVimInstancesMapDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdTypeVimInstancesMapData();
    }
}

function genVnfdTypeVimInstancesMapData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdTypeVimInstancesMapData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdTypeVimInstancesMapListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdTypeVimInstancesMapData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdTypeVimInstancesMapData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdTypeVimInstancesMapData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdTypeVimInstancesMapListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdTypeVimInstancesMapData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdTypeVimInstancesMapDataInit;
exports.genData = genVnfdTypeVimInstancesMapData;
exports.getData = getVnfdTypeVimInstancesMapData;
exports.findData = findVnfdTypeVimInstancesMapData;
exports.getListData = getVnfdTypeVimInstancesMapListData;
exports.deleteData = deleteVnfdTypeVimInstancesMapData;
exports.saveData = saveVnfdTypeVimInstancesMapData;
exports.saveListData = saveVnfdTypeVimInstancesMapListData;
exports.getAllData = getAllVnfdTypeVimInstancesMapData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdTypeVimInstancesMapDataInit();
}

var overrideModule = '../overrides/VnfdTypeVimInstancesMap';
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



