'use strict';

//Model Definition File for WanAlarmInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var WanMvtnInfoDTO = require('./WanMvtnInfoDTO');

'use strict';
/**
* Geniş alan alarm verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanAlarmInfoRequest =  {
    type:'class',
    name:'WanAlarmInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'WanMvtnInfoDTO', isRequired: true }
    }
}


//Mockup System for WanAlarmInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoRequest';
var dto_name = 'WanAlarmInfoRequest';

function WanAlarmInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoRequestData();
    }
}

function genWanAlarmInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoRequestDataInit;
exports.genData = genWanAlarmInfoRequestData;
exports.getData = getWanAlarmInfoRequestData;
exports.findData = findWanAlarmInfoRequestData;
exports.getListData = getWanAlarmInfoRequestListData;
exports.deleteData = deleteWanAlarmInfoRequestData;
exports.saveData = saveWanAlarmInfoRequestData;
exports.saveListData = saveWanAlarmInfoRequestListData;
exports.getAllData = getAllWanAlarmInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoRequestDataInit();
}

var overrideModule = '../overrides/WanAlarmInfoRequest';
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



