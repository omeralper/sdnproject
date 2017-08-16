'use strict';

//Model Definition File for MvtnDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_STATUS = require('./MVTN_STATUS');
//var MVTN_TYPE = require('./MVTN_TYPE');
//var TopologyDTO = require('./TopologyDTO');

'use strict';
/**
* Sanal ağ talebini tanımlayan veri modeli.
*/
exports.MvtnDTO =  {
    type:'class',
    name:'MvtnDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        userName : { name: 'userName', type: 'String' }, 
        name : { name: 'name', type: 'String' }, 
        mvtnStatus : { name: 'mvtnStatus', type: 'MVTN_STATUS' }, 
        creationDate : { name: 'creationDate', type: 'Date' }, 
        lastUpdateDate : { name: 'lastUpdateDate', type: 'Date' }, 
        topologyData : { name: 'topologyData', type: 'TopologyDTO' }, 
        excludedDevices : { name: 'excludedDevices', type: 'Array', subType: 'string' }, 
        mvtnType : { name: 'mvtnType', type: 'MVTN_TYPE' }, 
        wanMvtnId : { name: 'wanMvtnId', type: 'Integer' }
    }
}


//Mockup System for MvtnDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnDTO';
var dto_name = 'MvtnDTO';

function MvtnDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnDTOData();
    }
}

function genMvtnDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnDTODataInit;
exports.genData = genMvtnDTOData;
exports.getData = getMvtnDTOData;
exports.findData = findMvtnDTOData;
exports.getListData = getMvtnDTOListData;
exports.deleteData = deleteMvtnDTOData;
exports.saveData = saveMvtnDTOData;
exports.saveListData = saveMvtnDTOListData;
exports.getAllData = getAllMvtnDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnDTODataInit();
}

var overrideModule = '../overrides/MvtnDTO';
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



