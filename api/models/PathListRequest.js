'use strict';

//Model Definition File for PathListRequest.js

//var GenericRequest = require('./GenericRequest');
//var PathListOptions = require('./PathListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Patikaların listelenmesi için kullanılacak istek veri modelidir.
*/
exports.PathListRequest =  {
    type:'class',
    name:'PathListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'PathListOptions', isRequired: true }
    }
}


//Mockup System for PathListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathListRequest';
var dto_name = 'PathListRequest';

function PathListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathListRequestData();
    }
}

function genPathListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function savePathListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = PathListRequestDataInit;
exports.genData = genPathListRequestData;
exports.getData = getPathListRequestData;
exports.findData = findPathListRequestData;
exports.getListData = getPathListRequestListData;
exports.deleteData = deletePathListRequestData;
exports.saveData = savePathListRequestData;
exports.saveListData = savePathListRequestListData;
exports.getAllData = getAllPathListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathListRequestDataInit();
}

var overrideModule = '../overrides/PathListRequest';
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



