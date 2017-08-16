'use strict';

//Model Definition File for VersionListRequest.js

//var GenericIdRequest = require('./GenericIdRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Prognet kontrolcü versiyon, build_date ve startUpDate bilgilerini almak için kullanılır
*/
exports.VersionListRequest =  {
    type:'class',
    name:'VersionListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        id : { name: 'id', type: 'String', isRequired: true }
    }
}


//Mockup System for VersionListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVersionListRequest';
var dto_name = 'VersionListRequest';

function VersionListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVersionListRequestData();
    }
}

function genVersionListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVersionListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVersionListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVersionListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVersionListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVersionListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVersionListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVersionListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VersionListRequestDataInit;
exports.genData = genVersionListRequestData;
exports.getData = getVersionListRequestData;
exports.findData = findVersionListRequestData;
exports.getListData = getVersionListRequestListData;
exports.deleteData = deleteVersionListRequestData;
exports.saveData = saveVersionListRequestData;
exports.saveListData = saveVersionListRequestListData;
exports.getAllData = getAllVersionListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VersionListRequestDataInit();
}

var overrideModule = '../overrides/VersionListRequest';
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



