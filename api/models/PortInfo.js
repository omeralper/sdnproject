'use strict';

//Model Definition File for PortInfo.js

//var PortDetail = require('./PortDetail');

'use strict';
/**
* Cihaz portları hakkında detayların bulunduğu veri yapısı.
*/
exports.PortInfo =  {
    type:'class',
    name:'PortInfo',
    fields: {
        totalPorts : { name: 'totalPorts', type: 'Integer', isRequired: true }, 
        activePorts : { name: 'activePorts', type: 'Integer', isRequired: true }, 
        passivePorts : { name: 'passivePorts', type: 'Integer', isRequired: true }, 
        deadPorts : { name: 'deadPorts', type: 'Integer', isRequired: true }, 
        portDetails : { name: 'portDetails', type: 'Array', subType: 'PortDetail' }
    }
}


//Mockup System for PortInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortInfo';
var dto_name = 'PortInfo';

function PortInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortInfoData();
    }
}

function genPortInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortInfoData(data) {
    return mockup.saveData(data_key, data);
}

function savePortInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = PortInfoDataInit;
exports.genData = genPortInfoData;
exports.getData = getPortInfoData;
exports.findData = findPortInfoData;
exports.getListData = getPortInfoListData;
exports.deleteData = deletePortInfoData;
exports.saveData = savePortInfoData;
exports.saveListData = savePortInfoListData;
exports.getAllData = getAllPortInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortInfoDataInit();
}

var overrideModule = '../overrides/PortInfo';
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



