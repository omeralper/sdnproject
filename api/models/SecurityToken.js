'use strict';

//Model Definition File for SecurityToken.js


'use strict';
/**
* API iletişimi sırasında iletilen verilerin güvenliğinin sağlanması ve fonksiyonlara yapılan isteklerin kontrol edilmesi amacıyla tüm istek-cevap verilerinde eklenecek veri yapısıdır.
*/
exports.SecurityToken =  {
    type:'class',
    name:'SecurityToken',
    fields: {
        requestId : { name: 'requestId', type: 'String', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }
    }
}


//Mockup System for SecurityToken.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSecurityToken';
var dto_name = 'SecurityToken';

function SecurityTokenDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSecurityTokenData();
    }
}

function genSecurityTokenData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSecurityTokenData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSecurityTokenListData(options) {
    return mockup.getListData(data_key, options);
}

function findSecurityTokenData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSecurityTokenData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSecurityTokenData(data) {
    return mockup.saveData(data_key, data);
}

function saveSecurityTokenListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSecurityTokenData() {
    return mockup.getAllData(data_key);
}

exports.init = SecurityTokenDataInit;
exports.genData = genSecurityTokenData;
exports.getData = getSecurityTokenData;
exports.findData = findSecurityTokenData;
exports.getListData = getSecurityTokenListData;
exports.deleteData = deleteSecurityTokenData;
exports.saveData = saveSecurityTokenData;
exports.saveListData = saveSecurityTokenListData;
exports.getAllData = getAllSecurityTokenData;

function autoInit(){
    mockup.initDatabase(data_key);
    SecurityTokenDataInit();
}

var overrideModule = '../overrides/SecurityToken';
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



