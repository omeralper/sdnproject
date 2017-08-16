'use strict';

//Model Definition File for ErrorInfo.js

//var object = require('./object');

'use strict';
/**
* API cevaplarında hata oluşması durumunda, hata detayları bu veri yapısı kullanılarak istemcilere iletilecektir. 
*/
exports.ErrorInfo =  {
    type:'class',
    name:'ErrorInfo',
    fields: {
        code : { name: 'code', type: 'Integer', isRequired: true }, 
        message : { name: 'message', type: 'String' }, 
        extras : { name: 'extras', type: 'Object' }
    }
}


//Mockup System for ErrorInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDErrorInfo';
var dto_name = 'ErrorInfo';

function ErrorInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genErrorInfoData();
    }
}

function genErrorInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getErrorInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getErrorInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findErrorInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteErrorInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveErrorInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveErrorInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllErrorInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = ErrorInfoDataInit;
exports.genData = genErrorInfoData;
exports.getData = getErrorInfoData;
exports.findData = findErrorInfoData;
exports.getListData = getErrorInfoListData;
exports.deleteData = deleteErrorInfoData;
exports.saveData = saveErrorInfoData;
exports.saveListData = saveErrorInfoListData;
exports.getAllData = getAllErrorInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    ErrorInfoDataInit();
}

var overrideModule = '../overrides/ErrorInfo';
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



