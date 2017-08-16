'use strict';

//Model Definition File for PathConstraintInfo.js


'use strict';
/**
* Patika kurulum isteği sırasında gönderilen constraint veri modeli.
*/
exports.PathConstraintInfo =  {
    type:'class',
    name:'PathConstraintInfo',
    fields: {
        availableBandwidth : { name: 'availableBandwidth', type: 'Long' }, 
        securityLevel : { name: 'securityLevel', type: 'Integer' }
    }
}


//Mockup System for PathConstraintInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathConstraintInfo';
var dto_name = 'PathConstraintInfo';

function PathConstraintInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathConstraintInfoData();
    }
}

function genPathConstraintInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathConstraintInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathConstraintInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathConstraintInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathConstraintInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathConstraintInfoData(data) {
    return mockup.saveData(data_key, data);
}

function savePathConstraintInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathConstraintInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = PathConstraintInfoDataInit;
exports.genData = genPathConstraintInfoData;
exports.getData = getPathConstraintInfoData;
exports.findData = findPathConstraintInfoData;
exports.getListData = getPathConstraintInfoListData;
exports.deleteData = deletePathConstraintInfoData;
exports.saveData = savePathConstraintInfoData;
exports.saveListData = savePathConstraintInfoListData;
exports.getAllData = getAllPathConstraintInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathConstraintInfoDataInit();
}

var overrideModule = '../overrides/PathConstraintInfo';
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



