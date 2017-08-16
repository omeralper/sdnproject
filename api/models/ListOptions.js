'use strict';

//Model Definition File for ListOptions.js

//var AbstractListOptions = require('./AbstractListOptions');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Tüm listeleme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan veri modelidir.
*/
exports.ListOptions =  {
    type:'class',
    name:'ListOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }
    }
}


//Mockup System for ListOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDListOptions';
var dto_name = 'ListOptions';

function ListOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genListOptionsData();
    }
}

function genListOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getListOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getListOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findListOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteListOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveListOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveListOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllListOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = ListOptionsDataInit;
exports.genData = genListOptionsData;
exports.getData = getListOptionsData;
exports.findData = findListOptionsData;
exports.getListData = getListOptionsListData;
exports.deleteData = deleteListOptionsData;
exports.saveData = saveListOptionsData;
exports.saveListData = saveListOptionsListData;
exports.getAllData = getAllListOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    ListOptionsDataInit();
}

var overrideModule = '../overrides/ListOptions';
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



