'use strict';

//Model Definition File for FlowDeleteOptions.js


'use strict';
/**
* Akışların silinmesinde kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
exports.FlowDeleteOptions =  {
    type:'class',
    name:'FlowDeleteOptions',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }, 
        isReturnModel : { name: 'isReturnModel', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for FlowDeleteOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowDeleteOptions';
var dto_name = 'FlowDeleteOptions';

function FlowDeleteOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowDeleteOptionsData();
    }
}

function genFlowDeleteOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowDeleteOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowDeleteOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowDeleteOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowDeleteOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowDeleteOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowDeleteOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowDeleteOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowDeleteOptionsDataInit;
exports.genData = genFlowDeleteOptionsData;
exports.getData = getFlowDeleteOptionsData;
exports.findData = findFlowDeleteOptionsData;
exports.getListData = getFlowDeleteOptionsListData;
exports.deleteData = deleteFlowDeleteOptionsData;
exports.saveData = saveFlowDeleteOptionsData;
exports.saveListData = saveFlowDeleteOptionsListData;
exports.getAllData = getAllFlowDeleteOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowDeleteOptionsDataInit();
}

var overrideModule = '../overrides/FlowDeleteOptions';
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



