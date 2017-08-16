'use strict';

//Model Definition File for FlowSearchOptions.js

//var AbstractSearchOptions = require('./AbstractSearchOptions');
//var QueryOptions = require('./QueryOptions');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Akışlar içinde arama yapılması için kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
exports.FlowSearchOptions =  {
    type:'class',
    name:'FlowSearchOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        queryOptions : { name: 'queryOptions', type: 'QueryOptions' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for FlowSearchOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowSearchOptions';
var dto_name = 'FlowSearchOptions';

function FlowSearchOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowSearchOptionsData();
    }
}

function genFlowSearchOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowSearchOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowSearchOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowSearchOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowSearchOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowSearchOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowSearchOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowSearchOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowSearchOptionsDataInit;
exports.genData = genFlowSearchOptionsData;
exports.getData = getFlowSearchOptionsData;
exports.findData = findFlowSearchOptionsData;
exports.getListData = getFlowSearchOptionsListData;
exports.deleteData = deleteFlowSearchOptionsData;
exports.saveData = saveFlowSearchOptionsData;
exports.saveListData = saveFlowSearchOptionsListData;
exports.getAllData = getAllFlowSearchOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowSearchOptionsDataInit();
}

var overrideModule = '../overrides/FlowSearchOptions';
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



