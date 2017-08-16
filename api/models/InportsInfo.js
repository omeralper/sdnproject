'use strict';

//Model Definition File for InportsInfo.js


'use strict';
/**
* Eşleştirmede kullanılacak in port bilgisini tutar
*/
exports.InportsInfo =  {
    type:'class',
    name:'InportsInfo',
    fields: {
        deviceId : { name: 'deviceId', type: 'String' }, 
        inports : { name: 'inports', type: 'Array', subType: 'string' }
    }
}


//Mockup System for InportsInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDInportsInfo';
var dto_name = 'InportsInfo';

function InportsInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genInportsInfoData();
    }
}

function genInportsInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getInportsInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getInportsInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findInportsInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteInportsInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveInportsInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveInportsInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllInportsInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = InportsInfoDataInit;
exports.genData = genInportsInfoData;
exports.getData = getInportsInfoData;
exports.findData = findInportsInfoData;
exports.getListData = getInportsInfoListData;
exports.deleteData = deleteInportsInfoData;
exports.saveData = saveInportsInfoData;
exports.saveListData = saveInportsInfoListData;
exports.getAllData = getAllInportsInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    InportsInfoDataInit();
}

var overrideModule = '../overrides/InportsInfo';
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



