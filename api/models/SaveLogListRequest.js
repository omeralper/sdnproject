'use strict';

//Model Definition File for SaveLogListRequest.js

//var GenericRequest = require('./GenericRequest');
//var LogDTO = require('./LogDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük verilerinin toplu olarak sunucuya iletilmesi için kullanılan veri yapısı
*/
exports.SaveLogListRequest =  {
    type:'class',
    name:'SaveLogListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'Array', subType: 'LogDTO', isRequired: true }
    }
}


//Mockup System for SaveLogListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSaveLogListRequest';
var dto_name = 'SaveLogListRequest';

function SaveLogListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSaveLogListRequestData();
    }
}

function genSaveLogListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSaveLogListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSaveLogListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSaveLogListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSaveLogListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSaveLogListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSaveLogListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSaveLogListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SaveLogListRequestDataInit;
exports.genData = genSaveLogListRequestData;
exports.getData = getSaveLogListRequestData;
exports.findData = findSaveLogListRequestData;
exports.getListData = getSaveLogListRequestListData;
exports.deleteData = deleteSaveLogListRequestData;
exports.saveData = saveSaveLogListRequestData;
exports.saveListData = saveSaveLogListRequestListData;
exports.getAllData = getAllSaveLogListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SaveLogListRequestDataInit();
}

var overrideModule = '../overrides/SaveLogListRequest';
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



