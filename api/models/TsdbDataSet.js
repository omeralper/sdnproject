'use strict';

//Model Definition File for TsdbDataSet.js

//var TsdbTagValue = require('./TsdbTagValue');

'use strict';
/**
* aynı tag&#x3D;val değerlerine sahip veri  noktalarının kümesi
*/
exports.TsdbDataSet =  {
    type:'class',
    name:'TsdbDataSet',
    fields: {
        metric : { name: 'metric', type: 'String', isRequired: true }, 
        tagValues : { name: 'tagValues', type: 'Array', subType: 'TsdbTagValue', isRequired: true }, 
        values : { name: 'values', type: 'Array', subType: 'double', isRequired: true }
    }
}


//Mockup System for TsdbDataSet.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTsdbDataSet';
var dto_name = 'TsdbDataSet';

function TsdbDataSetDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTsdbDataSetData();
    }
}

function genTsdbDataSetData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTsdbDataSetData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTsdbDataSetListData(options) {
    return mockup.getListData(data_key, options);
}

function findTsdbDataSetData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTsdbDataSetData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTsdbDataSetData(data) {
    return mockup.saveData(data_key, data);
}

function saveTsdbDataSetListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTsdbDataSetData() {
    return mockup.getAllData(data_key);
}

exports.init = TsdbDataSetDataInit;
exports.genData = genTsdbDataSetData;
exports.getData = getTsdbDataSetData;
exports.findData = findTsdbDataSetData;
exports.getListData = getTsdbDataSetListData;
exports.deleteData = deleteTsdbDataSetData;
exports.saveData = saveTsdbDataSetData;
exports.saveListData = saveTsdbDataSetListData;
exports.getAllData = getAllTsdbDataSetData;

function autoInit(){
    mockup.initDatabase(data_key);
    TsdbDataSetDataInit();
}

var overrideModule = '../overrides/TsdbDataSet';
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



