'use strict';

//Model Definition File for Vnfd.js


'use strict';
/**
* Sanal ağ fonksiyon tipi.
*/
exports.Vnfd =  {
    type:'class',
    name:'Vnfd',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }
    }
}


//Mockup System for Vnfd.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfd';
var dto_name = 'Vnfd';

function VnfdDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdData();
    }
}

function genVnfdData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdDataInit;
exports.genData = genVnfdData;
exports.getData = getVnfdData;
exports.findData = findVnfdData;
exports.getListData = getVnfdListData;
exports.deleteData = deleteVnfdData;
exports.saveData = saveVnfdData;
exports.saveListData = saveVnfdListData;
exports.getAllData = getAllVnfdData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdDataInit();
}

var overrideModule = '../overrides/Vnfd';
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



