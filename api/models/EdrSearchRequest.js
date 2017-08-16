'use strict';

//Model Definition File for EdrSearchRequest.js

//var EdrSearchCriteria = require('./EdrSearchCriteria');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* EDR araştırma kriterlerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.EdrSearchRequest =  {
    type:'class',
    name:'EdrSearchRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'EdrSearchCriteria', isRequired: true }
    }
}


//Mockup System for EdrSearchRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEdrSearchRequest';
var dto_name = 'EdrSearchRequest';

function EdrSearchRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEdrSearchRequestData();
    }
}

function genEdrSearchRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEdrSearchRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEdrSearchRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findEdrSearchRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEdrSearchRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEdrSearchRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveEdrSearchRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEdrSearchRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = EdrSearchRequestDataInit;
exports.genData = genEdrSearchRequestData;
exports.getData = getEdrSearchRequestData;
exports.findData = findEdrSearchRequestData;
exports.getListData = getEdrSearchRequestListData;
exports.deleteData = deleteEdrSearchRequestData;
exports.saveData = saveEdrSearchRequestData;
exports.saveListData = saveEdrSearchRequestListData;
exports.getAllData = getAllEdrSearchRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    EdrSearchRequestDataInit();
}

var overrideModule = '../overrides/EdrSearchRequest';
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



