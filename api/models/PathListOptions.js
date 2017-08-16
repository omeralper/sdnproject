'use strict';

//Model Definition File for PathListOptions.js

//var AbstractListOptions = require('./AbstractListOptions');
//var PathDTO = require('./PathDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Patikaların listelenmesinde kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
exports.PathListOptions =  {
    type:'class',
    name:'PathListOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        data : { name: 'data', type: 'PathDTO' }
    }
}


//Mockup System for PathListOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathListOptions';
var dto_name = 'PathListOptions';

function PathListOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathListOptionsData();
    }
}

function genPathListOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathListOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathListOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathListOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathListOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathListOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function savePathListOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathListOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = PathListOptionsDataInit;
exports.genData = genPathListOptionsData;
exports.getData = getPathListOptionsData;
exports.findData = findPathListOptionsData;
exports.getListData = getPathListOptionsListData;
exports.deleteData = deletePathListOptionsData;
exports.saveData = savePathListOptionsData;
exports.saveListData = savePathListOptionsListData;
exports.getAllData = getAllPathListOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathListOptionsDataInit();
}

var overrideModule = '../overrides/PathListOptions';
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



