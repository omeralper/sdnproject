'use strict';

//Model Definition File for AppRequest.js

//var AppDTO = require('./AppDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Uygulama verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.AppRequest =  {
    type:'class',
    name:'AppRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AppDTO', isRequired: true }
    }
}


//Mockup System for AppRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAppRequest';
var dto_name = 'AppRequest';

function AppRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAppRequestData();
    }
}

function genAppRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAppRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAppRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAppRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAppRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAppRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAppRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAppRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AppRequestDataInit;
exports.genData = genAppRequestData;
exports.getData = getAppRequestData;
exports.findData = findAppRequestData;
exports.getListData = getAppRequestListData;
exports.deleteData = deleteAppRequestData;
exports.saveData = saveAppRequestData;
exports.saveListData = saveAppRequestListData;
exports.getAllData = getAllAppRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AppRequestDataInit();
}

var overrideModule = '../overrides/AppRequest';
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



