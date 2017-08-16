'use strict';

//Model Definition File for VimInstanceBase.js


'use strict';
/**
* VIM instance tem.
*/
exports.VimInstanceBase =  {
    type:'class',
    name:'VimInstanceBase',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        name : { name: 'name', type: 'String', isRequired: true }, 
        type : { name: 'type', type: 'String', isRequired: true }
    }
}


//Mockup System for VimInstanceBase.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInstanceBase';
var dto_name = 'VimInstanceBase';

function VimInstanceBaseDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInstanceBaseData();
    }
}

function genVimInstanceBaseData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInstanceBaseData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInstanceBaseListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInstanceBaseData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInstanceBaseData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInstanceBaseData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInstanceBaseListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInstanceBaseData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInstanceBaseDataInit;
exports.genData = genVimInstanceBaseData;
exports.getData = getVimInstanceBaseData;
exports.findData = findVimInstanceBaseData;
exports.getListData = getVimInstanceBaseListData;
exports.deleteData = deleteVimInstanceBaseData;
exports.saveData = saveVimInstanceBaseData;
exports.saveListData = saveVimInstanceBaseListData;
exports.getAllData = getAllVimInstanceBaseData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInstanceBaseDataInit();
}

var overrideModule = '../overrides/VimInstanceBase';
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



