'use strict';

//Model Definition File for TsdbTagValue.js


'use strict';
/**
* Metrik veri noktalarında olması gereken tag&#x3D;val
*/
exports.TsdbTagValue =  {
    type:'class',
    name:'TsdbTagValue',
    fields: {
        tag : { name: 'tag', type: 'String', isRequired: true }, 
        val : { name: 'val', type: 'String', isRequired: true }
    }
}


//Mockup System for TsdbTagValue.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTsdbTagValue';
var dto_name = 'TsdbTagValue';

function TsdbTagValueDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTsdbTagValueData();
    }
}

function genTsdbTagValueData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTsdbTagValueData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTsdbTagValueListData(options) {
    return mockup.getListData(data_key, options);
}

function findTsdbTagValueData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTsdbTagValueData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTsdbTagValueData(data) {
    return mockup.saveData(data_key, data);
}

function saveTsdbTagValueListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTsdbTagValueData() {
    return mockup.getAllData(data_key);
}

exports.init = TsdbTagValueDataInit;
exports.genData = genTsdbTagValueData;
exports.getData = getTsdbTagValueData;
exports.findData = findTsdbTagValueData;
exports.getListData = getTsdbTagValueListData;
exports.deleteData = deleteTsdbTagValueData;
exports.saveData = saveTsdbTagValueData;
exports.saveListData = saveTsdbTagValueListData;
exports.getAllData = getAllTsdbTagValueData;

function autoInit(){
    mockup.initDatabase(data_key);
    TsdbTagValueDataInit();
}

var overrideModule = '../overrides/TsdbTagValue';
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



