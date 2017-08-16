'use strict';

//Model Definition File for WanPortInfoListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Geniş alan ağ verilerinin listelenmesi için kullanılan veri yapısı.
*/
exports.WanPortInfoListRequest =  {
    type:'class',
    name:'WanPortInfoListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for WanPortInfoListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoListRequest';
var dto_name = 'WanPortInfoListRequest';

function WanPortInfoListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoListRequestData();
    }
}

function genWanPortInfoListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoListRequestDataInit;
exports.genData = genWanPortInfoListRequestData;
exports.getData = getWanPortInfoListRequestData;
exports.findData = findWanPortInfoListRequestData;
exports.getListData = getWanPortInfoListRequestListData;
exports.deleteData = deleteWanPortInfoListRequestData;
exports.saveData = saveWanPortInfoListRequestData;
exports.saveListData = saveWanPortInfoListRequestListData;
exports.getAllData = getAllWanPortInfoListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoListRequestDataInit();
}

var overrideModule = '../overrides/WanPortInfoListRequest';
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



