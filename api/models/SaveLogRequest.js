'use strict';

//Model Definition File for SaveLogRequest.js

//var GenericRequest = require('./GenericRequest');
//var LogDTO = require('./LogDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Günlük verilerinin sunucuya iletilmesi için kullanılan veri yapısı
*/
exports.SaveLogRequest =  {
    type:'class',
    name:'SaveLogRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'LogDTO', isRequired: true }
    }
}


//Mockup System for SaveLogRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSaveLogRequest';
var dto_name = 'SaveLogRequest';

function SaveLogRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSaveLogRequestData();
    }
}

function genSaveLogRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSaveLogRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSaveLogRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findSaveLogRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSaveLogRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSaveLogRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveSaveLogRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSaveLogRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = SaveLogRequestDataInit;
exports.genData = genSaveLogRequestData;
exports.getData = getSaveLogRequestData;
exports.findData = findSaveLogRequestData;
exports.getListData = getSaveLogRequestListData;
exports.deleteData = deleteSaveLogRequestData;
exports.saveData = saveSaveLogRequestData;
exports.saveListData = saveSaveLogRequestListData;
exports.getAllData = getAllSaveLogRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    SaveLogRequestDataInit();
}

var overrideModule = '../overrides/SaveLogRequest';
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



