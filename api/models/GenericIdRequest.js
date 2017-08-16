'use strict';

//Model Definition File for GenericIdRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Genel olarak ID değeri ile yapılan isteklerde kullanılan veri yapısı.
*/
exports.GenericIdRequest =  {
    type:'class',
    name:'GenericIdRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for GenericIdRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericIdRequest';
var dto_name = 'GenericIdRequest';

function GenericIdRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericIdRequestData();
    }
}

function genGenericIdRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericIdRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericIdRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericIdRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericIdRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericIdRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericIdRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericIdRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericIdRequestDataInit;
exports.genData = genGenericIdRequestData;
exports.getData = getGenericIdRequestData;
exports.findData = findGenericIdRequestData;
exports.getListData = getGenericIdRequestListData;
exports.deleteData = deleteGenericIdRequestData;
exports.saveData = saveGenericIdRequestData;
exports.saveListData = saveGenericIdRequestListData;
exports.getAllData = getAllGenericIdRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericIdRequestDataInit();
}

var overrideModule = '../overrides/GenericIdRequest';
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



