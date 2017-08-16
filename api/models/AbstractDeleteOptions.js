'use strict';

//Model Definition File for AbstractDeleteOptions.js


'use strict';
/**
* Tüm Silme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan soyut veri modelidir.
*/
exports.AbstractDeleteOptions =  {
    type:'class',
    name:'AbstractDeleteOptions',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        isReturnModel : { name: 'isReturnModel', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for AbstractDeleteOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAbstractDeleteOptions';
var dto_name = 'AbstractDeleteOptions';

function AbstractDeleteOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAbstractDeleteOptionsData();
    }
}

function genAbstractDeleteOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAbstractDeleteOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAbstractDeleteOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findAbstractDeleteOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAbstractDeleteOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAbstractDeleteOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveAbstractDeleteOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAbstractDeleteOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = AbstractDeleteOptionsDataInit;
exports.genData = genAbstractDeleteOptionsData;
exports.getData = getAbstractDeleteOptionsData;
exports.findData = findAbstractDeleteOptionsData;
exports.getListData = getAbstractDeleteOptionsListData;
exports.deleteData = deleteAbstractDeleteOptionsData;
exports.saveData = saveAbstractDeleteOptionsData;
exports.saveListData = saveAbstractDeleteOptionsListData;
exports.getAllData = getAllAbstractDeleteOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    AbstractDeleteOptionsDataInit();
}

var overrideModule = '../overrides/AbstractDeleteOptions';
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



