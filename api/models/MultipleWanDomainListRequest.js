'use strict';

//Model Definition File for MultipleWanDomainListRequest.js

//var GenericRequest = require('./GenericRequest');
//var MultipleWanDomainDTO = require('./MultipleWanDomainDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Alan tanımı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.MultipleWanDomainListRequest =  {
    type:'class',
    name:'MultipleWanDomainListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MultipleWanDomainDTO', isRequired: true }
    }
}


//Mockup System for MultipleWanDomainListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMultipleWanDomainListRequest';
var dto_name = 'MultipleWanDomainListRequest';

function MultipleWanDomainListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMultipleWanDomainListRequestData();
    }
}

function genMultipleWanDomainListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMultipleWanDomainListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMultipleWanDomainListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMultipleWanDomainListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMultipleWanDomainListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMultipleWanDomainListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMultipleWanDomainListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMultipleWanDomainListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MultipleWanDomainListRequestDataInit;
exports.genData = genMultipleWanDomainListRequestData;
exports.getData = getMultipleWanDomainListRequestData;
exports.findData = findMultipleWanDomainListRequestData;
exports.getListData = getMultipleWanDomainListRequestListData;
exports.deleteData = deleteMultipleWanDomainListRequestData;
exports.saveData = saveMultipleWanDomainListRequestData;
exports.saveListData = saveMultipleWanDomainListRequestListData;
exports.getAllData = getAllMultipleWanDomainListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MultipleWanDomainListRequestDataInit();
}

var overrideModule = '../overrides/MultipleWanDomainListRequest';
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



