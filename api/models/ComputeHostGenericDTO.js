'use strict';

//Model Definition File for ComputeHostGenericDTO.js

//var ComputeHostInfoDTO = require('./ComputeHostInfoDTO');

'use strict';
/**
* Compute bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
exports.ComputeHostGenericDTO =  {
    type:'class',
    name:'ComputeHostGenericDTO',
    fields: {
        computeHostInfo : { name: 'computeHostInfo', type: 'ComputeHostInfoDTO', isRequired: true }, 
        rawResponseData : { name: 'rawResponseData', type: 'String', isRequired: true }
    }
}


//Mockup System for ComputeHostGenericDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostGenericDTO';
var dto_name = 'ComputeHostGenericDTO';

function ComputeHostGenericDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostGenericDTOData();
    }
}

function genComputeHostGenericDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostGenericDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostGenericDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostGenericDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostGenericDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostGenericDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostGenericDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostGenericDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostGenericDTODataInit;
exports.genData = genComputeHostGenericDTOData;
exports.getData = getComputeHostGenericDTOData;
exports.findData = findComputeHostGenericDTOData;
exports.getListData = getComputeHostGenericDTOListData;
exports.deleteData = deleteComputeHostGenericDTOData;
exports.saveData = saveComputeHostGenericDTOData;
exports.saveListData = saveComputeHostGenericDTOListData;
exports.getAllData = getAllComputeHostGenericDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostGenericDTODataInit();
}

var overrideModule = '../overrides/ComputeHostGenericDTO';
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



