'use strict';

//Model Definition File for NacAccessPortDTO.js

//var BaseDTO = require('./BaseDTO');
//var SwitchDTO = require('./SwitchDTO');

'use strict';
/**
* Erişim Portu bilgisinin bulunduğu veri yapısı.
*/
exports.NacAccessPortDTO =  {
    type:'class',
    name:'NacAccessPortDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        switchData : { name: 'switchData', type: 'SwitchDTO', isRequired: true }, 
        portNumberList : { name: 'portNumberList', type: 'Array', subType: 'long', isRequired: true }
    }
}


//Mockup System for NacAccessPortDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDNacAccessPortDTO';
var dto_name = 'NacAccessPortDTO';

function NacAccessPortDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genNacAccessPortDTOData();
    }
}

function genNacAccessPortDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getNacAccessPortDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getNacAccessPortDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findNacAccessPortDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteNacAccessPortDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveNacAccessPortDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveNacAccessPortDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllNacAccessPortDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = NacAccessPortDTODataInit;
exports.genData = genNacAccessPortDTOData;
exports.getData = getNacAccessPortDTOData;
exports.findData = findNacAccessPortDTOData;
exports.getListData = getNacAccessPortDTOListData;
exports.deleteData = deleteNacAccessPortDTOData;
exports.saveData = saveNacAccessPortDTOData;
exports.saveListData = saveNacAccessPortDTOListData;
exports.getAllData = getAllNacAccessPortDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    NacAccessPortDTODataInit();
}

var overrideModule = '../overrides/NacAccessPortDTO';
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



