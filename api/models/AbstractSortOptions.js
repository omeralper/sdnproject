'use strict';

//Model Definition File for AbstractSortOptions.js


'use strict';
/**
* API fonksiyonlarında veri sıralamasının nasıl yapılacağının iletilmesini sağlayan soyut veri modelidir.
*/
exports.AbstractSortOptions =  {
    type:'class',
    name:'AbstractSortOptions',
    fields: {
        fieldName : { name: 'fieldName', type: 'String', isRequired: true }, 
        isAscend : { name: 'isAscend', type: 'Boolean' }
    }
}


//Mockup System for AbstractSortOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAbstractSortOptions';
var dto_name = 'AbstractSortOptions';

function AbstractSortOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAbstractSortOptionsData();
    }
}

function genAbstractSortOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAbstractSortOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAbstractSortOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAbstractSortOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAbstractSortOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAbstractSortOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAbstractSortOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAbstractSortOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AbstractSortOptionsDataInit;
exports.genData = genAbstractSortOptionsData;
exports.getData = getAbstractSortOptionsData;
exports.findData = findAbstractSortOptionsData;
exports.getListData = getAbstractSortOptionsListData;
exports.deleteData = deleteAbstractSortOptionsData;
exports.saveData = saveAbstractSortOptionsData;
exports.saveListData = saveAbstractSortOptionsListData;
exports.getAllData = getAllAbstractSortOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AbstractSortOptionsDataInit();
}

var overrideModule = '../overrides/AbstractSortOptions';
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



