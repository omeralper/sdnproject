'use strict';

//Model Definition File for ComputeHostDTO.js

//var ComputeHostListDTO = require('./ComputeHostListDTO');

'use strict';
/**
* Compute bilgilerinin listesi tutmak icin kullanılacak veri modeli
*/
exports.ComputeHostDTO =  {
    type:'class',
    name:'ComputeHostDTO',
    fields: {
        computeHostList : { name: 'computeHostList', type: 'ComputeHostListDTO', isRequired: true }, 
        rawResponseData : { name: 'rawResponseData', type: 'String', isRequired: true }
    }
}


//Mockup System for ComputeHostDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDComputeHostDTO';
var dto_name = 'ComputeHostDTO';

function ComputeHostDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genComputeHostDTOData();
    }
}

function genComputeHostDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getComputeHostDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getComputeHostDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findComputeHostDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteComputeHostDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveComputeHostDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveComputeHostDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllComputeHostDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ComputeHostDTODataInit;
exports.genData = genComputeHostDTOData;
exports.getData = getComputeHostDTOData;
exports.findData = findComputeHostDTOData;
exports.getListData = getComputeHostDTOListData;
exports.deleteData = deleteComputeHostDTOData;
exports.saveData = saveComputeHostDTOData;
exports.saveListData = saveComputeHostDTOListData;
exports.getAllData = getAllComputeHostDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ComputeHostDTODataInit();
}

var overrideModule = '../overrides/ComputeHostDTO';
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



