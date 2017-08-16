'use strict';

//Model Definition File for AbstractListOptions.js

//var SortOptions = require('./SortOptions');

'use strict';
/**
* Tüm listeleme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
exports.AbstractListOptions =  {
    type:'class',
    name:'AbstractListOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }
    }
}


//Mockup System for AbstractListOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAbstractListOptions';
var dto_name = 'AbstractListOptions';

function AbstractListOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAbstractListOptionsData();
    }
}

function genAbstractListOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAbstractListOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAbstractListOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAbstractListOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAbstractListOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAbstractListOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAbstractListOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAbstractListOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AbstractListOptionsDataInit;
exports.genData = genAbstractListOptionsData;
exports.getData = getAbstractListOptionsData;
exports.findData = findAbstractListOptionsData;
exports.getListData = getAbstractListOptionsListData;
exports.deleteData = deleteAbstractListOptionsData;
exports.saveData = saveAbstractListOptionsData;
exports.saveListData = saveAbstractListOptionsListData;
exports.getAllData = getAllAbstractListOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AbstractListOptionsDataInit();
}

var overrideModule = '../overrides/AbstractListOptions';
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



