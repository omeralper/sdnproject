'use strict';

//Model Definition File for ControllerDTO.js

//var AddressInfo = require('./AddressInfo');
//var BaseDTO = require('./BaseDTO');
//var CONTROLLER_STATE = require('./CONTROLLER_STATE');
//var SECURITY_MODE = require('./SECURITY_MODE');

'use strict';
/**
* Kontrolcü veri transfer modeli.
*/
exports.ControllerDTO =  {
    type:'class',
    name:'ControllerDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        address : { name: 'address', type: 'AddressInfo', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        securityMode : { name: 'securityMode', type: 'SECURITY_MODE', isRequired: true }, 
        deviceCount : { name: 'deviceCount', type: 'Integer', isRequired: true }, 
        controllerState : { name: 'controllerState', type: 'CONTROLLER_STATE', isRequired: true }, 
        openflowVersions : { name: 'openflowVersions', type: 'String', isRequired: true }
    }
}


//Mockup System for ControllerDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDControllerDTO';
var dto_name = 'ControllerDTO';

function ControllerDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genControllerDTOData();
    }
}

function genControllerDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getControllerDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getControllerDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findControllerDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteControllerDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveControllerDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveControllerDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllControllerDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ControllerDTODataInit;
exports.genData = genControllerDTOData;
exports.getData = getControllerDTOData;
exports.findData = findControllerDTOData;
exports.getListData = getControllerDTOListData;
exports.deleteData = deleteControllerDTOData;
exports.saveData = saveControllerDTOData;
exports.saveListData = saveControllerDTOListData;
exports.getAllData = getAllControllerDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ControllerDTODataInit();
}

var overrideModule = '../overrides/ControllerDTO';
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



