'use strict';

//Model Definition File for SearchOptions.js

//var AbstractSearchOptions = require('./AbstractSearchOptions');
//var QueryOptions = require('./QueryOptions');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Tüm Arama fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan veri modelidir.
*/
exports.SearchOptions =  {
    type:'class',
    name:'SearchOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        queryOptions : { name: 'queryOptions', type: 'QueryOptions' }
    }
}


//Mockup System for SearchOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSearchOptions';
var dto_name = 'SearchOptions';

function SearchOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSearchOptionsData();
    }
}

function genSearchOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSearchOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSearchOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findSearchOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSearchOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSearchOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveSearchOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSearchOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = SearchOptionsDataInit;
exports.genData = genSearchOptionsData;
exports.getData = getSearchOptionsData;
exports.findData = findSearchOptionsData;
exports.getListData = getSearchOptionsListData;
exports.deleteData = deleteSearchOptionsData;
exports.saveData = saveSearchOptionsData;
exports.saveListData = saveSearchOptionsListData;
exports.getAllData = getAllSearchOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    SearchOptionsDataInit();
}

var overrideModule = '../overrides/SearchOptions';
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



