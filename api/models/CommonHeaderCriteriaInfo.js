'use strict';

//Model Definition File for CommonHeaderCriteriaInfo.js


'use strict';
/**
* Eşleştirmede kullanılacak genel kaynak/hedef başlık değerlerini tutar
*/
exports.CommonHeaderCriteriaInfo =  {
    type:'class',
    name:'CommonHeaderCriteriaInfo',
    fields: {
        src : { name: 'src', type: 'Array', subType: 'string' }, 
        dest : { name: 'dest', type: 'Array', subType: 'string' }
    }
}


//Mockup System for CommonHeaderCriteriaInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDCommonHeaderCriteriaInfo';
var dto_name = 'CommonHeaderCriteriaInfo';

function CommonHeaderCriteriaInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genCommonHeaderCriteriaInfoData();
    }
}

function genCommonHeaderCriteriaInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getCommonHeaderCriteriaInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getCommonHeaderCriteriaInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findCommonHeaderCriteriaInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteCommonHeaderCriteriaInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveCommonHeaderCriteriaInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveCommonHeaderCriteriaInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllCommonHeaderCriteriaInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = CommonHeaderCriteriaInfoDataInit;
exports.genData = genCommonHeaderCriteriaInfoData;
exports.getData = getCommonHeaderCriteriaInfoData;
exports.findData = findCommonHeaderCriteriaInfoData;
exports.getListData = getCommonHeaderCriteriaInfoListData;
exports.deleteData = deleteCommonHeaderCriteriaInfoData;
exports.saveData = saveCommonHeaderCriteriaInfoData;
exports.saveListData = saveCommonHeaderCriteriaInfoListData;
exports.getAllData = getAllCommonHeaderCriteriaInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    CommonHeaderCriteriaInfoDataInit();
}

var overrideModule = '../overrides/CommonHeaderCriteriaInfo';
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



