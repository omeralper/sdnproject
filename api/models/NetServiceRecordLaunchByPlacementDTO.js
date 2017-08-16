'use strict';

//Model Definition File for NetServiceRecordLaunchByPlacementDTO.js

//var BaseDTO = require('./BaseDTO');
//var VnfInstancePlacementMap = require('./VnfInstancePlacementMap');

'use strict';
/**
* 
*/
exports.NetServiceRecordLaunchByPlacementDTO =  {
    type:'class',
    name:'NetServiceRecordLaunchByPlacementDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        nsdId : { name: 'nsdId', type: 'String', isRequired: true }, 
        vnfInstancePlacementMap : { name: 'vnfInstancePlacementMap', type: 'VnfInstancePlacementMap' }
    }
}


//Mockup System for NetServiceRecordLaunchByPlacementDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordLaunchByPlacementDTO';
var dto_name = 'NetServiceRecordLaunchByPlacementDTO';

function NetServiceRecordLaunchByPlacementDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordLaunchByPlacementDTOData();
    }
}

function genNetServiceRecordLaunchByPlacementDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordLaunchByPlacementDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordLaunchByPlacementDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordLaunchByPlacementDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordLaunchByPlacementDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordLaunchByPlacementDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordLaunchByPlacementDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordLaunchByPlacementDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordLaunchByPlacementDTODataInit;
exports.genData = genNetServiceRecordLaunchByPlacementDTOData;
exports.getData = getNetServiceRecordLaunchByPlacementDTOData;
exports.findData = findNetServiceRecordLaunchByPlacementDTOData;
exports.getListData = getNetServiceRecordLaunchByPlacementDTOListData;
exports.deleteData = deleteNetServiceRecordLaunchByPlacementDTOData;
exports.saveData = saveNetServiceRecordLaunchByPlacementDTOData;
exports.saveListData = saveNetServiceRecordLaunchByPlacementDTOListData;
exports.getAllData = getAllNetServiceRecordLaunchByPlacementDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordLaunchByPlacementDTODataInit();
}

var overrideModule = '../overrides/NetServiceRecordLaunchByPlacementDTO';
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



