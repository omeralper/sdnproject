'use strict';

//Model Definition File for DeleteOptions.js

//var AbstractDeleteOptions = require('./AbstractDeleteOptions');

'use strict';
/**
* Tüm Silme fonksiyonlarında kullanılacak kıstasların tanımlanmasını sağlayan veri modelidir.
*/
exports.DeleteOptions =  {
    type:'class',
    name:'DeleteOptions',
    fields: {
        id : { name: 'id', type: 'String', isRequired: true }, 
        isReturnModel : { name: 'isReturnModel', type: 'Boolean', isRequired: true }
    }
}


//Mockup System for DeleteOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDeleteOptions';
var dto_name = 'DeleteOptions';

function DeleteOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDeleteOptionsData();
    }
}

function genDeleteOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDeleteOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDeleteOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findDeleteOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDeleteOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDeleteOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveDeleteOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDeleteOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = DeleteOptionsDataInit;
exports.genData = genDeleteOptionsData;
exports.getData = getDeleteOptionsData;
exports.findData = findDeleteOptionsData;
exports.getListData = getDeleteOptionsListData;
exports.deleteData = deleteDeleteOptionsData;
exports.saveData = saveDeleteOptionsData;
exports.saveListData = saveDeleteOptionsListData;
exports.getAllData = getAllDeleteOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    DeleteOptionsDataInit();
}

var overrideModule = '../overrides/DeleteOptions';
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



