'use strict';

//Model Definition File for RoutingServicesInfo.js


'use strict';
/**
* Aksiyon olarak kullanılacak rotalama servislerinin bilgileri
*/
exports.RoutingServicesInfo =  {
    type:'class',
    name:'RoutingServicesInfo',
    fields: {
        includedDevices : { name: 'includedDevices', type: 'Array', subType: 'string' }, 
        excludedDevices : { name: 'excludedDevices', type: 'Array', subType: 'string' }, 
        useRouteHopping : { name: 'useRouteHopping', type: 'Boolean' }, 
        hopCount : { name: 'hopCount', type: 'Integer' }, 
        hopPeriod : { name: 'hopPeriod', type: 'Integer' }, 
        useSecureRouting : { name: 'useSecureRouting', type: 'Boolean' }
    }
}


//Mockup System for RoutingServicesInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoutingServicesInfo';
var dto_name = 'RoutingServicesInfo';

function RoutingServicesInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoutingServicesInfoData();
    }
}

function genRoutingServicesInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoutingServicesInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoutingServicesInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoutingServicesInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoutingServicesInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoutingServicesInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoutingServicesInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoutingServicesInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = RoutingServicesInfoDataInit;
exports.genData = genRoutingServicesInfoData;
exports.getData = getRoutingServicesInfoData;
exports.findData = findRoutingServicesInfoData;
exports.getListData = getRoutingServicesInfoListData;
exports.deleteData = deleteRoutingServicesInfoData;
exports.saveData = saveRoutingServicesInfoData;
exports.saveListData = saveRoutingServicesInfoListData;
exports.getAllData = getAllRoutingServicesInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoutingServicesInfoDataInit();
}

var overrideModule = '../overrides/RoutingServicesInfo';
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



