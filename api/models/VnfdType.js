'use strict';

//Model Definition File for VnfdType.js


'use strict';
/**
* Sanal ağ fonksiyon tipi.
*/
exports.VnfdType =  {
    type:'class',
    name:'VnfdType',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }
    }
}


//Mockup System for VnfdType.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdType';
var dto_name = 'VnfdType';

function VnfdTypeDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdTypeData();
    }
}

function genVnfdTypeData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdTypeData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdTypeListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdTypeData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdTypeData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdTypeData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdTypeListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdTypeData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdTypeDataInit;
exports.genData = genVnfdTypeData;
exports.getData = getVnfdTypeData;
exports.findData = findVnfdTypeData;
exports.getListData = getVnfdTypeListData;
exports.deleteData = deleteVnfdTypeData;
exports.saveData = saveVnfdTypeData;
exports.saveListData = saveVnfdTypeListData;
exports.getAllData = getAllVnfdTypeData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdTypeDataInit();
}

var overrideModule = '../overrides/VnfdType';
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



