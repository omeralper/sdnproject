'use strict';

//Model Definition File for WanDomainRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var WanDomainDTO = require('./WanDomainDTO');

'use strict';
/**
* Alan tanımı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanDomainRequest =  {
    type:'class',
    name:'WanDomainRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'WanDomainDTO', isRequired: true }
    }
}


//Mockup System for WanDomainRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanDomainRequest';
var dto_name = 'WanDomainRequest';

function WanDomainRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanDomainRequestData();
    }
}

function genWanDomainRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanDomainRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanDomainRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanDomainRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanDomainRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanDomainRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanDomainRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanDomainRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanDomainRequestDataInit;
exports.genData = genWanDomainRequestData;
exports.getData = getWanDomainRequestData;
exports.findData = findWanDomainRequestData;
exports.getListData = getWanDomainRequestListData;
exports.deleteData = deleteWanDomainRequestData;
exports.saveData = saveWanDomainRequestData;
exports.saveListData = saveWanDomainRequestListData;
exports.getAllData = getAllWanDomainRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanDomainRequestDataInit();
}

var overrideModule = '../overrides/WanDomainRequest';
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



