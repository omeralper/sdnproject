'use strict';

//Model Definition File for WanDomainListRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var WanDomainListDTO = require('./WanDomainListDTO');

'use strict';
/**
* Alan tanımı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanDomainListRequest =  {
    type:'class',
    name:'WanDomainListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'WanDomainListDTO', isRequired: true }
    }
}


//Mockup System for WanDomainListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainListRequest';
var dto_name = 'WanDomainListRequest';

function WanDomainListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainListRequestData();
    }
}

function genWanDomainListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainListRequestDataInit;
exports.genData = genWanDomainListRequestData;
exports.getData = getWanDomainListRequestData;
exports.findData = findWanDomainListRequestData;
exports.getListData = getWanDomainListRequestListData;
exports.deleteData = deleteWanDomainListRequestData;
exports.saveData = saveWanDomainListRequestData;
exports.saveListData = saveWanDomainListRequestListData;
exports.getAllData = getAllWanDomainListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainListRequestDataInit();
}

var overrideModule = '../overrides/WanDomainListRequest';
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



