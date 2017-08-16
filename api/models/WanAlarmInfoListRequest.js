'use strict';

//Model Definition File for WanAlarmInfoListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Geniş alan ağ alarmlarının listelenmesi için kullanılan veri yapısı.
*/
exports.WanAlarmInfoListRequest =  {
    type:'class',
    name:'WanAlarmInfoListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for WanAlarmInfoListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanAlarmInfoListRequest';
var dto_name = 'WanAlarmInfoListRequest';

function WanAlarmInfoListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanAlarmInfoListRequestData();
    }
}

function genWanAlarmInfoListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanAlarmInfoListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanAlarmInfoListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanAlarmInfoListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanAlarmInfoListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanAlarmInfoListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanAlarmInfoListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanAlarmInfoListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanAlarmInfoListRequestDataInit;
exports.genData = genWanAlarmInfoListRequestData;
exports.getData = getWanAlarmInfoListRequestData;
exports.findData = findWanAlarmInfoListRequestData;
exports.getListData = getWanAlarmInfoListRequestListData;
exports.deleteData = deleteWanAlarmInfoListRequestData;
exports.saveData = saveWanAlarmInfoListRequestData;
exports.saveListData = saveWanAlarmInfoListRequestListData;
exports.getAllData = getAllWanAlarmInfoListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanAlarmInfoListRequestDataInit();
}

var overrideModule = '../overrides/WanAlarmInfoListRequest';
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



