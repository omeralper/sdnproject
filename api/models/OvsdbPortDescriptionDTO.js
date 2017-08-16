'use strict';

//Model Definition File for OvsdbPortDescriptionDTO.js

//var ONOS_PORT_TYPE = require('./ONOS_PORT_TYPE');
//var OvsdbPortNumberDTO = require('./OvsdbPortNumberDTO');

'use strict';
/**
* Portun genel bilgisini tutar
*/
exports.OvsdbPortDescriptionDTO =  {
    type:'class',
    name:'OvsdbPortDescriptionDTO',
    fields: {
        portNumber : { name: 'portNumber', type: 'OvsdbPortNumberDTO', isRequired: true }, 
        enabled : { name: 'enabled', type: 'Boolean', isRequired: true }, 
        portType : { name: 'portType', type: 'ONOS_PORT_TYPE', isRequired: true }, 
        portSpeed : { name: 'portSpeed', type: 'Long', isRequired: true }
    }
}


//Mockup System for OvsdbPortDescriptionDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDOvsdbPortDescriptionDTO';
var dto_name = 'OvsdbPortDescriptionDTO';

function OvsdbPortDescriptionDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genOvsdbPortDescriptionDTOData();
    }
}

function genOvsdbPortDescriptionDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getOvsdbPortDescriptionDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getOvsdbPortDescriptionDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findOvsdbPortDescriptionDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteOvsdbPortDescriptionDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveOvsdbPortDescriptionDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveOvsdbPortDescriptionDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllOvsdbPortDescriptionDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = OvsdbPortDescriptionDTODataInit;
exports.genData = genOvsdbPortDescriptionDTOData;
exports.getData = getOvsdbPortDescriptionDTOData;
exports.findData = findOvsdbPortDescriptionDTOData;
exports.getListData = getOvsdbPortDescriptionDTOListData;
exports.deleteData = deleteOvsdbPortDescriptionDTOData;
exports.saveData = saveOvsdbPortDescriptionDTOData;
exports.saveListData = saveOvsdbPortDescriptionDTOListData;
exports.getAllData = getAllOvsdbPortDescriptionDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    OvsdbPortDescriptionDTODataInit();
}

var overrideModule = '../overrides/OvsdbPortDescriptionDTO';
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



