'use strict';

//Model Definition File for WanPortInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var WanPortInfoDTO = require('./WanPortInfoDTO');

'use strict';
/**
* Geniş alan ağ verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanPortInfoRequest =  {
    type:'class',
    name:'WanPortInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'WanPortInfoDTO', isRequired: true }
    }
}


//Mockup System for WanPortInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoRequest';
var dto_name = 'WanPortInfoRequest';

function WanPortInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoRequestData();
    }
}

function genWanPortInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoRequestDataInit;
exports.genData = genWanPortInfoRequestData;
exports.getData = getWanPortInfoRequestData;
exports.findData = findWanPortInfoRequestData;
exports.getListData = getWanPortInfoRequestListData;
exports.deleteData = deleteWanPortInfoRequestData;
exports.saveData = saveWanPortInfoRequestData;
exports.saveListData = saveWanPortInfoRequestListData;
exports.getAllData = getAllWanPortInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoRequestDataInit();
}

var overrideModule = '../overrides/WanPortInfoRequest';
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



