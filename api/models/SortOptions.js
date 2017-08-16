'use strict';

//Model Definition File for SortOptions.js

//var AbstractSortOptions = require('./AbstractSortOptions');

'use strict';
/**
* API fonksiyonlarında veri sıralamasının nasıl yapılacağının iletilmesini sağlayan soyut veri modelidir.
*/
exports.SortOptions =  {
    type:'class',
    name:'SortOptions',
    fields: {
        fieldName : { name: 'fieldName', type: 'String', isRequired: true }, 
        isAscend : { name: 'isAscend', type: 'Boolean' }
    }
}


//Mockup System for SortOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSortOptions';
var dto_name = 'SortOptions';

function SortOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSortOptionsData();
    }
}

function genSortOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSortOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSortOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findSortOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSortOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSortOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveSortOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSortOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = SortOptionsDataInit;
exports.genData = genSortOptionsData;
exports.getData = getSortOptionsData;
exports.findData = findSortOptionsData;
exports.getListData = getSortOptionsListData;
exports.deleteData = deleteSortOptionsData;
exports.saveData = saveSortOptionsData;
exports.saveListData = saveSortOptionsListData;
exports.getAllData = getAllSortOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    SortOptionsDataInit();
}

var overrideModule = '../overrides/SortOptions';
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



