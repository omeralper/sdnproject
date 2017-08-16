'use strict';

//Model Definition File for PathRequest.js

//var GenericRequest = require('./GenericRequest');
//var PathDTO = require('./PathDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Patika oluşturmak için kullanılacak istek veri modelidir.
*/
exports.PathRequest =  {
    type:'class',
    name:'PathRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'PathDTO', isRequired: true }
    }
}


//Mockup System for PathRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPathRequest';
var dto_name = 'PathRequest';

function PathRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPathRequestData();
    }
}

function genPathRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPathRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPathRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findPathRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePathRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function savePathRequestData(data) {
    return mockup.saveData(data_key, data);
}

function savePathRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPathRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = PathRequestDataInit;
exports.genData = genPathRequestData;
exports.getData = getPathRequestData;
exports.findData = findPathRequestData;
exports.getListData = getPathRequestListData;
exports.deleteData = deletePathRequestData;
exports.saveData = savePathRequestData;
exports.saveListData = savePathRequestListData;
exports.getAllData = getAllPathRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    PathRequestDataInit();
}

var overrideModule = '../overrides/PathRequest';
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



