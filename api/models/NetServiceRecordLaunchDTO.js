'use strict';

//Model Definition File for NetServiceRecordLaunchDTO.js

//var BaseDTO = require('./BaseDTO');
//var VnfdTypeVimInstancesMap = require('./VnfdTypeVimInstancesMap');
//var object = require('./object');

'use strict';
/**
* Ağ servis kayıtı başlatma veri yapısı.
*/
exports.NetServiceRecordLaunchDTO =  {
    type:'class',
    name:'NetServiceRecordLaunchDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        keys : { name: 'keys', type: 'Array', subType: 'string' }, 
        configurations : { name: 'configurations', type: 'Object' }, 
        vduVimInstancesMap : { name: 'vduVimInstancesMap', type: 'VnfdTypeVimInstancesMap' }
    }
}


//Mockup System for NetServiceRecordLaunchDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNetServiceRecordLaunchDTO';
var dto_name = 'NetServiceRecordLaunchDTO';

function NetServiceRecordLaunchDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNetServiceRecordLaunchDTOData();
    }
}

function genNetServiceRecordLaunchDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNetServiceRecordLaunchDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNetServiceRecordLaunchDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNetServiceRecordLaunchDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNetServiceRecordLaunchDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNetServiceRecordLaunchDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNetServiceRecordLaunchDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNetServiceRecordLaunchDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NetServiceRecordLaunchDTODataInit;
exports.genData = genNetServiceRecordLaunchDTOData;
exports.getData = getNetServiceRecordLaunchDTOData;
exports.findData = findNetServiceRecordLaunchDTOData;
exports.getListData = getNetServiceRecordLaunchDTOListData;
exports.deleteData = deleteNetServiceRecordLaunchDTOData;
exports.saveData = saveNetServiceRecordLaunchDTOData;
exports.saveListData = saveNetServiceRecordLaunchDTOListData;
exports.getAllData = getAllNetServiceRecordLaunchDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NetServiceRecordLaunchDTODataInit();
}

var overrideModule = '../overrides/NetServiceRecordLaunchDTO';
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



