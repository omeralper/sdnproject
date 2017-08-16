'use strict';

//Model Definition File for WanMvtnInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var WanMvtnInfoDTO = require('./WanMvtnInfoDTO');

'use strict';
/**
* Geniş alan sanal ağı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanMvtnInfoRequest =  {
    type:'class',
    name:'WanMvtnInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'WanMvtnInfoDTO', isRequired: true }
    }
}


//Mockup System for WanMvtnInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanMvtnInfoRequest';
var dto_name = 'WanMvtnInfoRequest';

function WanMvtnInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanMvtnInfoRequestData();
    }
}

function genWanMvtnInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanMvtnInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanMvtnInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanMvtnInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanMvtnInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanMvtnInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanMvtnInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanMvtnInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanMvtnInfoRequestDataInit;
exports.genData = genWanMvtnInfoRequestData;
exports.getData = getWanMvtnInfoRequestData;
exports.findData = findWanMvtnInfoRequestData;
exports.getListData = getWanMvtnInfoRequestListData;
exports.deleteData = deleteWanMvtnInfoRequestData;
exports.saveData = saveWanMvtnInfoRequestData;
exports.saveListData = saveWanMvtnInfoRequestListData;
exports.getAllData = getAllWanMvtnInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanMvtnInfoRequestDataInit();
}

var overrideModule = '../overrides/WanMvtnInfoRequest';
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



