'use strict';

//Model Definition File for GenericIdListRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Genel olarak ID listesi ile yapılan isteklerde kullanılan veri yapısı.
*/
exports.GenericIdListRequest =  {
    type:'class',
    name:'GenericIdListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        idList : { name: 'idList', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for GenericIdListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericIdListRequest';
var dto_name = 'GenericIdListRequest';

function GenericIdListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericIdListRequestData();
    }
}

function genGenericIdListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericIdListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericIdListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericIdListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericIdListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericIdListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericIdListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericIdListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericIdListRequestDataInit;
exports.genData = genGenericIdListRequestData;
exports.getData = getGenericIdListRequestData;
exports.findData = findGenericIdListRequestData;
exports.getListData = getGenericIdListRequestListData;
exports.deleteData = deleteGenericIdListRequestData;
exports.saveData = saveGenericIdListRequestData;
exports.saveListData = saveGenericIdListRequestListData;
exports.getAllData = getAllGenericIdListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericIdListRequestDataInit();
}

var overrideModule = '../overrides/GenericIdListRequest';
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



