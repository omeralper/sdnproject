'use strict';

//Model Definition File for OvsdbControllerDTO.js


'use strict';
/**
* Ağ anahtarlayıcı başına ağ kontrolcü listesi
*/
exports.OvsdbControllerDTO =  {
    type:'class',
    name:'OvsdbControllerDTO',
    fields: {
        deviceId : { name: 'deviceId', type: 'String', isRequired: true }, 
        controllerInfoList : { name: 'controllerInfoList', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for OvsdbControllerDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbControllerDTO';
var dto_name = 'OvsdbControllerDTO';

function OvsdbControllerDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbControllerDTOData();
    }
}

function genOvsdbControllerDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbControllerDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbControllerDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbControllerDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbControllerDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbControllerDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbControllerDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbControllerDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbControllerDTODataInit;
exports.genData = genOvsdbControllerDTOData;
exports.getData = getOvsdbControllerDTOData;
exports.findData = findOvsdbControllerDTOData;
exports.getListData = getOvsdbControllerDTOListData;
exports.deleteData = deleteOvsdbControllerDTOData;
exports.saveData = saveOvsdbControllerDTOData;
exports.saveListData = saveOvsdbControllerDTOListData;
exports.getAllData = getAllOvsdbControllerDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbControllerDTODataInit();
}

var overrideModule = '../overrides/OvsdbControllerDTO';
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



