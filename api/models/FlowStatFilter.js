'use strict';

//Model Definition File for FlowStatFilter.js


'use strict';
/**
* Akış istatistiklerinin hepsini değil de sadece eşleşme alanları belirtilen değerlerde olanları almaya yarar
*/
exports.FlowStatFilter =  {
    type:'class',
    name:'FlowStatFilter',
    fields: {
        srcIP : { name: 'srcIP', type: 'String' }, 
        dstIP : { name: 'dstIP', type: 'String' }, 
        protocol : { name: 'protocol', type: 'String' }, 
        srcPort : { name: 'srcPort', type: 'Integer' }, 
        dstPort : { name: 'dstPort', type: 'Integer' }, 
        device : { name: 'device', type: 'Long' }
    }
}


//Mockup System for FlowStatFilter.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowStatFilter';
var dto_name = 'FlowStatFilter';

function FlowStatFilterDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowStatFilterData();
    }
}

function genFlowStatFilterData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowStatFilterData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowStatFilterListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowStatFilterData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowStatFilterData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowStatFilterData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowStatFilterListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowStatFilterData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowStatFilterDataInit;
exports.genData = genFlowStatFilterData;
exports.getData = getFlowStatFilterData;
exports.findData = findFlowStatFilterData;
exports.getListData = getFlowStatFilterListData;
exports.deleteData = deleteFlowStatFilterData;
exports.saveData = saveFlowStatFilterData;
exports.saveListData = saveFlowStatFilterListData;
exports.getAllData = getAllFlowStatFilterData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowStatFilterDataInit();
}

var overrideModule = '../overrides/FlowStatFilter';
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



