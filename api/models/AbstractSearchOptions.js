'use strict';

//Model Definition File for AbstractSearchOptions.js

//var AbstractListOptions = require('./AbstractListOptions');
//var QueryOptions = require('./QueryOptions');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Tüm Arama fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
exports.AbstractSearchOptions =  {
    type:'class',
    name:'AbstractSearchOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        queryOptions : { name: 'queryOptions', type: 'QueryOptions' }
    }
}


//Mockup System for AbstractSearchOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAbstractSearchOptions';
var dto_name = 'AbstractSearchOptions';

function AbstractSearchOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAbstractSearchOptionsData();
    }
}

function genAbstractSearchOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAbstractSearchOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAbstractSearchOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAbstractSearchOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAbstractSearchOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAbstractSearchOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAbstractSearchOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAbstractSearchOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AbstractSearchOptionsDataInit;
exports.genData = genAbstractSearchOptionsData;
exports.getData = getAbstractSearchOptionsData;
exports.findData = findAbstractSearchOptionsData;
exports.getListData = getAbstractSearchOptionsListData;
exports.deleteData = deleteAbstractSearchOptionsData;
exports.saveData = saveAbstractSearchOptionsData;
exports.saveListData = saveAbstractSearchOptionsListData;
exports.getAllData = getAllAbstractSearchOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AbstractSearchOptionsDataInit();
}

var overrideModule = '../overrides/AbstractSearchOptions';
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



