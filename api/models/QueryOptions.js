'use strict';

//Model Definition File for QueryOptions.js

//var QUERY_OP = require('./QUERY_OP');
//var QueryOptions = require('./QueryOptions');

'use strict';
/**
* API fonksiyonlarında arama yapılması için kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
exports.QueryOptions =  {
    type:'class',
    name:'QueryOptions',
    fields: {
        operator : { name: 'operator', type: 'QUERY_OP', isRequired: true }, 
        fieldName : { name: 'fieldName', type: 'String' }, 
        fieldValue : { name: 'fieldValue', type: 'String' }, 
        leftQuery : { name: 'leftQuery', type: 'QueryOptions' }, 
        rightQuery : { name: 'rightQuery', type: 'QueryOptions' }
    }
}


//Mockup System for QueryOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDQueryOptions';
var dto_name = 'QueryOptions';

function QueryOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genQueryOptionsData();
    }
}

function genQueryOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getQueryOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getQueryOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findQueryOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteQueryOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveQueryOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveQueryOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllQueryOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = QueryOptionsDataInit;
exports.genData = genQueryOptionsData;
exports.getData = getQueryOptionsData;
exports.findData = findQueryOptionsData;
exports.getListData = getQueryOptionsListData;
exports.deleteData = deleteQueryOptionsData;
exports.saveData = saveQueryOptionsData;
exports.saveListData = saveQueryOptionsListData;
exports.getAllData = getAllQueryOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    QueryOptionsDataInit();
}

var overrideModule = '../overrides/QueryOptions';
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



