'use strict';

//Model Definition File for VnfrDTO.js

//var BaseDTO = require('./BaseDTO');
//var VNFR_STATUS = require('./VNFR_STATUS');
//var VNFR_TYPE = require('./VNFR_TYPE');

'use strict';
/**
* Vnfr veri modeli.
*/
exports.VnfrDTO =  {
    type:'class',
    name:'VnfrDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        vnfdId : { name: 'vnfdId', type: 'String' }, 
        vnfdName : { name: 'vnfdName', type: 'String' }, 
        vnfrId : { name: 'vnfrId', type: 'String' }, 
        vnfrName : { name: 'vnfrName', type: 'String' }, 
        sfcId : { name: 'sfcId', type: 'Long' }, 
        vnfrHostId : { name: 'vnfrHostId', type: 'String' }, 
        inPort : { name: 'inPort', type: 'Integer' }, 
        outPort : { name: 'outPort', type: 'Integer' }, 
        vnfrStatus : { name: 'vnfrStatus', type: 'VNFR_STATUS' }, 
        metaData : { name: 'metaData', type: 'String' }, 
        vnfrType : { name: 'vnfrType', type: 'VNFR_TYPE' }
    }
}


//Mockup System for VnfrDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfrDTO';
var dto_name = 'VnfrDTO';

function VnfrDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfrDTOData();
    }
}

function genVnfrDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfrDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfrDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfrDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfrDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfrDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfrDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfrDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfrDTODataInit;
exports.genData = genVnfrDTOData;
exports.getData = getVnfrDTOData;
exports.findData = findVnfrDTOData;
exports.getListData = getVnfrDTOListData;
exports.deleteData = deleteVnfrDTOData;
exports.saveData = saveVnfrDTOData;
exports.saveListData = saveVnfrDTOListData;
exports.getAllData = getAllVnfrDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfrDTODataInit();
}

var overrideModule = '../overrides/VnfrDTO';
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



